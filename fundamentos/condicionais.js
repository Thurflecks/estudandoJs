//if
const hora = 16
console.log(hora)
if (hora <= 12) {
    console.log("bom dia")
} else {
    console.log("boa tarde")
}

//ex
const temp = 32

if (temp <= 18) {
    console.log("esta frio")
} else {
    console.log("esta quente")
}

//elseif
let hora1 = 4
if (hora1 <= 12) {
    console.log("bom dia")
} else if (hora1 <= 18) {
    console.log("boa tarde")
} else {
    console.log("boa noite")
}

//switch
let diaDaSemana = 10

switch (diaDaSemana) {
    case 1:
        console.log("segunda-feira");
        break;
    case 2:
        console.log("terça-feira");
        break;
    case 3:
        console.log("quarta-feira");
        break;
    case 4:
        console.log("quinta-feira");
        break
    case 5:
        console.log("sexta-feira");
        break
    case 6:
        console.log("sabado");
        break
    case 7:
        console.log("domingo");
        break
    default:
        console.log("digite um dia válido")

}
//operadores lógicos 
//and(&&), or(||), not (!)

let idade = 11
let temcarteira = true

if (idade >= 18 && temcarteira) {
    console.log("pode digir")
} else {
    console.log("não pode digir")
}

//ex
const temrg = true
const temPass = true

if(temPass || temrg){
    console.log("pode fazer registro")
}else {
    console.log("nao pode fazer o registro")
}