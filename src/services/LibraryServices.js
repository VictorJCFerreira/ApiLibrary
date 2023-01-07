/*
    1- Chamar a conexão com o banco de dados
    2- Retornar uma Promessa para buscar todas as informações dos livros e artigos
    3- Retornar uma Promessa para buscar o titulo e autor dos livros com base no id dele
*/
const databank = require("../databank")

module.exports = {
    buscarTodos: () => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`SELECT titulo, autor, id_livro FROM books`, (error, results) =>{
                if(error){ rejeitado(error); return}
                aceito(results)
            })  
        })
    },

    buscarID: (codigo)=> {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`SELECT titulo, autor FROM books WHERE id_livro = ?`,[codigo], (error,results) =>{
                if(error){ rejeitado(error); return; }
                if(results.length > 0 ){
                    aceito(results[0]);    
                }else{
                    aceito(false);
                }
            });
        });
    }
};