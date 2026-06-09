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

//  disply block aparece o pop up e o none fecha
function abrirPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "block";
}

function fecharPopupResponsavel() {
    document.getElementById("popupResponsavel").style.display = "none";
}



document.addEventListener("DOMContentLoaded", () => {
// o código é executado só quando o HTML estiver todo carregado

// procura localStorage os dados da criança selecionada e do responsável que foram salvos antes
    const crianca = JSON.parse(
    localStorage.getItem("criancaSelecionada"));

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if(!crianca || !responsavel) return;
    // se não existir uma criança ou um responsável salvos, o código é interrompido


    document.getElementById("nomeCrianca").textContent = crianca.nomeCompleto;

    document.getElementById("nomeUsuarioCrianca").textContent = crianca.nomeUsuario || '';

    document.getElementById("nomeResponsavel").textContent = responsavel.nomeCompleto;

    // coloca na página o nome da criança, o nome de usuário e o nome do responsável
        
    const fotoSalva = localStorage.getItem("fotoPerfil_"+ crianca._id);
    if(fotoSalva){
        document.getElementById("fotoPrincipal").src = fotoSalva;
    }


    const btnEntrar = document.getElementById("btnEntrarResponsavel");

    btnEntrar.addEventListener("click", async () => {
        const email = document.getElementById("emailResponsavel").value.trim();
        const senha = document.getElementById("senhaResponsavel").value;
        const botao = btnEntrar;

        botao.disabled = true;
        botao.textContent = "Entrando no perfil Responsável...";

        try {
            const resposta = await fetch(`${API_URL}/responsaveis/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senhaResponsavel: senha
                })
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                localStorage.setItem("token", dados.token);
                localStorage.setItem("responsavel", JSON.stringify(dados.responsavel));

                mostrarToast("Login realizado!" , "sucesso");
                window.location.href = "perfilresponsavel.html";

            } else {
                mostrarToast(dados.mensagem || "Email ou senha inválidos" , "erro");
            }
            // Mostra uma mensagem caso o e-mail ou a senha estejam incorretos.

        } catch (erro) {
            console.error(erro);
            alert("Não foi possível conectar ao servidor." , "erro");

        } finally {
            botao.disabled = false;
            botao.textContent = "ENTRAR";
        }
    });

});




    