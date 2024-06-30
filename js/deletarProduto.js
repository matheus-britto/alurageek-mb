import { conectaApi } from "./conectaApi.js";

export async function deletarProduto(id, elemento) {
    try {
        await conectaApi.deletaProduto(id); // Chama a função de deleção da API
        elemento.remove(); // Remove o elemento do DOM
    } catch (erro) {
        console.error('Erro ao deletar o produto:', erro);
    }
}