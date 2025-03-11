// Função para mover o botão vermelho para uma posição aleatória
function moverBotao() {
    const botao = document.getElementById("botaoFugitivo");
    const janelaLargura = window.innerWidth; // Largura da janela do navegador
    const janelaAltura = window.innerHeight; // Altura da janela do navegador

    // Gera posições aleatórias dentro da janela
    const novaPosicaoX = Math.floor(Math.random() * (janelaLargura - botao.offsetWidth));
    const novaPosicaoY = Math.floor(Math.random() * (janelaAltura - botao.offsetHeight));

    // Aplica as novas posições ao botão
    botao.style.left = `${novaPosicaoX}px`;
    botao.style.top = `${novaPosicaoY}px`;
}

// Posiciona o botão vermelho ao lado do botão verde inicialmente
function posicionarBotaoInicialmente() {
    const botaoVerde = document.getElementById("botaoFixo");
    const botaoVermelho = document.getElementById("botaoFugitivo");

    // Obtém a posição do botão verde
    const rect = botaoVerde.getBoundingClientRect();

    // Define a posição do botão vermelho ao lado do botão verde
    botaoVermelho.style.left = `${rect.right + 20}px`; // 20px de espaçamento
    botaoVermelho.style.top = `${rect.top}px`;
}

// Função para abrir outra página
function abrirOutraPagina() {
    window.location.href = "outra_pagina.html"; // Redireciona para a segunda página
}

// Adiciona um evento de "mouseover" ao botão vermelho
const botaoFugitivo = document.getElementById("botaoFugitivo");
botaoFugitivo.addEventListener("mouseover", moverBotao);

// Posiciona o botão vermelho ao lado do botão verde ao carregar a página
window.addEventListener("load", posicionarBotaoInicialmente);

// Adiciona um evento de clique ao botão verde
const botaoVerde = document.getElementById("botaoFixo");
botaoVerde.addEventListener("click", abrirOutraPagina);