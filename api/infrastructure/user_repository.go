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

func (ur *userRepository) Store(user *domain.User) (*domain.User, error) {
	if err := ur.db.Create(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (ur *userRepository) FindById(id int) (*domain.User, error) {
	var user domain.User
	if err := ur.db.First(&user, id).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (ur *userRepository) FindAll() (*domain.Users, error) {
	var users domain.Users
	if err := ur.db.Find(&users).Error; err != nil {
		return nil, err
	}
	return &users, nil
}

func (ur *userRepository) Update(user *domain.User) (*domain.User, error) {
	if err := ur.db.Save(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (ur *userRepository) Delete(user *domain.User) (*domain.User, error) {
	if err := ur.db.Delete(&user).Error; err != nil {
		return nil, err
	}
	return user, nil
}
