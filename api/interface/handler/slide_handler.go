package handler

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"

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
	ID        uint   `json:"id"`
	Title     string `json:"title"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"update_at"`
}

func (sh *slideHandler) FindAll(c echo.Context) error {
	slides, err := sh.su.FindAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := make([]*responseSlide, len(*slides))
	for i, slide := range *slides {
		res[i] = &responseSlide{
			ID:        slide.ID,
			Title:     slide.Title,
			Content:   slide.Content,
			CreatedAt: slide.CreatedAt.String(),
			UpdatedAt: slide.UpdatedAt.String(),
		}
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		ID:        slide.ID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Store(c echo.Context) error {
	req := new(requestSlide)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide := &domain.Slide{
		Title:   req.Title,
		Content: req.Content,
	}
	slide, err := sh.su.Store(slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		ID:        slide.ID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Update(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	req := new(requestSlide)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide = &domain.Slide{
		Model:   slide.Model,
		Title:   req.Title,
		Content: req.Content,
	}
	slide, err = sh.su.Update(slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		ID:        slide.ID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (sh *slideHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	slide, err = sh.su.Delete(slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseSlide{
		ID:        slide.ID,
		Title:     slide.Title,
		Content:   slide.Content,
		CreatedAt: slide.CreatedAt.String(),
		UpdatedAt: slide.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}
