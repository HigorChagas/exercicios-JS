function iniciarContagem() {
    console.log('teste')
    let resultado = document.getElementById('resultado')
    let numero = document.getElementById('numero').value

    resultado.innerHTML = `Contando de 0 até ${numero}<br>`

    for(let i = 0;i <= numero; i++) {
        resultado.innerHTML += `${i}&#x1F449;`
    }
    resultado.innerHTML += `&#x1F3C1;`
}