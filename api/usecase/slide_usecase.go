package usecase

import (
	"api/domain"
	"api/domain/repository"
)

type SlideUsecase interface {
	Store(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	FindById(user *domain.User, id int) (*domain.Slide, error)
	FindAll(user *domain.User) (*domain.Slides, error)
	Update(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
	Delete(user *domain.User, slide *domain.Slide) (*domain.Slide, error)
}

type slideUsecase struct {
	sr repository.SlideRepository
}

func NewSlideUsecase(sr repository.SlideRepository) SlideUsecase {
	return &slideUsecase{sr}
}

func (su *slideUsecase) Store(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	return su.sr.Store(user, slide)
}

func (su *slideUsecase) FindById(user *domain.User, id int) (*domain.Slide, error) {
	return su.sr.FindById(user, id)
}

func (su *slideUsecase) FindAll(user *domain.User) (*domain.Slides, error) {
	return su.sr.FindAll(user)
}

func (su *slideUsecase) Update(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	return su.sr.Update(user, slide)
}

func (su *slideUsecase) Delete(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	return su.sr.Delete(user, slide)
}
