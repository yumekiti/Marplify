package infrastructure

import (
	"gorm.io/gorm"

	"api/config"
	"api/domain"
	"api/domain/repository"
)

type authRepository struct {
	db *gorm.DB
}

func NewAuthRepository(db *gorm.DB) repository.AuthRepository {
	return &authRepository{db}
}

func (r *authRepository) Register(user *domain.User) (string, error) {
	if err := r.db.Create(&user).Error; err != nil {
		return "", err
	}

	token, err := config.GenerateToken(user)
	if err != nil {
		return "", err
	}

	return token, nil
}

func (r *authRepository) Login(email string, password string) (string, error) {
	var user domain.User
	if err := r.db.Where("email = ?", email).First(&user).Error; err != nil {
		return "", err
	}

	if err := config.PasswordCheck(user.Password, password); err != nil {
		return "", err
	}

	token, err := config.GenerateToken(&user)
	if err != nil {
		return "", err
	}

	return token, nil
}
