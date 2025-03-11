// Frase que será exibida em cascata
const frase = "Te Amo ♥";

// Função para gerar uma cor aleatória em formato hexadecimal
function gerarCorAleatoria() {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)]; // Gera um caractere hexadecimal aleatório
    }
    return cor;
}

// Função para criar a animação de cascata com a frase completa
function criarCascata() {
    const body = document.body;

    // Intervalo para adicionar novas frases (a cada 200ms)
    setInterval(() => {
        const elementoFrase = document.createElement("div");
        elementoFrase.className = "frase";
        elementoFrase.textContent = frase;

        // Define uma cor aleatória vibrante para a frase
        elementoFrase.style.color = gerarCorAleatoria();

        // Posiciona a frase aleatoriamente no topo da tela
        elementoFrase.style.left = `${Math.random() * window.innerWidth}px`;
        elementoFrase.style.top = `-50px`; // Começa acima da tela

        // Adiciona a frase ao corpo da página
        body.appendChild(elementoFrase);

        // Força o navegador a renderizar a frase antes de calcular a altura
        void elementoFrase.offsetHeight;

        // Calcula a posição final (final da tela + altura da frase)
        const posicaoFinal = window.innerHeight + elementoFrase.offsetHeight;

        // Animação para fazer a frase cair até o final da tela
        const duracao = 3 + Math.random() * 5; // Duração aleatória entre 3 e 8 segundos
        const animacao = elementoFrase.animate(
            [
                { top: `-50px`, opacity: 1 }, // Começa acima da tela
                { top: `${posicaoFinal}px`, opacity: 1 } // Termina no final da tela + altura da frase
            ],
            {
                duration: duracao * 1000, // Duração em milissegundos
                iterations: 1 // A animação ocorre apenas uma vez
            }
        );

        // Remove a frase do DOM após a animação terminar
        animacao.onfinish = () => {
            elementoFrase.remove();
        };

        // Interatividade: muda a cor ao clicar na frase
        elementoFrase.addEventListener("click", () => {
            elementoFrase.style.color = gerarCorAleatoria();
        });
    }, 200); // Adiciona uma nova frase a cada 200ms (0.2 segundos)
}

// Função para exibir a mensagem final após um tempo
function exibirMensagemFinal() {
    const mensagemFinal = document.getElementById("mensagemFinal");
    mensagemFinal.style.display = "block"; // Exibe a mensagem final

    // Efeito de confete ao clicar em "Sim!"
    const botaoSim = document.getElementById("botaoSim");
    botaoSim.addEventListener("click", () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        mensagemFinal.innerHTML = "<h2>Eba! Vamos viver essa história juntos! ❤️</h2>";
    });

    // Botão "Não" move-se aleatoriamente
    const botaoNao = document.getElementById("botaoNao");
    botaoNao.addEventListener("mouseover", () => {
        botaoNao.style.position = "absolute";
        botaoNao.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        botaoNao.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    });
}

// Inicia a animação quando a página carrega
window.addEventListener("load", () => {
    criarCascata();
    setTimeout(exibirMensagemFinal, 10000); // Exibe a mensagem final após 10 segundos
});
