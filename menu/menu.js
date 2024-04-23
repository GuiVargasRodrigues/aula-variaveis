function exibirMenu() {
    console.log("Menu de Opções");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    console.log("4. Sair");
}

const readline = require('readline-sync');

function processarEscolha(Opção) {
    switch(Opção) {
        case '1':
            console.log("Voce escolheu a opção 1.");
            break;
            case '2':
                console.log("Voce escolheu a opção 2.");
                break;
                case '3':
                    console.log("Voce escolheu a opção 3.");
                    break;
                    case '4':
                        console.log("Encerrando o programa...");
                        return true;
                        default:
                            console.log("Opção inválida. Por favor, escolha uma opção válida");
    }
    return false;
}

function main() {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opção = readline.question("Digite o número da opção desejada");
        encerrar = processarEscolha(opção);
    }
}
main();
