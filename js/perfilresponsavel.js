function abrirPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "block";
}

function fecharPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "none";
}
// function abrirPopupResponsavel() {
//     document.getElementById("popupResponsavel").style.display = "block";
// }

// function fecharPopupResponsavel() {
//     document.getElementById("popupResponsavel").style.display = "none";
// }


// meninas aqui é pra aparecer as info dos dados que estão no back
function abrirPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "block";
}

function fecharPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if (!responsavel) {
        console.log("Responsável não encontrado no localStorage");
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

        const div = document.createElement("div");

        div.className = "dados-box linha-status";

        div.innerHTML = `
            <p>CRIANÇA: ${crianca.nomeCompleto}</p>

            <div class="status ativo">
                <span class="bolinha"></span>
            </div>
        `;

        listaCriancas.appendChild(div);

    });

});