package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"api/config"
	"api/infrastructure"
	"api/interface/handler"
	"api/usecase"
)

func main() {
	// DB
	database := config.NewDB()

	// repository
	userRepository := infrastructure.NewUserRepository(database)
	slideRepository := infrastructure.NewSlideRepository(database)
	authRepository := infrastructure.NewAuthRepository(database)
	// usecase
	userUsecase := usecase.NewUserUsecase(userRepository)
	slideUsecase := usecase.NewSlideUsecase(slideRepository)
	authUsecase := usecase.NewAuthUsecase(authRepository)
	// handler
	userHandler := handler.NewUserHandler(userUsecase)
	slideHandler := handler.NewSlideHandler(slideUsecase)
	authHandler := handler.NewAuthHandler(authUsecase)

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowHeaders: []string{"*"},
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"*"},
	}))

	// Router
	handler.InitRouting(
		e,
		userHandler,
		slideHandler,
		authHandler,
	)

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
