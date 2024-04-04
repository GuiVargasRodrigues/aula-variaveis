//let numero = 10;


//while (numero >= 0) {
  //  console.log(numero);
  //  numero--;
//}

let numero = 10;


while (numero >= 0) {
    if (numero === 0) {
        console.log("BOOOOM!");
    } else if (numero % 2 === 0) {
        console.log("tic");
    } else {
        console.log("tac");
    }
    numero--;
}
