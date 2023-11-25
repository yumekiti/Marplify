package repository

import "api/domain"

type SlideRepository interface {
	Store(domain.Slide) (int, error)
	FindById(int) (domain.Slide, error)
	FindAll() (domain.Slides, error)
	Update(domain.Slide) (int, error)
	Delete(int) (int, error)
}
