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
	api := e.Group("/api")

	api.POST("/signin", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "signin",
		})
	})

	api.POST("/signup", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "signup",
		})
	})

	api.GET("/users", uh.FindAll)
	api.GET("/users/:id", uh.FindById)
	api.POST("/users", uh.Store)
	api.PUT("/users/:id", uh.Update)
	api.DELETE("/users/:id", uh.Delete)

	api.GET("/slides", sh.FindAll)
	api.GET("/slides/:id", sh.FindById)
	api.POST("/slides", sh.Store)
	api.PUT("/slides/:id", sh.Update)
	api.DELETE("/slides/:id", sh.Delete)

	// 以下のルーティングはJWT認証が必要
	r := api.Group("")
	r.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		Claims:     &JwtCustomClaims{},
		SigningKey: []byte("secret"),
	}))
}
