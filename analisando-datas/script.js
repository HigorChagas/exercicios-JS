function mostrarData() {

    const data = new Date()
    const meses = ['Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
    ]

    const diasDaSemana =  [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `Dia: ${data.getDate()}<br>
    Mês: ${meses[data.getMonth()]}<br>
    Ano: ${data.getFullYear()}<br>
    Dia da semana: ${diasDaSemana[data.getDay()]}<br>
    Hora: ${data.getHours()}<br>
    Minutos: ${data.getMinutes()}<br>
    Segundos: ${data.getSeconds()}<br>
    `
}