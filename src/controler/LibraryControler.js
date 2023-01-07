const LibraryServices = require("../services/LibraryServices");


module.exports = {

    //Requisição para buscar várias informações informações no Bando de Dados
    buscarTodos: async (req,res)=> {
        let json = {error:``, result:[]};

        let infos = await LibraryServices.buscarTodos();

        for(let i in infos){
            json.result.push({
                titulo: infos[i].titulo,
                autor: infos[i].autor,
                codigo: infos[i].id_livro 
            })
        }
        res.json(json)
    },

    //Bucar autor e titulo pelo id no banco de dados
    buscarID: async(req,res)=>{
        let json = {error:``, result:{}}

        let codigo = req.params.codigo
        let info = await LibraryServices.buscarID(codigo)

        if(info){
            json.result = info
        }

        res.json(json)
    }
}