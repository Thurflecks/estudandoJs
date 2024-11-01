//Escopo global 
// {} => let, const

let nome =  "arthur"

function exibirNome(){
    console.log(nome)
}
exibirNome()

//escopo local = { }

function exibirNome1(){
    const idade = 18
    console.log(nome, idade)
}

exibirNome1()

const idade = 17
console.log(idade)

//escopo de bloco

if (true){
    const idade = 15;
    console.log(idade)
}

//hoisting
x = 10;
console.log(x)
var x = 19
console.log(x)