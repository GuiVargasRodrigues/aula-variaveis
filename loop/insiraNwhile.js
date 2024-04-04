const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let numero = 1; 

console.log("Insira números. Digite 0 para finalizar.");

while (numero !== 0) {
    numero = Number(rl.question("Insira um número: "));
    soma += numero;
}

console.log("A soma dos números é:", soma);
rl.close(); 
