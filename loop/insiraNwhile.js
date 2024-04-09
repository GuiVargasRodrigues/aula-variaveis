const readlineSync = require('readline-sync');
function calcularSomaDosNumeros() {
    let soma = 0
    let input
    console.log("Digite os numeros (Digite '0' para parar:");
    while (input !== 0) {
        input = Number(readlineSync.question("Numero:"));
        soma += input;
    }
    return soma;
}
const somaTotal = calcularSomaDosNumeros();
console.log("A soma dos numeros é:", somaTotal);