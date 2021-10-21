function tabuada() {
    let mostrar = document.getElementById('mostrar')
    let numero = Number(document.getElementById('numero-multiplicacao').value)

    mostrar.innerHTML = `<h2>Tabuada do ${numero}</h2>`

    for(let i = 1;i < 11;i++) {
        resultado = numero * i

        mostrar.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}