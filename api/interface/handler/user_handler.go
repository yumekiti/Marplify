package handler

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"

	"api/domain"
	"api/usecase"
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
	UserName string `json:"user_name"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type responseUser struct {
	ID        uint   `json:"id"`
	UserName  string `json:"user_name"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"update_at"`
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
			UserName:  user.UserName,
			Name:      user.Name,
			Email:     user.Email,
			CreatedAt: user.CreatedAt.String(),
			UpdatedAt: user.UpdatedAt.String(),
		}
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) FindById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserName:  user.UserName,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Store(c echo.Context) error {
	req := new(requestUser)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user := &domain.User{
		UserName: req.UserName,
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
		UserName:  user.UserName,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Update(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	req := new(requestUser)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user = &domain.User{
		Model:    user.Model,
		UserName: req.UserName,
		Name:     req.Name,
		Email:    req.Email,
		Password: req.Password,
	}
	user, err = uh.uu.Update(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserName:  user.UserName,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}

func (uh *userHandler) Delete(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	user, err := uh.uu.FindById(id)
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, err.Error())
		}
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	user, err = uh.uu.Delete(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res := &responseUser{
		ID:        user.ID,
		UserName:  user.UserName,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt.String(),
		UpdatedAt: user.UpdatedAt.String(),
	}

	return c.JSON(http.StatusOK, res)
}
