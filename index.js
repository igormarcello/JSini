
const Pessoa = require('./modules/objetos/Pessoa.js');

const igor = new Pessoa (74, 1.69);//instanciando um objeto
console.log(igor.imc());

const luciano = new Pessoa ();
luciano.peso = 90;
luciano.altura = 1.80;
console.log(luciano.imc());