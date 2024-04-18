const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// Vai ser impresso Para cachorro, as propriedades permanecem as mesmas.
// Em gato, a propriedade nome é alterada para "Juba" usando a sintaxe {...cachorro, nome: "Juba"}, o que cria uma cópia das propriedades de cachorro e substitui o valor de nome.
// Em tartaruga, novamente é feita uma cópia das propriedades de gato, mas a propriedade nome é alterada para "Jubo" usando o método replaceAll para substituir "a" por "o".