function calcularIdade() {
    const ano = Number(prompt('Qual ano você nasceu? '))

    resultado = document.getElementById('resultado')

    if (ano == '') {
        alert('Digite o seu ano de nascimento')
    } else {
        let data = new Date()
        let anoAtual = data.getFullYear()

        const idade = anoAtual - ano

        resultado.innerHTML = `Quem nasceu em ${ano} vai completar <b>${idade}</b> anos em ${anoAtual}`
    }

}