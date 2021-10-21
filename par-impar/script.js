function parImpar() {
    var numero = Number(prompt('Digite um número: '))
    var resultado = document.getElementById('resultado')

    if (numero % 2 === 0) {
        resultado.innerHTML = `O número ${numero} é <b>PAR!<b>`
    } else {
        resultado.innerHTML = `O número ${numero} é <b>IMPAR!<b>`
    }
}
