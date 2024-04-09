function encontrarMaiorNumero(array) {
    let maior = array[0]; 

    for (let i = 1; i < array.length; i++) {
        maior = Math.max(maior, array[i]); 
    }

    return maior; 
}


const numeros = [11, 15, 18, 14, 12, 13];
const maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maiorNumero);
