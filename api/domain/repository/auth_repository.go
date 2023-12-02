package repository

import "api/domain"

type AuthRepository interface {
	Register(user *domain.User) (string, error)
	Login(identifier string, password string) (string, error)
}
