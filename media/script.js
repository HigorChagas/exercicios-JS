function calcularMedia() {
    var nome = prompt('Qual o nome do aluno?')
    var primeiraNota = Number(prompt(`Qual foi a primeira nota de ${nome}`))
    var segundaNota = Number(prompt(`Além de ${primeiraNota}, qual foi a segunda nota de ${nome}`))
    var resultado = document.getElementById('resultado')

    media = (primeiraNota + segundaNota) / 2

    resultado.innerHTML = `Calculando a média final de ${nome}.<br>
    As notas obtidas foram ${primeiraNota} e ${segundaNota}.<br>
    A média final será: ${media}<br>`
    if (nome.length < 2 || primeiraNota == '' || segundaNota == '') {
        alert('Por favor, preencha todos os campos.')
        resultado.innerHTML = 'Preencha todos os campos'
    } else {
        if (media <= 5) {
            resultado.innerHTML += `A mensagem que temos é: <b>Estude um pouco mais<b>`
        } else {
            resultado.innerHTML += `A mensagem que temos é: <b class="b-green">Meus parabéns!!!</b>`
        }
    }

}
