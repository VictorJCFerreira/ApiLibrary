/*
    Passo a Passo
    1- Tornar as variasveis de ambiente visiveis no servidor (variaveis.env)
    2- Chamar o express, cors e body-parser
    3- Ter acesso as Rotas
    4- Acessar os pacotes do express,cors e body-parser
    5- Criando um prefixo para as rotas
    6- Ler os arquivos da variavel de ambiente da porta do servidor
*/


require("dotenv").config({path:"variaveis.env"})

const express = require("express")
const cors = require("cors")                    
const bodyParser = require("body-parser")  

const routes = require("./routes")

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

server.use("/api", routes)

//Função para hospedagem da API
server.listen(process.env.PORT, ()=> {
    console.log(`servidor rodando em http://localhost:${process.env.PORT}`)
})