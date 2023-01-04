/*
    
Primitivos
    String - Cadeia de caaracteres

    "" // aspas dublas
    '' // aspas simples
    `` //  template string ou literals (Multi linhas)(expressoes de linguagem ${expressao}, interpolação)

    Undefined // Indefinido

    Null // Nulo
        Nao possui nada dentro
        Diferente de Undefined
    
Estrutural
    Object // Objetct
        Propriedades / Atributos
        Funcionalidades / Métodos  
    var pessoa {propriedade: "valor"}
    console.log(pessoa.propriedade)

    Array // Vetores
        Uma lista
        Agrupamentos de dados
    var lista = ["Leite",
                "Ovos",
    ]

Variaveis
    var // varaivel global
    let // local
    const // nao muda seu valor

Scope
    {
        //Código
    }


/var weight 

let student = { 
    name: "Victor",
    age: 18,
    weight: 71,
    stars: 15.12,
    isSubscribed: true
}
console.log(student)

console.log(`${student.name} de idade ${student.age} tem ${student.weight}kg`)

let school = [
    student
]
const john = {
    name: "John",
    age: 17,
    weight: 80.4,
    isSubscribed: false,
}
school[1] = john
console.log(school)




Funções

function createphrases () {
    console.log("Matheus é alto")
    console.log("Lucas é calvo")
    console.log("Guilherme é baixo")
}
createphrases()


const sum = function (n1, n2){
    console.log(n1+n2)
}
sum(2,3)


const subt = function(num1,num2){
    let total = num1 - num2
    return total
}
let num1 = 12
let num2 = 10
console.log(`a subtração dos numeros é ${subt(num1,num2)}`)


let create = "video"
function imagination(create){
    create = "photo"
    return create
}
console.log(create)
console.log(imagination(create))


const sayMyName = (name) => {
    name()
}
sayMyName(
    () => {
        console.log("estou em uma callback")
    }
)

function Person(nome) {
    this.name = nome 
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const Danilo = new Person("Danilo")
const Caua = new Person("Caua")
console.log(Danilo.walk())
console.log(Caua.walk())



Arrays 

let myArray = new Array('a','b','c')
console.log(myArray)
console.log(myArray.length)

let palavra = "manipulação"
console.log(Array.from(palavra))

let techs = ['htuml', 'css', 'js']
techs.push('nodejs') //add no final
techs.unshift("sql") //add no começo
techs.pop() //retirar do final
techs.shift() //retirar do começo
console.log(techs.slice(1,3)) //contar apartir de...
console.log(techs.splice(1,1)) //remover itens...
let index = techs.indexOf('css') //qual a posição do elemento


 &&
 ||
 !var
 cond ? valor 1 : valor 2
*/



let nota = 7

function verNota (nota) {
    let notaA = nota >= 90 && nota <=100
    let notaB = nota < 90 && nota >=80
    let notaC = nota < 80 && nota >=70
    let notaD = nota < 70 && nota >=60
    let notaE = nota < 60 && nota >=50
    let notaF = nota < 50 && nota >=0

    let notaFinal;

    if (notaA) {
        notaFinal = "A"
    } else if (notaB) {
        notaFinal = "B"
    } else if (notaC) {
        notaFinal = "C"
    } else if(notaD) {
        notaFinal = "D"
    } else if(notaE) {
        notaFinal = "E"
    } else if(notaF) {
        notaFinal = "F"
    } else {
        notaFinal = "Valor nao Correspondente"
    }

    return console.log(notaFinal)
}
verNota(65)
verNota(71)
verNota(101)
verNota(-1)
verNota(100)



var familia = {
    entradas: [5000,2000,540.34,65.87],
    saidas: [600,3456.98,439.67],
}

function sum(array) {
    let total = 0;
    for (value of array){
        total += value
    }
    return total
}

function calcularBalanço (){
    const totalEntradas = sum(familia.entradas)
    const totalSaidas = sum(familia.saidas)
    const total = totalEntradas - totalSaidas
    
    if(total>=0){
        console.log(`Seu saldo é positivo de R$ ${total.toFixed(2)}` )
    } else{
        console.log(`Seu saldo é negativo de R$ ${total.toFixed(2)}` )
    }
}   
calcularBalanço()



