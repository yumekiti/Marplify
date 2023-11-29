package domain

import "gorm.io/gorm"

type Slide struct {
	gorm.Model
	Title   string `gorm:"type:varchar(100)"`
	Content string `gorm:"type:varchar(5000)"`
	UserID  uint
}

type Slides []*Slide
