package domain

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email    string   `gorm:"unique,type:varchar(100)"`
	Password string   `gorm:"type:varchar(100)"`
	Slides   []*Slide `gorm:"foreignKey:UserID"`
}

type Users []*User
