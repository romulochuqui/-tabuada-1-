//Tabuada do cinco, no console:

/*  let n = 5;

for (let i = 0; i <= 10; i++) {                       //Usamos o "for" para percorrer o laço; valor inicial até o valor final e incremento

    console.log(`${i} X ${n} = ${i*n}`);              // "${...}" posso colocar qualquer comando JS. No caso, usei variáveis. Template String
  //console.log(i + " X " + n + " = " + (i * n));     -ANTIGAMENTE

}  */ 



//Calculadora:

function calc(x1, x2, operator){

  return eval(`${x1} ${operator} ${x2}`); 

}

let resultado = calc(1, 2, "+");

console.log(resultado);


/*Calculadora com Arrow Function:

let calc = (x1, x2, operator) => {

  return eval(`${x1} ${operator} ${x2}`); 

}

let resultado = calc(1, 2, "+");

console.log(resultado);

*/ 