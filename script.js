// ==========================================
// SELEÇÃO DOS ELEMENTOS DA PÁGINA
// ==========================================

const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");


// ==========================================
// FUNÇÃO PRINCIPAL DA ATIVIDADE
// ==========================================

function mostrarMensagem() {

    mensagem.textContent = "Função executada com sucesso! 🚀";

    mensagem.classList.remove("mensagem-sucesso");

    // Força a animação a reiniciar quando o botão
    // for clicado novamente.
    void mensagem.offsetWidth;

    mensagem.classList.add("mensagem-sucesso");

}


// ==========================================
// EVENTO DE CLIQUE
// ==========================================

botao.addEventListener("click", mostrarMensagem);
