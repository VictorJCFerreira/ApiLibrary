require("dotenv").config({path:"variaveis.env"})// ler o arquivo  variaveis.env
const express = require("express")
const cors = require("cors")                    //Ultradependecia
const bodyParser = require("body-parser")       //Converter um body em outros formatos

const routes = require("./routes")

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

server.use("/library",routes)

server.listen(process.env.PORT, ()=> {
    console.log(`servidor rodando em http://localhost:${process.env.PORT}`)
})