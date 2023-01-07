// Criando as Rotas

const express = require("express")
const router = express.Router()

const LibraryControler = require("./controler/LibraryControler")

router.get('/infos', LibraryControler.buscarTodos)
router.get('/info/:codigo', LibraryControler.buscarID)
router.post('/info', LibraryControler.adicionar)
router.put('/info/:codigo', LibraryControler.alterar)

module.exports = router