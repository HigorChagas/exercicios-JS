const botao = document.querySelector('#mostrar');

botao.addEventListener('click', function() {
    const nome = document.querySelector('#input-nome').value;
    const sobrenome = document.querySelector('#input-sobrenome').value;

    alert(`Olá ${nome} ${sobrenome}`)
})