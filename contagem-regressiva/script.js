function contagemRegressiva() {
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `<h1>Contagem regressiva</h1>`
    for(i = 10;i > 0; i-- ) {
        resultado.innerHTML += `${i}&#x1F449`
    }
    resultado.innerHTML += `&#x1F3C1;`
}