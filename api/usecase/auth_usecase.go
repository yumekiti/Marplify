package usecase

import (
	"api/config"
	"api/domain"
	"api/domain/repository"
)

type AuthUsecase interface {
	Login(email string, password string) (string, error)
	Register(user *domain.User) (string, error)
}

type authUsecase struct {
	authRepo repository.AuthRepository
}

func NewAuthUsecase(authRepo repository.AuthRepository) AuthUsecase {
	return &authUsecase{authRepo}
}

func (au *authUsecase) Login(email string, password string) (string, error) {
	token, err := au.authRepo.Login(email, password)
	if err != nil {
		return "", err
	}

	return token, nil
}

func (au *authUsecase) Register(user *domain.User) (string, error) {
	hashedPassword, err := config.PasswordEncrypt(user.Password)
	if err != nil {
		return "", err
	}

	token, err := au.authRepo.Register(&domain.User{
		UserName: user.UserName,
		Email:    user.Email,
		Password: hashedPassword,
	})
	if err != nil {
		return "", err
	}

	return token, nil
}
