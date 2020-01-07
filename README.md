# CheckList

<img src="https://media.giphy.com/media/Y1q2QdEBnBwVePgprB/giphy.gif" alt="Demo"> 

## Primeiros passos:

> Ter uma instância do MySQL rodando. Por isso disponibilizei o docker-compose.yml caso tenha-o instalado.

### Mysql && docker-compose.yml

```bash
  1) cd backend

  # Isto iniciará o MySQL
  2) $ docker-compose up -d
    # Dica:
    # Acessando o MySQL no docker
    2.1) $ docker exec -ti backend_mysql bash

    # PS: É necessário esperar o MySQL ligar totalmente
    # Entrando no MySQL como root
    2.2) $ mysql -u root -p${MYSQL_ROOT_PASSWORD}
    # Pronto, já estás dentro do MySQL
    2.3) mysql> show databases;
```

### Usuário costumizado no MySQL

```bash
  # .env
  DATABASE_USERNAME=
  DATABASE_PASSWORD=
  DATABASE_NAME=

  # docker-compose.yml
  # Mude-o para:
  ...
  env_file:
      - ./.env
  environment:
      # MYSQL_USER: custom_user
      # MYSQL_PASSWORD: custom_user_pass
      # MYSQL_DATABASE: custom_user_db

      # Usando ".env"

      MYSQL_USER: ${DATABASE_USERNAME}
      MYSQL_PASSWORD: ${DATABASE_USERNAME}
      MYSQL_DATABASE: ${DATABASE_USERNAME}
  ...

  Experimentando:

  $ docker exec -ti backend_mysql bash
  $ mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD}

  # Dentro do MySQL autenticado com o usuário costumizado
  mysql> show databases;

```

> PS: Este usuário terá apenas superprivilégios no BD especificado

### Rodando o servidor (backend):

```bash
  1) cd backend

  # Instale as dependências
  2) $ yarn (ou npm install)

  # PS: É necessário esperar o MySQL ligar totalmente
  # Senão: ERROR: Connection lost: The server closed the connection (sequelize-cli)

  # Isto criará o BD, fará as migrations e as seeders
  3) $ yarn db:init (ou npm run db:init)

  # Inicie o servidor:
  4) $ yarn start:dev (ou npm run start:dev)

  # URL base do backend
  5) URL: http://localhost:3000/todo
```

### Rodando o servidor (frontend):

```bash
  1) cd frontend

  # Instale as dependências
  2) $ yarn (ou npm install)

  # Inicie o servidor:
  3) $ yarn start (ou npm run start)

  # URL base do frontend
  4) URL: http://localhost:4200
```
