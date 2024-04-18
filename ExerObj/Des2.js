function compararFilmes(filme1, filme2) {
    const foiLancadoAntes = filme1.anoLancamento < filme2.anoLancamento;
    const mesmoAno = filme1.anoLancamento === filme2.anoLancamento;
    
    return `O primeiro filme foi lançado antes do segundo? ${foiLancadoAntes}\nO primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`;
}


const filme1 = { nome: "Filme A", anoLancamento: 2000 };
const filme2 = { nome: "Filme B", anoLancamento: 1990 };

console.log(compararFilmes(filme1, filme2));
