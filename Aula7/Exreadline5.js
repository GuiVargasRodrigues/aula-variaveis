const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o primeiro número:", (numero1) => {
    rl.question("Digite o segundo número:", (numero2) => {
        rl.question("Digite o terceiro número:", (numero3) => {

            let maiorNumero;

            // Verificando qual é o maior número
            if (numero1 >= numero2 && numero1 >= numero3) {
                maiorNumero = numero1;
            } else if (numero2 >= numero1 && numero2 >= numero3) {
                maiorNumero = numero2;
            } else {
                maiorNumero = numero3;
            }

            console.log(`O maior número é: ${maiorNumero}`);
            rl.close();
        });
    });
});
