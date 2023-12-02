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

func (sr *slideRepository) Store(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	slide.UserID = user.ID
	if err := sr.db.Create(slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}

func (sr *slideRepository) FindById(user *domain.User, id int) (*domain.Slide, error) {
	slide := &domain.Slide{}
	if err := sr.db.Where("id = ?", id).First(slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}

func (sr *slideRepository) FindAll(user *domain.User) (*domain.Slides, error) {
	slides := &domain.Slides{}
	if err := sr.db.Where("user_id = ?", user.ID).Find(slides).Error; err != nil {
		return nil, err
	}
	return slides, nil
}

func (sr *slideRepository) Update(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	if err := sr.db.Save(slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}

func (sr *slideRepository) Delete(user *domain.User, slide *domain.Slide) (*domain.Slide, error) {
	if err := sr.db.Delete(slide).Error; err != nil {
		return nil, err
	}
	return slide, nil
}
