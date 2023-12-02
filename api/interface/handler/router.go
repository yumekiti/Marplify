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

	api.GET("/me", userHandler.Me)
	api.PUT("me", userHandler.Update)
	api.DELETE("/me", userHandler.Delete)

	api.GET("/slides", slideHandler.FindAll)
	api.GET("/slides/:id", slideHandler.FindById)
	api.POST("/slides", slideHandler.Store)
	api.PUT("/slides/:id", slideHandler.Update)
	api.DELETE("/slides/:id", slideHandler.Delete)
}
