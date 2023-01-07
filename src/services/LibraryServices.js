/*
    1- Chamar a conexão com o banco de dados
    2- Retornar uma Promessa para buscar todas as informações dos livros e artigos
    3- Retornar uma Promessa para buscar as informaçoes dos livros com base no ID
    4- Retornar uma Promise para enviar informações ao banco de dados
    5- Retornar uma promisse para alterar um livro pelo ID
    6- Retornar uma promisse para excluir um livro pelo ID
*/
const databank = require("../databank")

module.exports = {
    buscarTodos: () => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`SELECT * FROM books`, (error, results) =>{
                if(error){ rejeitado(error); return}
                aceito(results)
            })  
        })
    },

    buscarID: (codigo) => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`SELECT * FROM books WHERE id_livro = ?`,[codigo], (error,results) =>{
                if(error){ rejeitado(error); return; }
                if(results.length > 0 ){
                    aceito(results[0]);    
                }else{
                    aceito(false);
                }
            });
        });
    },

    adicionar: (titulo, conteudo, autor) => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`INSERT INTO books (titulo, conteudo, autor) VALUES (?, ?, ?)`,
            [titulo, conteudo, autor],
            (error,results) =>{
                if(error){ rejeitado(error); return; }
                    aceito(results.insertid_livro);
                }
            )
        });
    },

    alterar: (titulo, conteudo, autor, codigo) => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`UPDATE books SET  titulo = ?, conteudo = ?, autor = ? WHERE id_livro = ?`,
            [titulo, conteudo, autor, codigo],
            (error,results) =>{
                if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            )
        });
    },

    excluir: (codigo) => {
        return new Promise ((aceito, rejeitado) => {
            databank.query(`DELETE FROM books WHERE id_livro = ?`,[codigo], (error, results) =>{
                if(error){ rejeitado(error); return}
                aceito(results)
            })  
        })
    }
};