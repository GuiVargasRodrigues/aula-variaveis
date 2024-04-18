function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// False e Undefined
// Isso acontece porque no primeiro console a propriedade backender existe
// no objeto "pessoa", e o segundo retorna undefined porque a propriedade
// altura altura nao existe no objeto "pessoa".