/*
class <nome_class>{

}*/
//atributos são as caracteristicas(idade, cpf...), já os metodos são as funcionalidades (compra, corre, vender ...etc)
class Pessoa {
  constructor(peso, altura){//construtor é uma function, dentro da classe não é necessario usar a palavra function
    this.peso = peso;
    this.altura = altura;
  }

  imc(){//pela estrutura o js já indentifica a function
    let imc = this.peso / (this.altura*this.altura)// let local a minha function
    return imc;
  }

} module.exports = Pessoa;