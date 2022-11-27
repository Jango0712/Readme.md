let suma = (x, y, z) => {
    
    let resultado = x + y + z;

    console.log(resultado);
  };

  let resta = (x, y = 0) =>{
    
    let resultado = x - y;
    console.log(resultado);
  };

  let mult = (x, y = 0) =>{
  
    let resultado = x * y;
    console.log(resultado);
  };

  let div = (x, y = 0) =>{
  
    let resultado = x / y;
    console.log(resultado);
  };

  let cuadradoNumero = (x) => {
    let resultado = x * x;
    console.log(resultado);
 }
  

  module.exports = {suma, resta, mult, div, cuadradoNumero};