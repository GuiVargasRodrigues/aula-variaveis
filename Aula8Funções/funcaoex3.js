function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`A média das notas ${nota1}, ${nota2} e ${nota3} é: ${media}`);
    //console.log(media.toFixed(2))
}


const nota1 = 7;
const nota2 = 8;
const nota3 = 6;

calcularMedia(nota1,nota2,nota3);
