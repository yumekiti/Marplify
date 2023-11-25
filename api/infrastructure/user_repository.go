package infrastructure

import (
	"gorm.io/gorm"

	"api/domain"
	"api/domain/repository"
)

type UserRepository struct {
	Conn *gorm.DB
}

func NewUserRepository(conn *gorm.DB) repository.UserRepository {
	return &UserRepository{Conn: conn}
}

func (ur *UserRepository) Store(u domain.User) (int, error) {
	if err := ur.Conn.Create(&u).Error; err != nil {
		return 0, err
	}

	return u.ID, nil
}

func (ur *UserRepository) FindById(id int) (domain.User, error) {
	var u domain.User
	if err := ur.Conn.First(&u, id).Error; err != nil {
		return u, err
	}

	return u, nil
}

func (ur *UserRepository) FindAll() (domain.Users, error) {
	var us domain.Users
	if err := ur.Conn.Find(&us).Error; err != nil {
		return nil, err
	}

	return us, nil
}

func (ur *UserRepository) Update(u domain.User) (int, error) {
	if err := ur.Conn.Save(&u).Error; err != nil {
		return 0, err
	}

	return u.ID, nil
}

func (ur *UserRepository) Delete(id int) (int, error) {
	if err := ur.Conn.Delete(&domain.User{}, id).Error; err != nil {
		return 0, err
	}

	return id, nil
}
