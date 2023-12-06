package handler

import (
	"net/http"

	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"

	"api/config"
	"api/domain"
	"api/usecase"
)

type SlideHandler interface {
	FindAll(c echo.Context) error
	FindById(c echo.Context) error
	Store(c echo.Context) error
	Update(c echo.Context) error
	Delete(c echo.Context) error
}

type slideHandler struct {
	su usecase.SlideUsecase
}

func NewSlideHandler(su usecase.SlideUsecase) SlideHandler {
	return &slideHandler{su}
}

type requestSlide struct {
	Title   string `json:"title"`
	Content string `json:"content"`
}

type responseSlide struct {
	UUID      uuid.UUID `json:"uuid"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt string    `json:"created_at"`
	UpdatedAt string    `json:"update_at"`
}

func (sh *slideHandler) FindAll(c echo.Context) error {
	user := config.GetCurrentUser(c)
	if user == nil {
		return c.JSON(http.StatusInternalServerError, "user not found")
	}

	slides, err := sh.su.FindAll(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := make([]*responseSlide, len(*slides))
	for i, slide := range *slides {
		res[i] = &responseSlide{
			UUID:      slide.UUID,
			Title:     slide.Title,
			Content:   slide.Content,
			CreatedAt: slide.CreatedAt.String(),
			UpdatedAt: slide.UpdatedAt.String(),
		}
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) FindById(c echo.Context) error {
	user := config.GetCurrentUser(c)
	if user == nil {
		return c.JSON(http.StatusInternalServerError, "user not found")
	}

	uuid, err := uuid.Parse(c.Param("uuid"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide, err := sh.su.FindById(user, uuid)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		UUID:      slide.UUID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Store(c echo.Context) error {
	user := config.GetCurrentUser(c)
	if user == nil {
		return c.JSON(http.StatusInternalServerError, "user not found")
	}

	req := new(requestSlide)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide := &domain.Slide{
		UUID:    uuid.New(),
		Title:   req.Title,
		Content: req.Content,
		UserID:  user.ID,
	}

	slide, err := sh.su.Store(user, slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		UUID:      slide.UUID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Update(c echo.Context) error {
	user := config.GetCurrentUser(c)
	if user == nil {
		return c.JSON(http.StatusInternalServerError, "user not found")
	}

	uuid, err := uuid.Parse(c.Param("uuid"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	req := new(requestSlide)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide, err := sh.su.FindById(user, uuid)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide = &domain.Slide{
		Model:   slide.Model,
		UUID:    slide.UUID,
		Title:   req.Title,
		Content: req.Content,
		UserID:  user.ID,
	}

	slide, err = sh.su.Update(user, slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		UUID:      slide.UUID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Delete(c echo.Context) error {
	user := config.GetCurrentUser(c)
	if user == nil {
		return c.JSON(http.StatusInternalServerError, "user not found")
	}

	uuid, err := uuid.Parse(c.Param("uuid"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide := &domain.Slide{
		UUID:   uuid,
		UserID: user.ID,
	}

	slide, err = sh.su.FindById(user, uuid)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide, err = sh.su.Delete(user, slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		UUID:      slide.UUID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}
