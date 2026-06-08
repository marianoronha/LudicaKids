/* js/perfil.js */

function abrirPopup() {
    document.getElementById("popupFotos").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popupFotos").style.display = "none";
}
//aqui salva a foto vinculada ao id da crianca sem precisar de um botão de salvar

function trocarFoto(novaFoto) {

    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));

    if(crianca){
        localStorage.setItem("fotoPerfil_" + crianca._id, novaFoto);
    }
    document.getElementById("fotoPrincipal").src = novaFoto;
    fecharPopup();
}


function abrirPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "block";
}

function fecharPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "none";
}



document.addEventListener("DOMContentLoaded", () => {

  const crianca = JSON.parse(
    localStorage.getItem("criancaSelecionada")
);

const responsavel = JSON.parse(
    localStorage.getItem("responsavel")
);

if(!crianca || !responsavel) return;


document.getElementById("nomeCrianca").textContent =
    crianca.nomeCompleto;

document.getElementById("nomeUsuarioCrianca").textContent =
    crianca.nomeUsuario || '';

document.getElementById("nomeResponsavel").textContent =
    responsavel.nomeCompleto;
    
const fotoSalva = localStorage.getItem("fotoPerfil_"+ crianca._id);
   if(fotoSalva){
    document.getElementById("fotoPrincipal").src = fotoSalva;
   }

});

 