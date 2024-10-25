let valorTotal = 0;

function adicionar () {
    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1];
    let nomeProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorUnitario;
    valorTotal += preco;

    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
        
    document.getElementById('valor-total').innerText = `Valor Total: R$${valorTotal.toFixed(2)}`;
}

function limpar() {
    
    document.getElementById('valor-total').innerText = '';

    document.getElementById('lista-produtos').innerHTML = '';

    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';

    produto = null;
    valorUnitario = 0;
    nomeProduto = '';
    quantidade = 0;
}
