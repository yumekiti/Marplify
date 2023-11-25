package domain

import (
	"time"
)

type Slide struct {
	ID        string
	Title     string
	Cotent    string
	User      User
	CreatedAt time.Time
	UpdateAt  time.Time
}

type Slides []*Slide
