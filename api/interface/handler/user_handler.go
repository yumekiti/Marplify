package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"api/domain"
	"api/usecase"
)

type UserHandler interface {
	Me(c echo.Context) error
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
	UserName string `json:"user_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type responseUser struct {
	UserName  string `json:"user_name"`
	Email     string `json:"email"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"update_at"`
}

func (uh *userHandler) Me(c echo.Context) error {
	user := c.Get("user").(*domain.User)

	res := &responseUser{
		UserName:  user.UserName,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Update(c echo.Context) error {
	user := c.Get("user").(*domain.User)

	req := &requestUser{}
	if err := c.Bind(req); err != nil {
		return err
	}

	user = &domain.User{
		Model:    user.Model,
		UserName: req.UserName,
		Email:    req.Email,
		Password: req.Password,
	}
	
	user, err := uh.uu.Update(user)
	if err != nil {
		return err
	}

	res := &responseUser{
		UserName:  user.UserName,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Delete(c echo.Context) error {
	user := c.Get("user").(*domain.User)

	user, err := uh.uu.Delete(user)
	if err != nil {
		return err
	}

	res := &responseUser{
		UserName:  user.UserName,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}
