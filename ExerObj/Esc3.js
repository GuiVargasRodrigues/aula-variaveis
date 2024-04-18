const carrinho = [];

const fruta1 = { nome: "Maçã", disponibilidade: true};
const fruta2 = { nome: "Banana", disponibilidade: true};
const fruta3 = { nome: "Laranja", disponibilidade: true};

function adicionarFrutaAoCarrinho(fruta) {
    carrinho.push(fruta);
}

function inverterDisponibilidade(fruta) {
    const novaFruta = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    };
    return novaFruta;
}

adicionarFrutaAoCarrinho(fruta1);
adicionarFrutaAoCarrinho(fruta2);
adicionarFrutaAoCarrinho(fruta3);

console.log("Carrinho antes de inverter a disponibilidade:", carrinho);

const frutaAtualizada = inverterDisponibilidade(fruta1);
console.log("Fruta após inverter a disponibilidade:", frutaAtualizada);

console.log("Carrinho após inverter a disponibilidade:", carrinho);

