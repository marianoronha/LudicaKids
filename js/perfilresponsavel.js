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

        const card = document.createElement("div");
        card.className = "crianca-card";
        card.innerHTML = `
           <div class= "crianca-info">
           <span class= "crianca-nome">${crianca.nomeCompleto}</span>
           <span class= "crianca-usuario">@${crianca.nomeUsuario || ''}</span>
           </div>
          `; 
        listaCriancas.appendChild(card);
    });

});