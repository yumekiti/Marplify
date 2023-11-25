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
	UserID   string `json:"user_id"`
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

	res := make([]*responseUser, len(*users))
	for i, user := range *users {
		res[i] = &responseUser{
			ID:        user.ID,
			UserID:    user.UserID,
			Name:      user.Name,
			Email:     user.Email,
			CreatedAt: user.CreatedAt.String(),
			UpdateAt:  user.UpdateAt.String(),
		}
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserID:    user.UserID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdateAt:  user.UpdateAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Store(c echo.Context) error {
	req := new(requestUser)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user := &domain.User{
		UserID:   req.UserID,
		Name:     req.Name,
		Email:    req.Email,
		Password: req.Password,
	}
	user, err := uh.uu.Store(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserID:    user.UserID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdateAt:  user.UpdateAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Update(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	req := new(requestUser)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user := &domain.User{
		ID:       id,
		UserID:   req.UserID,
		Name:     req.Name,
		Email:    req.Email,
		Password: req.Password,
	}
	user, err := uh.uu.Update(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserID:    user.UserID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdateAt:  user.UpdateAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user, err = uh.uu.Delete(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserID:    user.UserID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdateAt:  user.UpdateAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}
