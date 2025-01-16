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