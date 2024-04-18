function obterInformacoes(objeto) {
    const { nome, idade, profissao } = objeto;
    return [nome, nome.length, idade, profissao, profissao.length];
}

const pessoa1 = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
};

const pessoa2 = {
    nome: "Carlos",
    idade: 40,
    profissao: "Professor"
};

console.log(obterInformacoes(pessoa1)); 
console.log(obterInformacoes(pessoa2)); 
