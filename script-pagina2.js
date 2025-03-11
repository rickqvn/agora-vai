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

        // Define uma cor aleatória para a frase
        elementoFrase.style.color = gerarCorAleatoria();

        // Posiciona a frase aleatoriamente no topo da tela
        elementoFrase.style.left = `${Math.random() * window.innerWidth}px`;
        elementoFrase.style.top = `-50px`; // Começa acima da tela

        // Adiciona a frase ao corpo da página
        body.appendChild(elementoFrase);

        // Animação para fazer a frase cair
        const duracao = 3 + Math.random() * 5; // Duração aleatória entre 3 e 8 segundos
        elementoFrase.animate(
            [
                { top: `-50px`, opacity: 0 }, // Começa acima da tela e invisível
                { top: `${window.innerHeight}px`, opacity: 1 } // Termina no final da tela e visível
            ],
            {
                duration: duracao * 1000, // Duração em milissegundos
                iterations: 1 // A animação ocorre apenas uma vez
            }
        );

        // Remove a frase do DOM após a animação terminar
        elementoFrase.addEventListener("animationend", () => {
            elementoFrase.remove();
        });
    }, 200); // Adiciona uma nova frase a cada 200ms (0.2 segundos)
}

// Inicia a animação quando a página carrega
window.addEventListener("load", criarCascata);