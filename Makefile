
all:
	@docker-compose up --build
	echo "build done"
down:
	@docker-compose down -v
	echo "down done"
clean:
	@docker-compose down -v
	@echo "clean is done"
fclean:
	@docker system prune -a
	echo "delete all docker system done" 
re: clean all

reall: fclean all