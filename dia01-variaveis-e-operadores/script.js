var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o seu nome?");
  alert(`Olá ${nome}, é um prazer te ver!`);
};

let idade;
alert(idade); // undefined

let neuNome = 'Otávio';
idade = 20;

// variáveis com var podem ser redeclaradas
// variaveis com let não podem ser redeclaradas
// variaveis com const não podem ser redeclaradas e nem reatribuídas


// Tipos de variáveis
let tipoString = 'Otávio'; // string
let tipoNumber = 20; // number
let tipoBoolean = true; // boolean - true ou false
let tipoArray = [1, 2, 3]; // array
console.log(tipoArray[0]);  // resultado 1
let tipoObject = { nome: 'Otávio', idade: 20 }; // object
console.log(tipoObject.nome); // resultado Otávio
const tipoConstante = 'não posso mudar'; // constante - não pode mudar o valor
// tipoConstante = 'teste'; // VAI DAR ERRO