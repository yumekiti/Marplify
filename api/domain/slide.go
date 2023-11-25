package domain

import (
	"time"
)

type Slide struct {
	ID        int
	Title     string
	Content   string
	UserID    string
	User      User   `gorm:"foreignkey:UserID"`
	CreatedAt time.Time
	UpdateAt  time.Time
}

type Slides []*Slide
