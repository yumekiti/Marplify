package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type UserUsecase interface {
	Me(user *domain.User) (*domain.User, error)
	Update(user *domain.User) (*domain.User, error)
	Delete(user *domain.User) (*domain.User, error)
}

type userUsecase struct {
	ur repository.UserRepository
}

func NewUserUsecase(ur repository.UserRepository) UserUsecase {
	return &userUsecase{ur}
}

func (uu *userUsecase) Me(user *domain.User) (*domain.User, error) {
	return uu.ur.Me(user)
}

func (uu *userUsecase) Update(user *domain.User) (*domain.User, error) {
	return uu.ur.Update(user)
}

func (uu *userUsecase) Delete(user *domain.User) (*domain.User, error) {
	return uu.ur.Delete(user)
}
