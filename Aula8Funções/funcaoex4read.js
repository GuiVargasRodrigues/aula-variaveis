const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

rl.question("Digite um número: ", (numero) => {
    numero = Number(numero); 
    verificarParOuImpar(numero);
    rl.close();
});
