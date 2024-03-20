const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o primeiro número:", (numero1) => {
    rl.question("Digite o segundo número:", (numero2) => {
        rl.question("Digite a operação (+, -, *, /):", (operacao) => {
            // Convertendo os números para tipo numérico
            numero1 = Number(numero1);
            numero2 = Number(numero2);

            let resultado;

            // Verificando a operação escolhida e executando-a
            if (operacao === '+') {
                resultado = numero1 + numero2;
            } else if (operacao === '-') {
                resultado = numero1 - numero2;
            } else if (operacao === '*') {
                resultado = numero1 * numero2;
            } else if (operacao === '/') {
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    console.log("Erro: Divisão por zero.");
                    rl.close();
                    return;
                }
            } else {
                console.log("Operação inválida.");
                rl.close();
                return;
            }

            console.log(`O resultado da operação ${numero1} ${operacao} ${numero2} é ${resultado}`);
            rl.close();
        });
    });
});
