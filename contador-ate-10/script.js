function contador() {
    var resultado = document.getElementById('resultado')

    resultado.innerHTML = '<h1>Contando de 1 até 10</h1>'
    for(let i = 0;i <= 10;i++) {
        resultado.innerHTML += `&#128512;${i}`
    }
    resultado.innerHTML += '&#127937;'
}