package handler

import (
	"net/http"
	"strconv"

	"api/domain"
	"api/usecase"
	"github.com/labstack/echo/v4"
)

type SlideHandler interface {
	Store(echo.Context) error
	FindById(echo.Context) error
	FindAll(echo.Context) error
	Update(echo.Context) error
	Delete(echo.Context) error
}

type slideHandler struct {
	su usecase.SlideUsecase
}

func NewSlideHandler(su usecase.SlideUsecase) SlideHandler {
	return &slideHandler{su}
}

func (sh *slideHandler) Store(c echo.Context) error {
	var s domain.Slide
	if err := c.Bind(&s); err != nil {
		return err
	}

	id, err := sh.su.Store(s)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusCreated, id)
}

func (sh *slideHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	s, err := sh.su.FindById(id)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, s)
}

func (sh *slideHandler) FindAll(c echo.Context) error {
	ss, err := sh.su.FindAll()
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, ss)
}

func (sh *slideHandler) Update(c echo.Context) error {
	var s domain.Slide
	if err := c.Bind(&s); err != nil {
		return err
	}

	id, err := sh.su.Update(s)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, id)
}

func (sh *slideHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	_, err := sh.su.Delete(id)
	if err != nil {
		return err
	}

	return c.NoContent(http.StatusNoContent)
}
