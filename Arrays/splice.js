const numerais = ["1", "2", "3", "4", "5", "6"]

const tamanho = numerais.length
console.log("tamanho original", tamanho)

numerais.push(7)
numerais.splice(3, 2)

const novoTamanho = numerais.length
console.log("Novo tamanho", novoTamanho)

