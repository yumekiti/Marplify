package infrastructure

import (
	"gorm.io/gorm"

	"api/domain"
	"api/domain/repository"
)

type SlideRepository struct {
	Conn *gorm.DB
}

func NewSlideRepository(conn *gorm.DB) repository.SlideRepository {
	return &SlideRepository{Conn: conn}
}

func (sr *SlideRepository) Store(s domain.Slide) (int, error) {
	if err := sr.Conn.Create(&s).Error; err != nil {
		return 0, err
	}

	return s.ID, nil
}

func (sr *SlideRepository) FindById(id int) (domain.Slide, error) {
	var s domain.Slide
	if err := sr.Conn.First(&s, id).Error; err != nil {
		return s, err
	}

	return s, nil
}

func (sr *SlideRepository) FindAll() (domain.Slides, error) {
	var ss domain.Slides
	if err := sr.Conn.Find(&ss).Error; err != nil {
		return nil, err
	}

	return ss, nil
}

func (sr *SlideRepository) Update(s domain.Slide) (int, error) {
	if err := sr.Conn.Save(&s).Error; err != nil {
		return 0, err
	}

	return s.ID, nil
}

func (sr *SlideRepository) Delete(id int) (int, error) {
	if err := sr.Conn.Delete(&domain.Slide{}, id).Error; err != nil {
		return 0, err
	}

	return id, nil
}
