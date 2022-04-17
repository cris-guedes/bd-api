# Avaliable running project

- in Progress 🏗

## description

O projeto foi desenvolvido como um trabalho da disciplina de banco de dados 2 da universidade UTFPR
o desafio consiste em desenvolver uma aplicação que implemente o conceito de web-service

### Tech stack

- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [Typescript](https://www.typescriptlang.org/)

## Dependencies

- Node js => v10
- dotenv
- express
- ts-node
- typescript

## Up and Running

- Install dependencies `yarn (or npm i)`
- Run `yarn dev (or npm dev)` to run development server at `http://localhost:3000`
  yarn dev
  npm dev

## Available scripts

- `yarn dev (or npm dev)`: Run server in development mode

### Folders structure (simplified)

```
📦src
 ┣ 📂core                   #Mapeia os endpoint para os casos de usoas
 ┣ 📂domain                 #Camada de dominio com os casos de uso e entidades da aplicação
 ┃ ┣ 📂entities
 ┃ ┗ 📂useCases
 ┣ 📂infra                  #Camada de infraestrutura com os repositorios e serviços
 ┃ ┣ 📂repositories
 ┃ ┗ 📂services
 ┗ 📜server.ts
```
