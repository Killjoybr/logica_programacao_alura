alert("Boas vindas ao nosso site!");

let nome = "Lua";

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

let nomeUsuario = prompt("Qual é seu nome?");

let idadeUsuario = prompt("Qual é sua idade?");

alert(idadeUsuario >= 18 ? "Pode tirar a habilitação!" : "Não pode tirar a habilitação!");

let fimDeSemana;

let respostaUser = prompt("Qual é o dia da semana?");

respostaUser.toLowerCase() === "sábado" || respostaUser.toLowerCase() === "domingo" ? fimDeSemana = true : fimDeSemana = false;

alert(fimDeSemana ? "Bom fim de semana!" : "Boa semana!");

let numeroUser = prompt("Digite um número positivo ou negativo");

numeroUser < 0 ? alert("Número negativo") : alert("Número positivo ou 0");

if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
}; alert("Tente novamente p/ ganhar")

let saldoUser = 2300;
let nomeUser = "John Doe";

alert(`Olá ${nomeUser}, seu saldo atualmente é de: R$ ${saldoUser}`);

nomeUser = prompt("Digite seu nome:");

alert(`Boas vindas, ${nomeUser}!`)

/*
TODO: 3 modulo; 4 modulo
*/
