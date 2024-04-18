function criarObjetoUsuario(nome, idade, profissao) {
    const objetoUsuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };
    
    console.log(objetoUsuario);
    console.log(typeof objetoUsuario);
}


criarObjetoUsuario("Lais", 26, "Programadora");
