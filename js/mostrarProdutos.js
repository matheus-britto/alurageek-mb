import { conectaApi } from "./conectaApi.js";
import { deletarProduto } from "./deletarProduto.js";

const lista = document.querySelector('[data-lista]')

function constroiCard(imagem, nome, valor, id) {
    const produto = document.createElement('li')
    produto.className = 'produtos_card'
    produto.innerHTML = `
        <img src="${imagem}" alt="">
        <h3 class="title_h3">${nome}</h3>
        <p><span>$ ${valor} <i class="ri-delete-bin-line btn_delete" data-id="${id}"></i></span></p>
    `
    produto.querySelector('.btn_delete').addEventListener('click', async () => {
        await deletarProduto(id, produto)
    });
    
    return produto;
}

async function listaDeProdutos() {
    const listaApi = await conectaApi.listaDeProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.imagem, elemento.nome, elemento.valor, elemento.id)));
}

listaDeProdutos()