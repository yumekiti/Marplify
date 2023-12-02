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
	Identifier string `json:"identifier"`
	Username string `json:"username"`
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

	token, err := ah.au.Login(req.Identifier, req.Password)
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
		Username: req.Username,
		Email:    req.Email,
		Password: req.Password,
	})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	if token == "" {
		return c.JSON(http.StatusBadRequest, "username or email is already used")
	}

	return c.JSON(http.StatusOK, &responseAuth{token})
}
