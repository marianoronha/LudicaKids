document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if (!responsavel) {
        alert("Responsável não encontrado.");
        return;
    }

    document.getElementById("nomeResponsavel").value =
        responsavel.nomeCompleto;

    document.getElementById("cpfResponsavel").value =
        responsavel.cpf;

    document.getElementById("rgResponsavel").value =
        responsavel.rg;

    document.getElementById("emailResponsavel").value =
        responsavel.email;

    const container =
        document.getElementById("criancasContainer");

    responsavel.criancas.forEach(crianca => {

        const card =
            document.createElement("div");

        card.classList.add("card-crianca");

        card.innerHTML = `
<label>Nome Completo</label>
<div class="input-box">
    <input type="text"
           value="${crianca.nomeCompleto}"
           class="nomeCrianca">
</div>

<label>CPF</label>
<div class="input-box">
    <input type="text"
           value="${crianca.cpf}"
           class="cpfCrianca"
           disabled>
</div>

<label>Nome de Usuário</label>
<div class="input-box">
    <input type="text"
           value="${crianca.nomeUsuario}"
           class="usuarioCrianca">
</div>

<label>Data de Nascimento</label>
<div class="input-box">
    <input type="date"
           value="${crianca.dataNascimento.split("T")[0]}"
           class="dataNascimento">
</div>

<button class="btn-salvar">
    Salvar Alterações
</button>

<button class="btn-excluir">
    Excluir Criança
</button>
`;

        container.appendChild(card);

    });

});

const btnSalvar = card.querySelector(".btn-salvar");

btnSalvar.addEventListener("click", () => {

    crianca.nomeCompleto =
        card.querySelector(".nomeCrianca").value;

    crianca.nomeUsuario =
        card.querySelector(".usuarioCrianca").value;

    crianca.dataNascimento =
        card.querySelector(".dataNascimento").value;

    localStorage.setItem(
        "responsavel",
        JSON.stringify(responsavel)
    );

    alert("Informações alteradas com sucesso!");
});


const btnExcluir = card.querySelector(".btn-excluir");

const btnExcluir = card.querySelector(".btn-excluir");

btnExcluir.addEventListener("click", () => {

    const confirmar = confirm(
        "Deseja realmente excluir o perfil desta criança?"
    );

    if (!confirmar) return;

    const index = responsavel.criancas.findIndex(
        c => c.cpf === crianca.cpf
    );

    if (index !== -1) {

        responsavel.criancas.splice(index, 1);

        localStorage.setItem(
            "responsavel",
            JSON.stringify(responsavel)
        );

        card.remove();

        alert("Perfil da criança excluído com sucesso!");
    }
});