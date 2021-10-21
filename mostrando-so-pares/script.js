function mostrarPares() {
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<h2>Mostrando só os pares de 0 a 10</h2>`

    for(let i = 2;i <= 10;i+= 2) {
        resultado.innerHTML += `${i}&#x1F449;`
    }

    resultado.innerHTML += `&#x1F3C1;`
}