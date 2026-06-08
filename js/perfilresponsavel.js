document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if (!responsavel) {
        console.log("Responsável não encontrado");
        return;
    }

    // Nome do responsável
    document.getElementById("nomeResponsavel").textContent =
        responsavel.nomeCompleto;

    // Crianças
    const listaCriancas =
        document.getElementById("listaCriancas");

    if (
        !responsavel.criancas ||
        responsavel.criancas.length === 0
    ) {
        listaCriancas.innerHTML =
            "<p>Nenhuma criança cadastrada.</p>";
        return;
    }

    responsavel.criancas.forEach(crianca => {

        const divNome = document.createElement("div");
        divNome.className = "dados-box";
        divNome.innerHTML = `
           <p>Criança: <span>${crianca.nomeCompleto}</span></p>`;
            listaCriancas.appendChild(divNome);

        const divUsuario = document.createElement("div");
        divUsuario.className = "dados-box";
        divUsuario.innerHTML = `
           <p>Usuário: <span>${crianca.nomeUsuario || ''}</span></p>`;
            listaCriancas.appendChild(divUsuario);
    });

});