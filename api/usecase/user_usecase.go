package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type UserUsecase interface {
	Store(user *domain.User) (*domain.User, error)
	FindById(id int) (*domain.User, error)
	FindAll() (*domain.Users, error)
	Update(user *domain.User) (*domain.User, error)
	Delete(id int) (int, error)
}

type userUsecase struct {
	ur repository.UserRepository
}

func NewUserUsecase(ur repository.UserRepository) UserUsecase {
	return &userUsecase{ur}
}

func (uu *userUsecase) Store(user *domain.User) (*domain.User, error) {
	return uu.ur.Store(user)
}

func (uu *userUsecase) FindById(id int) (*domain.User, error) {
	return uu.ur.FindById(id)
}

func (uu *userUsecase) FindAll() (*domain.Users, error) {
	return uu.ur.FindAll()
}

func (uu *userUsecase) Update(user *domain.User) (*domain.User, error) {
	return uu.ur.Update(user)
}

func (uu *userUsecase) Delete(id int) (int, error) {
	return uu.ur.Delete(id)
}
