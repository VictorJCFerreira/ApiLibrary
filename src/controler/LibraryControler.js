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
                conteudo: infos[i].conteudo,
                codigo: infos[i].id_livro 
            })
        }
        res.json(json)
    },

    //Bucar informações pelo id no banco de dados
    buscarID: async(req,res)=>{
        let json = {error:``, result:{}}

        let codigo = req.params.codigo

        let info = await LibraryServices.buscarID(codigo)

        if(info){
            json.result = info
        }

        res.json(json)
    },

    //inserir informações no banco de dados
    adicionar: async(req,res)=>{
        let json = {error:``, result:{}}

        let titulo = req.body.titulo;
        let conteudo = req.body.conteudo;
        let autor = req.body.autor;
        
        if(titulo && conteudo && autor ){
            let LivroBase = await LibraryServices.adicionar(titulo, conteudo, autor)
            json.result = {
                codigo: LivroBase,
                titulo,
                conteudo,
                autor,
            }
        }else {
            json.error = "Campos nao enviados"
        }

        res.json(json)
    },

    //Alterar informações
    alterar: async(req,res)=>{
        let json = {error:``, result:{}}

        let titulo = req.body.titulo;
        let conteudo = req.body.conteudo;
        let autor = req.body.autor;
        let codigo = req.params.codigo;
        
        if(titulo && conteudo && autor && codigo ){
            await LibraryServices.alterar(titulo, conteudo, autor, codigo)
            json.result = {
                titulo,
                conteudo,
                autor,
                codigo,
            }
        }else {
            json.error = "Campos nao enviados"
        }

        res.json(json)
    },
}