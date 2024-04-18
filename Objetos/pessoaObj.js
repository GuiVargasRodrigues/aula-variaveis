const pessoa = {
    nome: "Guilherme",
    idade: 20,
    generoMusicalPreferido: "rock"
};

function adicionarInformacoesExtras(pessoa, comidasPreferidas, melhorAmigo) {
    
    let novaPessoa = {
        ...pessoa,
        comidasPreferidas: comidasPreferidas,
        melhorAmigo: melhorAmigo
    };

    
    console.log("O nome da pessoa é " + novaPessoa.nome + " e suas comidas preferidas são " + novaPessoa.comidasPreferidas.join(", ") + ". Seu melhor amigo se chama " + novaPessoa.melhorAmigo.nome + " e tem " + novaPessoa.melhorAmigo.idade + " anos.");
    
    

}


const melhorAmigo = {
    nome: "Erik",
    idade: 21
};


adicionarInformacoesExtras(pessoa, ["pizza", "hambúrguer", "lasanha"], melhorAmigo);
