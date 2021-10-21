function mostrarData() {

    var data = new Date()

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `O que recebi do sistema foi: <mark>${data}</mark>`

}