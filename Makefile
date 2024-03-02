.PHONY: up connect


up:
	docker compose up -d

connect:
	docker exec -it mongo-mongo-1 bash
