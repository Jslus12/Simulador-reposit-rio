const botoesAdicionar = document.querySelectorAll('.Adicionar');
const listaPedido = document.getElementById('lista-pedido');
const totalElemento = document.getElementById('total');
let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const produto = botao.parentElement;
        const nome = produto.querySelector("h3").textContent;
        const preco = parseFloat(
            produto.querySelector('.preco')
                .textContent
                .replace("R$", "")
                .replace(/\./g, "") 
                .replace(",", ".") 
        );

        const itemPedido = document.createElement('li');

        // botão remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = "Remover";
        removerBtn.classList.add("remover");

        itemPedido.innerHTML = `${nome} - R$ ${preco.toFixed(2)} `;
        itemPedido.appendChild(removerBtn);

        listaPedido.appendChild(itemPedido);

        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

        // remover item
        removerBtn.addEventListener("click", () => {
            listaPedido.removeChild(itemPedido);
            total -= preco;
            totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
        });
    });
});

const botaoFinalizarPedido = document.getElementById("Finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () => {
    if(total === 0){
        alert("Seu carrinho está vazio 😅");
        return;
    }

    alert("Pedido Finalizado!\n" + totalElemento.textContent);

    listaPedido.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ 0,00`;
});