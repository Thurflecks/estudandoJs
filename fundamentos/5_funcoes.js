// funcoes 
// modularizar o código

// function NOME(*args){}

function digaoi() {
    console.log("oi");
}

digaoi();
digaoi();
digaoi();
digaoi();

//args
function soma(a, b) {
    console.log("a soma de  a +  b é igual ", a + b)
}

soma(9, 8)

//return rtetorno de dados numa funcao
//return x
function multi(a, b) {
    return a * b
}

multi(2, 3)

const resultado = multi(3, 78)
console.log(resultado)

//arrow function

const dividir = (a, b) => {
    return a / b
}
console.log(dividir(4512431241245, 5))

//condicional ternaria
//cond/expressao ? TRUE : FALSE 
const idade = 14;
const eMaiorDeIdade = idade >= 18 ? "É maior" : "Não é maior"

console.log(eMaiorDeIdade)