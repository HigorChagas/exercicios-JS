function iniciarContagem() {
    let resultado = document.getElementById('resultado')
    let primeiroValor = Number(document.getElementById('primeiro-valor').value)
    let segundoValor = Number(document.getElementById('segundo-valor').value)
    let i

    resultado.innerHTML = `<h1>Contando de ${primeiroValor} até ${segundoValor}</h1>`

    if(primeiroValor == segundoValor || segundoValor == primeiroValor) {
        resultado.innerHTML = `Não foi possível iniciar a contagem, pois os números são iguais`
    } else {
        if(primeiroValor < segundoValor) {
            for(i = primeiroValor; i <= segundoValor; i++) {
                resultado.innerHTML += `${i}&#x1F449`
            }
        } else {
            for(i = primeiroValor; i >= segundoValor; i--) {
                resultado.innerHTML += `${i}&#x1F449`
            }
        }
        resultado.innerHTML += `&#x1F3C1;`
    }
    
    
}