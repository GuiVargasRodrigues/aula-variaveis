// Objeto representando um filme
const filme = {
    direcao: "Robert Zemeckis",
    nome: "De Volta para o Futuro",
    anoLancamento: 1985,
    elenco: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    jaVi: true
};
filme.personagens=["Marty Mcfly","Doc Brown", "Lorraine"]


console.log(filme.direcao);
console.log(filme.anoLancamento);
console.log(filme.jaVi);
console.log(filme["nome"]);
console.log(filme["elenco"]);
console.log(filme.personagens);