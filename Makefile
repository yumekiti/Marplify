dc := docker-compose -f ./docker-compose.yml

up:
	$(dc) up -d
	$(dc) exec api yarn keystone prisma migrate dev --name init

down:
	$(dc) down

restart:
	$(dc) restart

reup:
	@make down
	@make up

rm:
	$(dc) down --rmi all

logs:
	$(dc) logs -f

app:
	$(dc) exec app /bin/sh

.PHONY:	up down restart reup rm logs app
