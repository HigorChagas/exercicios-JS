const botao = document.querySelector('#contar');
botao.addEventListener('click', function() {
    const resultado = document.querySelector('#mostrar');
    let nome = document.querySelector('#input-nome').value;
    
    resultado.innerHTML = `Seu nome tem: ${nome.length} letras`;
    
})
