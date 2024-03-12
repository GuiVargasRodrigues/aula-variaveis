let a = 10;
let b = 25;

// Troca dos valores das variáveis sem variável temporária
[a, b] = [b, a];

// Após a troca, os novos valores são:
console.log("O novo valor de a é", a); // Saída: O novo valor de a é 25
console.log("O novo valor de b é", b); // Saída: O novo valor de b é 10

