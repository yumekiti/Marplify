package handler

import (
	"net/http"
	"strconv"

	"api/domain"
	"api/usecase"
	"github.com/labstack/echo/v4"
)

type UserHandler interface {
	Store(echo.Context) error
	FindById(echo.Context) error
	FindAll(echo.Context) error
	Update(echo.Context) error
	Delete(echo.Context) error
}

type userHandler struct {
	uu usecase.UserUsecase
}

func NewUserHandler(uu usecase.UserUsecase) UserHandler {
	return &userHandler{uu}
}

func (uh *userHandler) Store(c echo.Context) error {
	var u domain.User
	if err := c.Bind(&u); err != nil {
		return err
	}

	id, err := uh.uu.Store(u)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusCreated, id)
}

func (uh *userHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	u, err := uh.uu.FindById(id)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, u)
}

func (uh *userHandler) FindAll(c echo.Context) error {
	us, err := uh.uu.FindAll()
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, us)
}

func (uh *userHandler) Update(c echo.Context) error {
	var u domain.User
	if err := c.Bind(&u); err != nil {
		return err
	}

	id, err := uh.uu.Update(u)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, id)
}

func (uh *userHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	_, err := uh.uu.Delete(id)
	if err != nil {
		return err
	}

	return c.NoContent(http.StatusNoContent)
}
