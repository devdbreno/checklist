# CheckList

**Frontend feito em Angular.js e o backend em Nest.js (Express)**

## Primeiros passos:

> Ter uma instância do MySQL rodando <br/>
> por isso disponibilizei o docker-compose.yml <br />
> caso tenha-o instalado. <br />

> Conferir a pasta src/config

### Crie o arquivo .env

> Se estiver usando o MySQL com o docker-compose.yml essas variáveis são obrigatórias

```bash
  # Configuração miníma:

  # padrão: 3306
  DATABASE_PORT=

  # padrão: root
  DATABASE_USERNAME=

  # padrão: root
  DATABASE_PASSWORD=

```

### Entre na pasta "backend"

```bash
  # Isto iniciará o MySQL
  1) $ docker-compose up -d

  # Instale as dependências
  2) $ yarn (ou npm install)

  # Após alguns segundos depois de ter iniciado o MySQL faça:
  # Isto criará o BD, fará as migrations e as seeders
  3) $ yarn db:init (ou npm run db:init)

  # Inicie o servidor:
  4) $ yarn start:dev (ou npm run start:dev)

  # URL do backend
  5) URL: http://localhost:3000/todo

```

## Entre na pasta "frontend"

```bash
  # Instale as dependências
  1) $ yarn (ou npm install)

  # Inicie o servidor:
  2) $ yarn start (ou npm run start)

  # URL do frontend
  3) URL: http://localhost:4200

```
