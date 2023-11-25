package domain

import "time"

type User struct {
	ID        int
	Email     string
	UserID    string
	Name      string
	Password  string
	CreatedAt time.Time
	UpdateAt  time.Time
}

type Users []*User
