package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type SlideUsecase interface {
	Store(slide *domain.Slide) (*domain.Slide, error)
	FindById(id int) (*domain.Slide, error)
	FindAll() (*domain.Slides, error)
	Update(slide *domain.Slide) (*domain.Slide, error)
	Delete(id int) (int, error)
}

type slideUsecase struct {
	sr repository.SlideRepository
}

func NewSlideUsecase(sr repository.SlideRepository) SlideUsecase {
	return &slideUsecase{sr}
}

func (su *slideUsecase) Store(slide *domain.Slide) (*domain.Slide, error) {
	return su.sr.Store(slide)
}

func (su *slideUsecase) FindById(id int) (*domain.Slide, error) {
	return su.sr.FindById(id)
}

func (su *slideUsecase) FindAll() (*domain.Slides, error) {
	return su.sr.FindAll()
}

func (su *slideUsecase) Update(slide *domain.Slide) (*domain.Slide, error) {
	return su.sr.Update(slide)
}

func (su *slideUsecase) Delete(id int) (int, error) {
	return su.sr.Delete(id)
}
