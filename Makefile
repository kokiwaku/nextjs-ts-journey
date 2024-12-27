create-project:
	mkdir -p back/src
	@make up
	docker compose exec back composer create-project --prefer-dist laravel/laravel:^11.0 .

up:
	docker compose up -d --remove-orphans

up-build:
	docker compose up -d --build --remove-orphans

stop:
	docker compose stop

front:
	docker compose exec front bash

back:
	docker compose exec back bash

log:
	docker compose logs -f

down:
	docker compose down