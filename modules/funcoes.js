function modulo(){
  /*
  function <nome da função>{

  }
  */
  /*
  function somar(){
    
    var x,y; x = 10; y = 10;
    var soma = x+y;
    console.log(soma);
    
  }
  */

  const somar = function (x,y) // Var pode ser modificada em tempo de execução, const e let não podem
  {
    var soma = x+y; //os valores são atribuidos na chamada da função e serão atribuidos respctivamente as variaveis declaradas
    return soma;// retorna para variaveis que poderam ser utilizadas. 
  }

  var z = somar(1,1);
  console.log(z);
} module.exports = {modulo};