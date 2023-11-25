package handler

import (
	"net/http"
	"strconv"

	"api/domain"
	"api/usecase"
	"github.com/labstack/echo/v4"
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
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
	UpdateAt  string `json:"update_at"`
}

func (sh *slideHandler) FindAll(c echo.Context) error {
	slides, err := sh.su.FindAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, slides)
}

func (sh *slideHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, slide)
}

func (sh *slideHandler) Store(c echo.Context) error {
	var slide domain.Slide
	if err := c.Bind(&slide); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	s, err := sh.su.Store(&slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, s)
}

func (sh *slideHandler) Update(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	if err := c.Bind(slide); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	s, err := sh.su.Update(slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, s)
}

func (sh *slideHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	slide, err := sh.su.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	s, err := sh.su.Delete(slide)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, s)
}
