const formulario = document.querySelector('.formulario');
const campoA = document.querySelector('#input-campo1');
const campoB = document.querySelector('#input-campo2');
const botaoSubmit = document.querySelector('#btn-submit');
const mensagem = document.createElement('p');
mensagem.style.marginTop = '10px';

botaoSubmit.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (campoB.value > campoA.value) {
        mensagem.innerHTML = `O valor do <strong>Campo B</strong> é maior que o valor do <strong>Campo A</strong>`;
        mensagem.style.color = 'green';
    } else {
        mensagem.innerHTML = `O valor do <strong>Campo A</strong> é maior que o valor do <strong>Campo B</strong>`;
        mensagem.style.color = 'red';
    }

    formulario.appendChild(mensagem);
});
