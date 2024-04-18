const professor = {
    nome: "Guilherme",
    idade: 20,
    tarefas:['Dar aula', 'Responder dúvidas'],
    contarPiada: function() {
        console.log('É pra ve ou pa come?')
    }
}
professor.nome = 'Richard'
console.log(professor.nome)