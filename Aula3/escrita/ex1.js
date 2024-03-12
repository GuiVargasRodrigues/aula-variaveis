// Declarando uma variável para armazenar um nome sem atribuir um valor
let nome = "guilherme";
// Declarando uma variável para armazenar uma idade sem atribuir um valor
let idade = "20";

console.log("nome:", nome);
console.log("idade:", idade);

// Imprimindo na tela o tipo das variáveis 'nome' e 'idade'
console.log("Tipo de 'nome':", typeof nome); // Saída: string
console.log("Tipo de 'idade':", typeof idade); // Saída: string

// O tipo 'undefined' foi impresso porque as variáveis foram declaradas, mas nenhum valor foi atribuído a elas.

console.log("Olá " + nome + ", você tem " + idade + " anos.");