package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type AuthUsecase interface {
	Login(identifier string, password string) (string, error)
	Register(user *domain.User) (string, error)
}

type authUsecase struct {
	authRepo repository.AuthRepository
}

func NewAuthUsecase(authRepo repository.AuthRepository) AuthUsecase {
	return &authUsecase{authRepo}
}

func (au *authUsecase) Login(identifier string, password string) (string, error) {
	token, err := au.authRepo.Login(identifier, password)
	if err != nil {
		return "", err
	}

	return token, nil
}

func (au *authUsecase) Register(user *domain.User) (string, error) {
	token, err := au.authRepo.Register(&domain.User{
		Username: user.Username,
		Email:    user.Email,
		Password: user.Password,
	})
	if err != nil {
		return "", err
	}

	return token, err
}
