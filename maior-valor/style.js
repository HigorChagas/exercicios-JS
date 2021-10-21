function maiorValor() {
    var primeiroNumero = Number(prompt('Digite um número: '))
    var segundoNumero = Number(prompt('Agora digite outro número'))

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `Analisando os números 
    <mark>${primeiroNumero}</mark> e <mark>${segundoNumero}</mark>,
    o maior valor é: 
    `

    if (primeiroNumero > segundoNumero) {
        resultado.innerHTML += `<b>${primeiroNumero}</b>`
    } else {
        resultado.innerHTML += `<b>${segundoNumero}</b>`
    }
}