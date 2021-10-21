let contador = 0
function contarCliques() {
    ++contador
    document.getElementById('contador').innerHTML = contador
}

function resetarCliques() {
    contador = 0
    document.getElementById('contador').innerHTML = contador

}