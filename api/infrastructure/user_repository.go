package infrastructure

import (
	"gorm.io/gorm"

	"api/domain"
	"api/domain/repository"
)

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) repository.UserRepository {
	return &userRepository{db}
}

func (ur *userRepository) Me(user *domain.User) (*domain.User, error) {
	return user, nil
}

func (ur *userRepository) Update(user *domain.User) (*domain.User, error) {
	if err := ur.db.Save(user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

func (ur *userRepository) Delete(user *domain.User) (*domain.User, error) {
	if err := ur.db.Delete(user).Error; err != nil {
		return nil, err
	}

	return user, nil
}