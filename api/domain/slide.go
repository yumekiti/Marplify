package domain

import (
	"time"
)

type Slide struct {
	ID        int    `gorm:"primary_key"`
	Title     string `gorm:"type:varchar(100)"`
	Content   string `gorm:"type:varchar(5000)"`
	UserID    string
	User      User `gorm:"foreignkey:UserID"`
	CreatedAt time.Time
	UpdateAt  time.Time
}

type Slides []*Slide
