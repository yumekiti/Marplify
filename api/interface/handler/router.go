package handler

import (
	"net/http"

	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"api/domain"
)

type JwtCustomClaims struct {
	domain.User
	jwt.StandardClaims
}

// InitRouting routesの初期化
func InitRouting(
	e *echo.Echo,
	uh UserHandler,
	sh SlideHandler,
) {
	e.POST("/signin", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "signin",
		})
	})

	e.POST("/signup", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "signup",
		})
	})

	e.GET("/users", uh.FindAll)
	e.GET("/users/:id", uh.FindById)
	e.POST("/users", uh.Store)
	e.PUT("/users/:id", uh.Update)
	e.DELETE("/users/:id", uh.Delete)

	e.GET("/slides", sh.FindAll)
	e.GET("/slides/:id", sh.FindById)
	e.POST("/slides", sh.Store)
	e.PUT("/slides/:id", sh.Update)
	e.DELETE("/slides/:id", sh.Delete)

	// 以下のルーティングはJWT認証が必要
	r := e.Group("")
	r.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		Claims:     &JwtCustomClaims{},
		SigningKey: []byte("secret"),
	}))
}
