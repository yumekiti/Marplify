package config

import (
	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4/middleware"

	"api/domain"
	"time"
)

type JwtCustomClaims struct {
	domain.User
	jwt.StandardClaims
}

var JwtSecret = []byte("secret")

func JWTConfig() *middleware.JWTConfig {
	return &middleware.JWTConfig{
		Claims:     &JwtCustomClaims{},
		SigningKey: JwtSecret,
	}
}

func GenerateToken(user *domain.User) (string, error) {
	claims := JwtCustomClaims{
		*user,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(JwtSecret)
}
