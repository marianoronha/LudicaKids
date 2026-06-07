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

  const crianca = JSON.parse(
    localStorage.getItem("criancaSelecionada")
);

const responsavel = JSON.parse(
    localStorage.getItem("responsavel")
);

document.getElementById("nomeCrianca").textContent =
    crianca.nomeCompleto;

document.getElementById("nomeResponsavel").textContent =
    responsavel.nomeCompleto;

});