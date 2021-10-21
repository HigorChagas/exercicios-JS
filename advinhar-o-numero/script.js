let resultado = document.getElementById('resultado')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let aleatorio = Math.random()
    computador = Math.floor(aleatorio * (max - min)) + min
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        resultado.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('btn').style.visibility = 'hidden'
    }
}

