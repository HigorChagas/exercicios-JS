document.getElementById('calcular').addEventListener('click', function () {
    const mostrarResultado = document.getElementById('resultado')
    const nome = prompt('Qual o nome do aluno? ')
    const primeiraNota = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    const segundaNota = Number(prompt(`Alem de ${primeiraNota}, qual foi a outra nota de ${nome}`))

    const media = (primeiraNota + segundaNota) / 2
    mostrarResultado.innerHTML = `Calculando a média final de <mark>${nome}</mark>.<br> As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.<br> A media final será <mark>${media}</mark>`
})