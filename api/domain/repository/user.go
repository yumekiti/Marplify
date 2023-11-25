package repository

import "api/domain"

type UserRepository interface {
	FindAll() ([]*domain.User, error)
	FindByID(ID string) (*domain.User, error)
	Save(user *domain.User) error
	Update(user *domain.User) error
	Delete(ID string) error
}
