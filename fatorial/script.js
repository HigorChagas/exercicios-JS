function calculoFatorial() {
    let numero = document.getElementById('input-fatorial').value;
    Number(numero);

    console.log(numero);

    for(let c = 0; c < 10; c++) {
        resultado = numero ** c;
        console.log(resultado);
    }

}