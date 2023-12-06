package handler

import (
	"api/config"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// InitRouting routesの初期化
func InitRouting(
	e *echo.Echo,
	userHandler UserHandler,
	slideHandler SlideHandler,
	authHandler AuthHandler,
) {
	api := e.Group("/api")

	api.POST("/auth/login", authHandler.Login)
	api.POST("/auth/register", authHandler.Register)

	api.Use(middleware.JWTWithConfig(*config.JWTConfig()))

	api.GET("/users/me", userHandler.Me)
	api.PUT("/users/me", userHandler.Update)
	api.DELETE("/users/me", userHandler.Delete)

	api.GET("/slides", slideHandler.FindAll)
	api.GET("/slides/:uuid", slideHandler.FindById)
	api.POST("/slides", slideHandler.Store)
	api.PUT("/slides/:uuid", slideHandler.Update)
	api.DELETE("/slides/:uuid", slideHandler.Delete)
}
