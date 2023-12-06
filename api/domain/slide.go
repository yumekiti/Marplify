package domain

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Slide struct {
	gorm.Model
	UUID    uuid.UUID `gorm:"type:varchar(36);unique"`
	Title   string    `gorm:"type:varchar(100)"`
	Content string    `gorm:"type:varchar(5000)"`
	UserID  uint
}

type Slides []*Slide
