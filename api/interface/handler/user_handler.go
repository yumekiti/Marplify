package handler

import (
	"net/http"
	"strconv"

	"api/domain"
	"api/usecase"
	"github.com/labstack/echo/v4"
)

type UserHandler interface {
	FindAll(c echo.Context) error
	FindById(c echo.Context) error
	Store(c echo.Context) error
	Update(c echo.Context) error
	Delete(c echo.Context) error
}

type userHandler struct {
	uu usecase.UserUsecase
}

func NewUserHandler(uu usecase.UserUsecase) UserHandler {
	return &userHandler{uu}
}

type requestUser struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type responseUser struct {
	ID        int    `json:"id"`
	UserID    string `json:"user_id"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	CreatedAt string `json:"created_at"`
	UpdateAt  string `json:"update_at"`
}

func (uh *userHandler) FindAll(c echo.Context) error {
	users, err := uh.uu.FindAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, users)
}

func (uh *userHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, user)
}

func (uh *userHandler) Store(c echo.Context) error {
	var user domain.User
	if err := c.Bind(&user); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	u, err := uh.uu.Store(&user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, u)
}

func (uh *userHandler) Update(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	if err := c.Bind(user); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	u, err := uh.uu.Update(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, u)
}

func (uh *userHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	u, err := uh.uu.Delete(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, u)
}
