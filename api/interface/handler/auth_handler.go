package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"api/domain"
	"api/usecase"
)

type AuthHandler interface {
	Login(c echo.Context) error
	Register(c echo.Context) error
}

type authHandler struct {
	au usecase.AuthUsecase
}

func NewAuthHandler(au usecase.AuthUsecase) AuthHandler {
	return &authHandler{au}
}

type requestAuth struct {
	UserName string `json:"user_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type responseAuth struct {
	Token string `json:"token"`
}

func (ah *authHandler) Login(c echo.Context) error {
	req := new(requestAuth)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	token, err := ah.au.Login(req.Email, req.Password)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, &responseAuth{token})
}

func (ah *authHandler) Register(c echo.Context) error {
	req := new(requestAuth)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	token, err := ah.au.Register(&domain.User{
		UserName: req.UserName,
		Email:    req.Email,
		Password: req.Password,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, &responseAuth{token})
}
