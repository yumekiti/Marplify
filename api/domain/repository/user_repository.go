package repository

import "api/domain"

type UserRepository interface {
	Me(user *domain.User) (*domain.User, error)
	Update(user *domain.User) (*domain.User, error)
	Delete(user *domain.User) (*domain.User, error)
}
