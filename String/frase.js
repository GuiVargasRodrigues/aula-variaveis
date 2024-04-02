
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira uma frase: ', (frase) => {
  
  let fraseAlterada = frase.toUpperCase().replace(/O/g, 'I');

  
  console.log('Frase alterada:', fraseAlterada);

  
  rl.close();
});
