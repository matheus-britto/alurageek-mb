import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

function handleBadge() {
    const badge = document.querySelector('.badge')
    badge.classList.add('sucesso');
    badge.style.display = 'flex';
}


async function criarProduto(evento) {
    evento.preventDefault()

    const imagem = document.querySelector('[data-imagem]').value
    const nome = document.querySelector('[data-nome]').value
    const valor = document.querySelector('[data-valor]').value

    await conectaApi.criaProduto(imagem, nome, valor); // cri>a<Produto = faz referência a função do arquivo conectaApi

    formulario.reset
    handleBadge()
}



formulario.addEventListener('submit', evento => criarProduto(evento)) // >criaR<Produto = faz referência a função da linha 12