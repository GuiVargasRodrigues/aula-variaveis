const pessoa = {
    nome: "Guilherme",
    apelidos: ["Gui", "Guigui", "Guis"]
};

function imprimirMensagem(objeto) {
    const { nome, apelidos } = objeto;
    let apelidosTexto = "";

    for (let i = 0; i < apelidos.length; i++) {
        if (i === apelidos.length - 1) {
            apelidosTexto += " ou " + apelidos[i];
        } else {
            apelidosTexto += apelidos[i] + ", ";
        }
    }

    console.log("Eu sou " + nome + ", mas pode me chamar de: " + apelidosTexto + ".");
}
const novoObjeto = {
    ...pessoa,
    apelidos: ["G", "Guita", "Guilario"]
};

imprimirMensagem(novoObjeto);



