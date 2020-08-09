

# ❔ Sobre o projeto 
Uma plataforma de estudos online que visa conectar alunos e professores de forma rápida e fácil.
<br/> O projeto foi desenvolvido na **Next Level Week 2**


# 📸 Screenshots
<hr/>
<h4 align="center">Interface Web para Desktop</h4>

<h4 align="center">Interface Web para Mobile</h4>

# 🛠 Techs

# ⚙ Instalação e Start
Certifique-se de que tenha instalado o docker e Node.js, certifique-se que o docker esta correndo

# Clonagem~
Primeiro, clone o repositório para seu ambiente:

> git clone https://github.com/arlindojos/proffy.git

Depois, entre no repositório clonado  e insira os seguintes comandos no seu terminal:
## Para criar o banco de dados automaticamente
 > docker-compose up

# Server
# Entra no diretório "server"
> cd ./proffy/server

## para criar as tabelas necessárias no banco de dados
> `npm run knex:migrate`  ou `yarn knex:migrate`

## para iniciar o servidor
> `npm run start`  ou `yarn start`

# Proffy_web
# Entra no diretório "proffy_web"
> cd ./proffy/proffy_web

## para iniciar a apricação 
> `npm run start`  ou `yarn start`







## Conexões

- Rota par listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota par listar aulas;
    - Filtrar por matéria, dia da semana e horário;

# Database 
- postgres
