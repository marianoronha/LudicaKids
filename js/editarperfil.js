function salvarAlteracoes() {

    alert("Dados salvos com sucesso!");

}

function excluirCrianca(botao) {

    const confirmar = confirm(
        "Deseja realmente excluir esta criança?"
    );

    if(confirmar){

        botao.parentElement.remove();

    }

}