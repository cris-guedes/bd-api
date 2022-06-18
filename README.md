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
```
📦src                         #pasta source onde se encontra toda a aplicação
 ┣ 📂core                     #pasta onde estão todos os enpoints da aplicação
 ┣ 📂domain                   #pasta com o core da aplicação 
 ┃ ┣ 📂entities               #pasta onde esta as entidades usadas na aplicação
 ┃ ┗ 📂useCases               #pasta onde estão os casos de uso da aplicação
 ┃ ┃ ┣ 📂getByHigway          #caso de uso que pega features com chaves highway
 ┃ ┃ ┗ 📂getDataByAmenity     #caso de uso que pega features com chaves Amenity
 ┣ 📂infra                    #infra  com todos os provider 
 ┃ ┣ 📂providers              #todos os providers que aplicação usa
 ┃ ┃ ┣ 📂geoDataProvider      #provedor de dados para a aplicação 
 ┃ ┃ ┗ 📂geoDecoderProvider   #provedor de nomes para a aplicação
 ┣ 📂main                     #pastacom constants
 ┗ 📜server.ts                #arquivo que configura e disponibiliza os serviçoes em uma porta especifica
```