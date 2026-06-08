
document.addEventListener("DOMContentLoaded", () => {

    //aqui recupera os dados e o token do localstorage
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");

    //se não for encotrado o usuario volta para a pagina inicial
    if (!responsavel || !token) {
        mostrarToast("Responsável não encontrado.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("nomeResponsavel").value = responsavel.nomeCompleto;
    document.getElementById("cpfResponsavel").value = responsavel.cpf;
    document.getElementById("rgResponsavel").value = responsavel.rg;
    document.getElementById("emailResponsavel").value = responsavel.email;

    listarCriancas(responsavel.criancas);
});
//lista em blocos cada crianca que o responsavel criou ou vai criar
function listarCriancas(criancas) {
    const container = document.getElementById("criancas-existentes");
    container.innerHTML = "";

    if(!criancas || criancas.length === 0){
        container.innerHTML = "<p>Nenhuma criança cadastrada</p>";
        return;
    }
//essa parte enorme é pra ver os dados principais do usuario e se ele é bloqueado ou editado e tudo separado em container
    criancas.forEach((crianca, index) => {
        const bloco = document.createElement("div");
        bloco.className = "box-crianca";
        bloco.innerHTML = `<h3>Criança ${index + 1}</h3>
        <div class="input-box bloqueado">
        <i class="fa-solid fa-user"></i>
        <input type="text" value="${crianca.nomeCompleto}" disabled>
        </div>

 
        <div class="input-box bloqueado">
                <i class="fa-solid fa-id-card"></i>
                <input type="text" value="${crianca.cpf}" disabled>
            </div>

        <div class="input-box">
            <i class="fa-solid fa-id-card"></i>
            <input type="text" value="${crianca.nomeUsuario || ''}"

            data-index="${index}" class="input-usuario"
            placeholder="Nome de usuário">
            </div>

            <div class="input-box bloqueado">
            <i class= "fa-solid fa-calendar"></i>
            <input type = "text" value="${crianca.dataNascimento ? crianca.dataNascimento.split('T')[0]: ''}" disabled>
            </div>

            <div class="grupo-botoes-crianca">
            <button type="button" class="btn-excluir" onclick="excluirCrianca(${index})">
                <i class="fa-solid fa-trash"></i> Excluir Criança 
            </button>
        </div>
              `;
              container.appendChild(bloco);   
    });
}

//aqui salva as informações gerais tanto do responsavael quanto da crianca
    async function salvarTudo() {
        const responsavel = JSON.parse(localStorage.getItem("responsavel"));
        const token = localStorage.getItem("token");

        if(!responsavel || !token)
            return;

        responsavel.email = document.getElementById("emailResponsavel").value;

        const inputsUsuario = document.querySelectorAll(".input-usuario");
        inputsUsuario.forEach(input => {
            const index = parseInt(input.dataset.index);
            if(!isNaN(index)){
                responsavel.criancas[index].nomeUsuario = input.value.trim();
            }
        });

        const novaSenha = document.getElementById("senhaResponsavel").value;
        await salvarNoBanco(responsavel, token, novaSenha, "Alterações salvas com sucesso!");
    }
        //aqui serve para adicionar uma nova criança q nem no cadastro e possui todos os campos basicos para preencher
        let contadorCriancas = 0;
        function adicionarCriancas(){
            contadorCriancas++;

            const container = document.getElementById("criancas-container");
            const novaCrianca = document.createElement("div");
            novaCrianca.classList.add("box-crianca");

            novaCrianca.innerHTML = `
            <h3>Nova Criança ${contadorCriancas}</h3>

            <div class="input-box">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Nome completo da criança" required>
            </div>

            <div class="input-box">
            <i class="fa-solid fa-user-pen"></i>
            <input type="text" placeholder="CPF da criança" required>
            </div>

            <div class="input-box">
            <i class="fa-solid fa-user-pen"></i>
            <input type="text" placeholder="Nome de usuário" required>
            </div>

            <div class="input-box">
            <i class="fa-solid fa-user-pen"></i>
            <input type="date" required>
            </div>

            <div class="grupo-botoes-crianca">
            <button type="button" class="btn-salvar" onclick="salvarNovaCrianca(this)">
                <i class= "fa-solid fa-floppy-disk"></i> Salvar Criança
                </button>
                <button type="button" class="btn-excluir" onclick="this.closest('.box-crianca').remove()">
                <i class= "fa-solid fa-trash"></i> Remover 
                </button>
                </div>
         `;
            container.appendChild(novaCrianca);

        }

//  aqui salva os dados dessa criança nova se ela for adicionada 

async function salvarNovaCrianca(botao) {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");
    
    if (!responsavel || !token) return;
    const bloco = botao.closest(".box-crianca");
    const inputs= bloco.querySelectorAll("input");

    const nomeCompleto = inputs[0]?.value.trim();
    const cpf = inputs[1]?.value.trim();
    const nomeUsuario = inputs[2]?.value.trim();
    const dataNascimento = inputs[3]?.value;
    
   if(!nomeCompleto || !cpf || !nomeUsuario || !dataNascimento){
    mostrarToast("Preencha todos os campos da criança", "erro");
        return;
   }
   responsavel.criancas.push({ nomeCompleto, cpf, nomeUsuario, dataNascimento});
    botao.disabled = true;
    botao.textContent = "Salvando...";

    const salvo = await salvarNoBanco(responsavel, token, null, "Criança adicionada com sucesso!");

    if(salvo){
        bloco.remove();

        const responsavelAtualizado = JSON.parse(localStorage.getItem("responsavel"));
         listarCriancas(responsavelAtualizado.criancas);
    }else{
        botao.disabled = false;
        botao.textContent = "Salvar Criança";
    }
}

//  aqui exclui, pede confirmação e salva no banco


async function excluirCrianca(index) {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");

    if (!responsavel || !token) return;

    const crianca = responsavel.criancas[index];
    const confirmado = await mostrarConfirmacao(
    `Tem certeza que deseja excluir ${crianca.nomeCompleto}?`);

    if (!confirmado) return;

        responsavel.criancas.splice(index, 1);

    const salvo = await salvarNoBanco(responsavel, token, null, "Criança excluída com sucesso!");
    if (salvo) {
        const responsavelAtualizado = JSON.parse(localStorage.getItem("responsavel"));
        listarCriancas(responsavelAtualizado.criancas);
    }
}


//   aqui todas as alterações feitas são salvas pelo banco e retornam pro site, fazendo essa atualização imediata

async function salvarNoBanco (responsavel, token, novaSenha = null, mensagemSucesso="Salvo com sucesso!") {
    try {
        const body = {
            nomeCompleto: responsavel.nomeCompleto,
            email: responsavel.email,
            celular: responsavel.celular,
            criancas: responsavel.criancas
        };

        if (novaSenha) {
            body.senhaResponsavel = novaSenha;
        }

        const resposta = await fetch(`${API_URL}/responsaveis/${responsavel._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        const dados = await resposta.json();
//caso de certo
        if (resposta.ok) {
            localStorage.setItem("responsavel", JSON.stringify(dados));
            mostrarToast(mensagemSucesso, "sucesso");
            return true;
        } else {
            mostrarToast(dados.mensagem || "Erro ao salvar");
            return false;
        }
//caso de errado
    } catch (erro) {
        console.error(erro);
        mostrarToast("Não foi possível conectar ao servidor.");
        return false;
    }
}