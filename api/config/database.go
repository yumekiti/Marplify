package config

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"api/domain"
)

func NewDB() *gorm.DB {
	dsn := "host=db user=user password=password dbname=database port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&domain.User{}, &domain.Slide{})

	return db
}
