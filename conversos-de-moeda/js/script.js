function converterMoeda() {
    
    let valorReal = document.getElementById('moeda').value;
    let resultado = document.getElementById('resultado');

    //valorReal = Number(valorReal);

    const valorDolar =  valorReal / 5.25;

    resultado.innerHTML = `<p>${valorReal} R$ convertido para dolar é: ${valorDolar.toFixed(2)} U$</p>`;
};