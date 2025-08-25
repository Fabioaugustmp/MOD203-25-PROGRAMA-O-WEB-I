const titulo = document.getElementById("tituloPrincipal");
const botao = document.getElementById("meuBotao");
    botao.addEventListener("click", function () {
    titulo.textContent = "Olá, Mundo! A mágica aconteceu!";
    titulo.style.color = "#4950bc";
    botao.textContent = "Mensagem Alterada!";
    });