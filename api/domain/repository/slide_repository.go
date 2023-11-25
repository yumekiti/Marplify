package repository

import "api/domain"

type SlideRepository interface {
	Store(slide *domain.Slide) (*domain.Slide, error)
	FindById(id int) (*domain.Slide, error)
	FindAll() (*domain.Slides, error)
	Update(slide *domain.Slide) (*domain.Slide, error)
	Delete(slide *domain.Slide) (*domain.Slide, error)
}
