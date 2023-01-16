# 👥 TypeScript: CRUD de Usuário

A API permite a criação, listagem, atualização e deleção de usuário.

## 💻 Desenvolvimento

Este projeto foi um avanço em relação a criação de uma API CRUD comum. A criação da API dessa vez foi Express com TypeScript, além disso, ao invés de usar um banco de dados simples, foi feito uma conexão do projeto com um banco de dados PostgreSQL e para fazer a comunicação entre o banco e o código, foi usado TypeORM - incluindo os conceitos de _Entities_ e _Migrations_.


## ⚙ Ferramentas

- _NodeJS_
- _Express_
- _TypeScript_
- _TypeORM_
- _PostgreSQL_

## 🪛 Instalação

1. Crie um novo banco de dados com PostgreSQL
2. Instale as dependências necessárias do projeto utilizando o comando:

```
yarn install
```

3. Adicione na raiz do projeto um arquivo chamado `.env` e dentro dele configure as variáveis de ambiente de acordo com o arquivo `.env.example`

```
DB_HOST=
DB_PASSWORD=
DB=
DB_USER=
```

4. Rode as migrations do projeto com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

5. Para rodar o projeto utilize o comando `yarn dev` no terminal, se tudo der certo receberá uma mensagem como essa:

```
query: SELECT * FROM current_schema()
query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
query: SELECT version();
App is running!
```
