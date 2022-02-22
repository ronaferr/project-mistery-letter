let botaoCriar = document.querySelector('#criar-carta');
let cartaGerada = document.querySelector('#carta-gerada');
let inputTexto = document.querySelector('#carta-texto');

botaoCriar.addEventListener('click', function() {
    let palvrasSeparadas = inputTexto.value.split(" ");
    for (let i = 0; i < palvrasSeparadas.length; i += 1) {
        let tagSpan = document.createElement('span');
        tagSpan.innerHTML = `${palvrasSeparadas[i]}`;

        cartaGerada.appendChild(tagSpan);
    }
    console.log(cartaGerada);
})
