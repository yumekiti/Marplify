package repository

import "api/domain"

type UserRepository interface {
	Store(user *domain.User) (*domain.User, error)
	FindById(id int) (*domain.User, error)
	FindAll() (*domain.Users, error)
	Update(user *domain.User) (*domain.User, error)
	Delete(user *domain.User) (*domain.User, error)
}
