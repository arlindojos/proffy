<h2 align="center">
  <img src="https://img.shields.io/badge/Next%20Level%20Week-%232-blue?style=for-the-badge" alt="Nome e edição do evento" />
  <img src="https://img.shields.io/badge/web%3F-ok-blue?style=for-the-badge" alt="Sistema web Ok" />
  <img src="https://img.shields.io/badge/server%3F-ok-blue?style=for-the-badge" alt="Server Ok" />
  <img src="https://img.shields.io/badge/app mobile%3F-No-blue?style=for-the-badge" alt="Aplicativo mobile No" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=blue&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/50463866/89676315-d8742700-d8c1-11ea-8166-586d824f85c3.png" alt="Logo da Proffy" />
</h1>

## 📌 Index

- [Sobre o projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Techs](#-techs)
- [Instalação e Start](#-instalação-e-start)
   - [Clonagem](#clonagem)
   - [Web](#web)
   - [Server](#server)
- [Contribuições](#-contribuições)
- [License](#-license)


## ❔ Sobre o projeto

Uma plataforma de estudos online que visa conectar alunos e professores de forma rápida e fácil.

O projeto está sendo desenvolvido na [Next Level Week 2](https://nextlevelweek.com/episodios/omnistack/1/edicao/2)


## 📸 Screenshots

<p align="center"><b>Interface Web para Desktop</b></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/50463866/89676301-d316dc80-d8c1-11ea-9383-1c635ecd8b8a.png" alt="Landing Page Proffy in Desktop" width="47%" />
  <img src="https://user-images.githubusercontent.com/50463866/89676314-d742fa00-d8c1-11ea-815f-cbcb370a1907.png" alt="Study Page in Desktop" width="47%" />
</p>

<p align="center"><b>Interface Web para Mobile</b></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/50463866/89676295-d14d1900-d8c1-11ea-8ec3-11f3d2378735.png" alt="Landing Page Proffy in Mobile" width="25%" />
  <img src="https://user-images.githubusercontent.com/50463866/89676306-d5793680-d8c1-11ea-9122-e6967ecd8d76.png" alt="Study Page in Mobile" width="25%" />
</p>

## 🛠 Techs

Proffy foi construído com as seguintes techs:

- Web
  - [React](https://pt-br.reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
- Server
  - [Node.js](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/)
  - [Knex](http://knexjs.org/)
- Banco de Dados
  - [Postgres](https://www.postgresql.org/)


## ⚙ Instalação e Start
Certifique-se de que tenha instalado o docker e Node.js, certifique-se que o docker esta correndo antes de seguir os passos abaixo.

### Clonagem
Primeiro, clone o repositório para seu ambiente:

```bash
> git clone https://github.com/arlindojos/proffy.git
```

Depois, entre no repositório clonado  e insira os seguintes comandos no seu terminal:

```bash
# Para criar o banco de dados Postgres automaticamente, se quiser criar um manualmente fique a vantade,
mas tem que ser Postgres e com os dados existentes no arquivo docker-compose-yml(user, password, database)
 > docker-compose up
```

### Server

```bash
# Entra no diretório "server"
> cd ./proffy/server

# para criar as tabelas necessárias no banco de dados
> `npm run knex:migrate`  ou `yarn knex:migrate`

# para iniciar o servidor
> `npm run start`  ou `yarn start`
```
# Proffy_web

```bash
# Entra no diretório "proffy_web"
> cd ./proffy/proffy_web

# para iniciar a apricação 
> `npm run start`  ou `yarn start`
```

será inicializada a aplicação em `http://localhost:3000`

## 🤝 Contribuições

Siga os passos abaixo para contribuir:

1. Faça o *fork* do projeto (<https://github.com/arlindojos/proffy>)

2. Clone o seu *fork* para sua maquína (`git clone https://github.com/user_name/proffy.git`)

3. Crie uma *branch* para realizar sua modificação (`git checkout -b feature/name_new_feature`)

4. Adicione suas modificações e faça o *commit* (`git commit -m "Descreva sua modificação"`)

5. *Push* (`git push origin feature/name_new_feature`)

6. Crie um novo *Pull Request*

7. Pronto, agora só aguardar a análise 🚀 

## 📜 License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐

