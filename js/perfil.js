/* js/perfil.js */

function abrirPopup() {
    document.getElementById("popupFotos").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popupFotos").style.display = "none";
}

function trocarFoto(novaFoto) {
    document.getElementById("fotoPrincipal").src = novaFoto;
    fecharPopup();
}
//  pop up escolher foto

function abrirPopup() {
    document.getElementById("popupFotos").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popupFotos").style.display = "none";
}

function trocarFoto(novaFoto) {
    document.getElementById("fotoPrincipal").src = novaFoto;
    fecharPopup();
}


// pop up login responsavel

function abrirPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "block";
}

function fecharPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "none";
}



// /* js/perfil.js */

// function abrirPopup() {
//     document.getElementById("popupFotos").style.display = "block";
// }

// function fecharPopup() {
//     document.getElementById("popupFotos").style.display = "none";
// }

// function trocarFoto(novaFoto) {
//     document.getElementById("fotoPrincipal").src = novaFoto;
//     fecharPopup();
// }
// //  pop up escolher foto

// function abrirPopup() {
//     document.getElementById("popupFotos").style.display = "block";
// }

// function fecharPopup() {
//     document.getElementById("popupFotos").style.display = "none";
// }

// function trocarFoto(novaFoto) {
//     document.getElementById("fotoPrincipal").src = novaFoto;
//     fecharPopup();
// }


// // pop up login responsavel

// function abrirPopupResponsavel() {
//     document.getElementById("popupResponsavel").style.display = "block";
// }

// function fecharPopupResponsavel() {
//     document.getElementById("popupResponsavel").style.display = "none";
// }



document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if (!responsavel) {
        console.log("Responsável não encontrado");
        return;
    }

    // Nome do responsável
    const campoResponsavel =
        document.getElementById("nomeResponsavel");

    if (campoResponsavel) {
        campoResponsavel.value =
            responsavel.nomeCompleto;
    }

    // Nome da criança
    const campoCrianca =
        document.getElementById("nomeCrianca");

    if (
        campoCrianca &&
        responsavel.criancas &&
        responsavel.criancas.length > 0
    ) {
        campoCrianca.value =
            responsavel.criancas[0].nomeCompleto;
    }

});