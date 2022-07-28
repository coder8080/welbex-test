# WelbeX test

Запущено на [Heroku](https://welbex-t.herokuapp.com/).

Моё решение тестового задание в компанию WelbeX.
Таблица содержит следующий функционал:
- Сортировка
- Фильтрация
- Пагинация

# Запуск

Сайт создан на основе [Docker](https://www.docker.com/) и запускает 4 контейнера с
помощью [docker-compose](https://docs.docker.com/compose/).

Для запуска вам понадобится:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker compose](https://docs.docker.com/compose/install/)

## Production-режим

Для запуска в production режиме необходимо выполнить следующую команду в
корневой директории проекта:

```bash
docker compose --file compose.yml up --build
```

Первое выполнение может занять некоторое время, т. к. необходимо загрузить базовые
образы с [docker-hub](https://hub.docker.com/)

## Development-режим

Для запуска в development режиме необходимо выполнить следующую команду в
корневой директории проекта:

```bash
docker compose --file compose.dev.yml up --build
```

Первое выполнение может занять некоторое время, т. к. необходимо загрузить базовые
образы с [docker-hub](https://hub.docker.com/)

## Отличия между development и production режимами

- В development режиме, когда вы модифицируете какой-либо файл клиента или сервера, изменения моментально попадают в контейнер и сразу же вступают в силу.
- В development режиме на хост пробрасывается 3000 порт из frontend контейнера, чтобы обеспечить работу websocket react'а для обновлений.
- В production режиме используется production build react'а.

# Описание структуры решения

Используется база данных [PostgreSQL](https://www.postgresql.org/). Backend
написан на [node](https://nodejs.org/en/) и общается с базой данных. Frontend
написан на [react](https://reactjs.org/) и отправлет запросы на
[API](https://en.wikipedia.org/wiki/API), предоставляемый backend'ом.

Все перечисленные процессы запущены в контейнерах [Docker](https://www.docker.com/).
Для распределения запросов между ними используется четвёртый контейнер с
[nginx](https://www.nginx.com/).

Все контейнеры настраиваются и запускаются с помощью
[docker-compose](https://docs.docker.com/compose/).