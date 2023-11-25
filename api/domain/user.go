package domain

import "time"

type User struct {
	ID        int    `gorm:"primary_key"`
	Email     string `gorm:"type:varchar(100)"`
	UserID    string `gorm:"unique"`
	Name      string `gorm:"type:varchar(100)"`
	Password  string `gorm:"type:varchar(100)"`
	CreatedAt time.Time
	UpdateAt  time.Time
}

type Users []*User
