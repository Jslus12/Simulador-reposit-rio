# 💻 Simulador de Orçamento Freelancer - J.P.T.I

Fala, pessoal! 👋

Esse projeto foi desenvolvido com o objetivo de simular a contratação de serviços de TI, permitindo que um cliente monte um orçamento de forma simples, dinâmica e interativa diretamente no navegador.

A proposta surgiu a partir das aulas de JavaScript, onde trabalhamos conceitos de interatividade no lado do cliente (*client-side*), aplicando isso em um cenário real do mercado freelancer.

---

## Sobre o Projeto

O **Simulador de Orçamento Freelancer J.P.T.I** permite que o usuário:

* Selecione serviços de desenvolvimento
* Visualize os itens adicionados
* Veja o valor total atualizado automaticamente
* Remova serviços do orçamento
* Finalize o pedido com um resumo do valor

Tudo isso de forma dinâmica, sem recarregar a página.

!(Imagem)[imagem.png]

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento, foram utilizados conceitos importantes do JavaScript:

* Manipulação do DOM
* Eventos (`addEventListener`)
* Uso de variáveis (`let` e `const`)
* Conversão de valores (`parseFloat`)
* Arrow Functions (`() => {}`)
* Atualização dinâmica de conteúdo na tela

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** → Estrutura da aplicação
* **CSS3** → Estilização e responsividade
* **JavaScript (Vanilla)** → Lógica e interatividade

---

## 📋 Funcionalidades

✔️ Listagem de serviços disponíveis
✔️ Adição de serviços ao orçamento
✔️ Remoção individual de itens
✔️ Atualização automática do total
✔️ Finalização do orçamento com alerta
✔️ Interface responsiva e moderna

---

## 💰 Serviços Disponíveis

Os valores foram definidos com base em pesquisas de mercado freelancer.

* Landing Page — R$ 800
* Site Institucional — R$ 1.500
* Sistema com Banco de Dados — R$ 2.500
* Hospedagem e Publicação — R$ 300
* Responsividade Mobile — R$ 400
* SEO Básico — R$ 350
* Formulário de Contato — R$ 250
* Painel Administrativo — R$ 1.200
* Manutenção Mensal — R$ 250
* Integração com WhatsApp — R$ 150

---

## 🧩 Estrutura do Projeto

```
📁 projeto
│
├── index.html   → Estrutura da página
├── style.css    → Estilização
└── script.js    → Lógica do sistema
```

---

## ⚙️ Como Funciona

1. O usuário clica em **"Adicionar"** em um serviço
2. O item é inserido na lista de orçamento
3. O valor é convertido e somado ao total
4. O usuário pode remover itens a qualquer momento
5. Ao clicar em **"Finalizar orçamento"**, o sistema:

   * Exibe o valor total
   * Limpa o carrinho

---

## 💡 Destaques do Código

### 🔹 Conversão de preço (tratamento de string → número)

```javascript
const preco = parseFloat(
    produto.querySelector('.preco')
        .textContent
        .replace("R$", "")
        .replace(/\./g, "") 
        .replace(",", ".") 
);
```

### 🔹 Atualização do total

```javascript
total += preco;
totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
```

### 🔹 Remoção de item

```javascript
removerBtn.addEventListener("click", () => {
    listaPedido.removeChild(itemPedido);
    total -= preco;
});
```

---

## 🎯 Objetivo do Projeto

Esse projeto não é apenas uma calculadora simples, mas sim uma **simulação real de contratação de serviços de TI**, ajudando a entender:

* Como precificar serviços
* Como melhorar a experiência do usuário
* Como aplicar JavaScript em situações reais

---

## 📌 Melhorias Futuras

* Salvar orçamento no localStorage
* Integração com backend
* Envio automático via WhatsApp
* Sistema de login para clientes
* Aplicação de descontos ou cupons

---

## 📞 Contato

* WhatsApp: https://www.whatsapp.com/43999271076
* Instagram: https://www.instagram.com/joao.delbianco

---

## 🧾 Considerações Finais

Esse projeto foi essencial para reforçar conceitos de JavaScript e entender como pequenas interações podem gerar uma experiência muito mais profissional para o usuário.

Além disso, trouxe uma visão mais prática sobre o mercado freelancer e a importância de saber precificar serviços corretamente.

---

 *Projeto desenvolvido por João (J.P.T.I) — vivendo e aprendendo na prática.* 
