package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type SlideUsecase interface {
	Store(domain.Slide) (int, error)
	FindById(int) (domain.Slide, error)
	FindAll() (domain.Slides, error)
	Update(domain.Slide) (int, error)
	Delete(int) (int, error)
}

type slideUsecase struct {
	sr repository.SlideRepository
}

func NewSlideUsecase(sr repository.SlideRepository) SlideUsecase {
	return &slideUsecase{sr}
}

func (su *slideUsecase) Store(s domain.Slide) (int, error) {
	return su.sr.Store(s)
}

func (su *slideUsecase) FindById(id int) (domain.Slide, error) {
	return su.sr.FindById(id)
}

func (su *slideUsecase) FindAll() (domain.Slides, error) {
	return su.sr.FindAll()
}

func (su *slideUsecase) Update(s domain.Slide) (int, error) {
	return su.sr.Update(s)
}
