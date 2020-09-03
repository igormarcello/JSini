function modulo(){
  var x = 2;
  const y = "a";

  console.log(x,y);

  {//bloco de códigos
    let z = 4;
    console.log(x,y,z);

  }
} 
module.exports = {modulo};//disponibiliza a função, modulo(), para ser utilizada em outros 