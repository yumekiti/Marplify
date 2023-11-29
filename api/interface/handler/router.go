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

	api.GET("/users", userHandler.FindAll)
	api.GET("/users/:id", userHandler.FindById)
	api.POST("/users", userHandler.Store)
	api.PUT("/users/:id", userHandler.Update)
	api.DELETE("/users/:id", userHandler.Delete)

	api.GET("/slides", slideHandler.FindAll)
	api.GET("/slides/:id", slideHandler.FindById)
	api.POST("/slides", slideHandler.Store)
	api.PUT("/slides/:id", slideHandler.Update)
	api.DELETE("/slides/:id", slideHandler.Delete)
}
