package repository

import "api/domain"

type SlideRepository interface {
	Store(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	FindById(user *domain.User, id int) (*domain.Slide, error)
	FindAll(user *domain.User) (*domain.Slides, error)
	Update(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	Delete(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
}
