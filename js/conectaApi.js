async function listaDeProdutos() {
    const conexao = await fetch('https://produtos-8gkqgzqlk-matheus-projects-21a823c0.vercel.app/produtos')
    const conexaoConvertida = await conexao.json();

    // console.log(conexaoConvertida);
    return conexaoConvertida;
}

// listaDeProdutos()

async function criaProduto(imagem, nome, valor) {
    const conexao = await fetch('https://produtos-8gkqgzqlk-matheus-projects-21a823c0.vercel.app/produtos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor: valor
        })
    })

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

async function deletaProduto(id) {
    const conexao = await fetch(`https://produtos-8gkqgzqlk-matheus-projects-21a823c0.vercel.app/produtos/${id}`, {
        method: 'DELETE'
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listaDeProdutos,
    criaProduto,
    deletaProduto
}
