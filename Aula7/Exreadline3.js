const readline = require('readline');

// Definindo a senha
const senhaArmazenada = "1234";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite sua senha:", (senhaDigitada) => {
    // Verificando se a senha digitada corresponde à senha armazenada
    if (senhaDigitada === senhaArmazenada) {
        console.log("Login bem-sucedido");
    } else {
        console.log("Senha incorreta");
    }

    rl.close();
});
