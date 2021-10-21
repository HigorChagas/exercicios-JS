function calculadora() {
    let resultado = document.getElementById('resultado')
    let primeiroValor = Number(prompt('Digite o primeiro valor: '))
    let segundoValor = Number(prompt('Digite o segundo valor: '))
    let calculoDesejado = Number(prompt(`Valores digitados: ${primeiroValor} e ${segundoValor}.\nO que deseja fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))

    switch(calculoDesejado) {
        case 1:
            resultado.innerHTML = `<h1>Calculando...</h1><br>${primeiroValor} + ${segundoValor} = <strong>${primeiroValor + segundoValor}</strong>`
            break

        case 2:
            resultado.innerHTML = `<h1>Calculando...</h1><br>${primeiroValor} - ${segundoValor} = <strong>${primeiroValor - segundoValor}</strong>`
            break

        case 3: 
            resultado.innerHTML = `<h1>Calculando...</h1><br>${primeiroValor} x ${segundoValor} = <strong>${primeiroValor * segundoValor}</strong>`
            break

        case 4:

            resultado.innerHTML = `<h1>Calculando...</h1><br>${primeiroValor} / ${segundoValor} = <strong>${primeiroValor / segundoValor}</strong>`
            break
        default:
            alert('Opção invalida. Tente novamente')    
            break
    }
}