function Tgrau(degree) {
    const vcelcius = degree.toUpperCase().includes("C")
    const vfahren = degree.toUpperCase().includes("F")

    if (!vcelcius && !vfahren) {
        throw new Error("grau nao identificado")
    }

    //formula de F para C
    let novoGrau = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit-32)*5/9
    let sinalGrau = "C"

    if(vcelcius) {
        novoGrau = Number(degree.toUpperCase().replace("C", ""));
        formula = celcius => celcius * 9/5 + 32
        sinalGrau = "F"
    }

    return formula(novoGrau).toFixed(2) + sinalGrau
}

try{
    console.log(Tgrau("90f"))
    console.log(Tgrau("90C"))
    console.log(Tgrau("180f"))
    console.log(Tgrau("90Z"))
}catch(error){
    console.log(error.message)
}



const booksCategory = [
    {
        category: "Riqueza",
        books: [
        {
            title:"Os segredos da mente milhonaria",
            author:"T. Harv Eker",
        },
        {
            title:"O homem mais rico da Babilonia",
            author:"George S. Clason",
        },
        {
            title:"pai rico pai pobre",
            author:"Sharon Lechter",
        },
            ],
    },
    {
        category: "Emocional",
        books:[
            {
                title:"Voce é insubstituivel",
                author:"August Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do seculo",
                author:"August Cury",
            },
            {
                title:"Os 7 habitos das pessoas altamente eficientes",
                author:"Stephen Covey",
            },
        ],
    },
];

const totalCategory = booksCategory.length

for(let categoria of booksCategory){
    console.log('total de livros na categoria é de ',  categoria.category)
    console.log(category.books.length)
}

function countAuthors (){
    let authores = [];

    for(let categoria of booksCategory){
        for(let book of categoria.books){
            if(authores.indexOf(book.author) == -1){
                authores.push(book.author)
            }
        }
    }

    console.log("total de autores: ", authores.length)
}
countAuthors()

function AuthorBooks (author){
    let books = [];

    for(let categoria of booksCategory){
        for(let book of categoria.books){
            if(book.author == author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livro do Author ${author}: ${books.join(", ")}`)
}
AuthorBooks("August Cury")

var nome = "Victor"
var nomes = [
        Joao = {
            nm: "joao",
            idade: 14,
            ano: 1999,
            peso: "70kg"
        },
        Clara = {
            nm: "Clara",
            idade: 15,
            ano: 1998,
            peso: "50kg"
        },
        Fabricio = {
            nm: "Fabricio",
            idade: 17,
            ano: 1995,
            peso: "80kg"
        },
];
for(let pao in nomes){
    pao,
    console.log(nomes[pao].nm)
}



const https = require("https")
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log("Conectando API")



let assar = true;

console.log("fazendo Bolo")

const bolo = new Promise((resolve, reject)=>{
    if(assar){
        return resolve("Bolo no capricho")
    }
    return reject("bolo queimado")
})

console.log("Assando bolo")

bolo
    .then(dourado => console.log(dourado))
    .catch(queimado=>console.log(queimado))
    .finally(()=> console.log("Vai comer o que você fez SIM!"))



const login = (email, password) => {
    return new Promise ((resolve, reject) => {
        const error = true
        if (error){
            reject(new Error('erro no login'))
        }
    
    console.log("usuario logado")
    resolve({email})
    })
};
    
const userVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Videos do Usuario")
            resolve(["video1","video2","video3"])
        }, 1000);
    })
};
    
const userVideoDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Detalhes dos videos")
            resolve({title: "TITULO_DO_VIDEO"})
        }, 2000)
    })
};
    
const displayUser = async () => {
        const user = await login("victorferreira@gmail.com","12345")
        const video = await userVideos(user.email)
        const videodetails = await userVideoDetails(video[0])
        console.log(videodetails)  
} 
    
displayUser().catch(error => console.log(error))

console.log("Oi sumido")