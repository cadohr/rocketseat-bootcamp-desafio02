# FastFeet - Desafio Final

<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

## Sobre

A aplicação é uma transportadora fictícia. O projeto está no formato de Monorepo com as respectivas pastas Backend, Frontend e Mobile.

- <a href="#backend">Backend</a>
- <a href="#frontend">Frontend</a>
- <a href="#mobile">Mobile</a>

### Tecnologias

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://github.com/expressjs/express)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)

## Instalcação

Clonar o projeto

```sh
git clone https://github.com/cadohr/rocketseat-bootcamp-fastfeet.git
```

### Backend

#### Dependencias para rodar

- Node.js
- PostgreSQL
- Redis

Instalar as dependencias

```sh
cd backend && yarn
```

Após instalar as dependencias, rodar o comando abaixo e preencher as variaveis de ambiente

```sh
cp .env.example .env
```

Com PostgreSQL rodando e as variaveis de ambiente preenchidas, execute

```sh
yarn sequelize db:migrate
yarn sequelize db:seed
```

O backend tem dois serviços a API e uma Fila. Rode os comandos abaixo em dois terminais separados

```sh
yarn dev
yarn queue
```

### Frontend

Dependencias para rodar

- Node.js
- Backend

Instalar as dependencias

```sh
cd frontend && yarn
```

Após instalar as dependencias, modificar o arquivo `./src/services/api.js` alterando a BaseURL para url do seu `Backend`

Para rodar o `Frontend` execute o comando abaixo

```sh
yarn start
```

Frontend vai abrir no navegador na porta :3000. Usuário admin foi previamente cadastrado no `Backend`

```sh
"email": "admin@fastfeet.com",
"password": "123456"
```

### Mobile

Dependencias para rodar

- Node.js
- Backend
- Emulador android ou ios

Instalar as dependencias

```sh
cd mobile && yarn
```

Após instalar as dependencias, modificar o arquivo `./src/services/api.js` alterando a BaseURL para url do seu `Backend`

Para rodar `Mobile` no ios (o emulador abrirá atomaticamente)

```sh
react-native run-ios
```

Para rodar `Mobile` no android

- Abrir o emulador (emulador utilizado no desenvolvimento: Nexus 5 API 28)

```sh
react-native run-android
```
