package infrastructure

import (
	"gorm.io/gorm"

	"api/domain"
	"api/domain/repository"
)

type slideRepository struct {
	db *gorm.DB
}

func NewSlideRepository(db *gorm.DB) repository.SlideRepository {
	return &slideRepository{db}
}

func (sr *slideRepository) Store(slide *domain.Slide) (*domain.Slide, error) {
	if err := sr.db.Create(&slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}

func (sr *slideRepository) FindById(id int) (*domain.Slide, error) {
	var slide domain.Slide
	if err := sr.db.First(&slide, id).Error; err != nil {
		return nil, err
	}
	return &slide, nil
}

func (sr *slideRepository) FindAll() (*domain.Slides, error) {
	var slides domain.Slides
	if err := sr.db.Find(&slides).Error; err != nil {
		return nil, err
	}
	return &slides, nil
}

func (sr *slideRepository) Update(slide *domain.Slide) (*domain.Slide, error) {
	if err := sr.db.Save(&slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}

func (sr *slideRepository) Delete(slide *domain.Slide) (*domain.Slide, error) {
	if err := sr.db.Delete(&slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}
