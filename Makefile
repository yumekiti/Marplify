dc := docker-compose -f ./docker-compose.yml

up:
	$(dc) up -d

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

api:
	$(dc) exec api /bin/sh

db:
	$(dc) exec db /bin/sh

.PHONY:	up down restart reup rm logs app api db
