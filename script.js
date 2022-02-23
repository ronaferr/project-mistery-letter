let botaoCriar = document.querySelector('#criar-carta');
let cartaGerada = document.querySelector('#carta-gerada');
let inputTexto = document.querySelector('#carta-texto');
let grupo1 = ['newspaper', 'magazine1', 'magazine2'];
let grupo2 = ['medium', 'big', 'reallybig'];
let grupo3 = ['rotateleft', 'rotateright'];
let grupo4 = ['skewleft', 'skewright'];

botaoCriar.addEventListener('click', function () {
    let vazio = '';
    cartaGerada.innerHTML = vazio;
    if (inputTexto.value.trim().length === 0) {
        let mensagem = 'Por favor, digite o conteúdo da carta.';
        cartaGerada.innerHTML = mensagem;
        /* cartaGerada.appendChild(cartaGerada); */
    } else {
        let palvrasSeparadas = inputTexto.value.split(" ");
        for (let i = 0; i < palvrasSeparadas.length; i += 1) {
            function sorteia(arr) {
                var rand = Math.floor(Math.random() * arr.length);
                return arr[rand];
            }
            let classe1 = sorteia(grupo1);
            let classe2 = sorteia(grupo2);
            let classe3 = sorteia(grupo3);
            let classe4 = sorteia(grupo4);
            let tagSpan = document.createElement('span');
            tagSpan.innerText = palvrasSeparadas[i];
            /* tagSpan.innerHTML = palvrasSeparadas[i]; */
            /* tagSpan.innerHTML = `${palvrasSeparadas[i]};`*/
            /* tagSpan.innerText = `${palvrasSeparadas[i]};`*/

            tagSpan.className = classe1 + ' ' + classe2 + ' ' + classe3 + ' ' + classe4;
            /* cartaGerada.innerHTML = tagSpan */
            cartaGerada.appendChild(tagSpan);
        }
    }
})
/* https://pt.stackoverflow.com/questions/73214/criar-uma-combina%C3%A7%C3%A3o-aleatoria-com-classes-css-utilizando-javascript-ou-jquery */