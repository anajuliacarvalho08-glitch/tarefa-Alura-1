function curtir(botao, tipo) {
    const avaliacao = botao.parentElement;
    const botoes = avaliacao.querySelectorAll(".botao-reacao");

    // Verifica se este botão já está selecionado
    if (botao.classList.contains("selecionado")) {
        botao.classList.remove("selecionado");
        return;
    }

    // Remove a seleção do outro botão
    botoes.forEach(function(outroBotao) {
        outroBotao.classList.remove("selecionado");
    });

    // Seleciona o botão clicado
    botao.classList.add("selecionado");
}
