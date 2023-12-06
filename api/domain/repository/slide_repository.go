package repository

import (
	"github.com/google/uuid"

	"api/domain"
)

type SlideRepository interface {
	Store(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	FindById(user *domain.User, uuid uuid.UUID) (*domain.Slide, error)
	FindAll(user *domain.User) (*domain.Slides, error)
	Update(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	Delete(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
}
