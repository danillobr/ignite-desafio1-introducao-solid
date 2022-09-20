<p align="center">
  <img src=".github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Desafio 1: introdução ao SOLID

  <br>

  Desafio 2: documentando com Swagger
</h1>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
</p>

## :computer: Descrição:
Esta é uma API que tem como função cadastrar e listar usuários. Para que a listagem de usuários seja realizada, o usuário que solicita esta ação dever ser um administrador. Com a execução do projeto é possível acessar a documentação da API desenvolvida com o [Swagger](https://swagger.io/).

## :hammer_and_wrench: Funcionalidades:
- []  Criar um novo usuário com `name` e `email`.
- []  Listar todos os usuários.
- []  Retornar um único usuário.
- []  Tornar um usuário em `admin`.

## :link: Rotas:
- POST `/users`: cria um novo usuário.
- GET `/users`: retorna todos os usuários.
- GET `/users/{user_id}`: retorna um usuário específico.
- PATCH `users/{user_id}/admin`: torna um usuário em admin.

## :memo: Execução da API:
- Instalação das dependências:
  > yarn
- Execução da API:
  > yarn dev
- Execução dos testes:
  > yarn test

## :information_source: Documentação:
[Atlas API](http://localhost:3333/api-docs)
