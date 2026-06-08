document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");
    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));

    if (!responsavel || !token) {
        alert("Responsável não encontrado.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("nomeResponsavel").value = responsavel.nomeCompleto;
    document.getElementById("cpfResponsavel").value = responsavel.cpf;
    document.getElementById("rgResponsavel").value = responsavel.rg;
    document.getElementById("emailResponsavel").value = responsavel.email;

    if (crianca) {
        document.getElementById("nomeCrianca").value = crianca.nomeCompleto;
        document.getElementById("cpfCrianca").value = crianca.cpf;
        document.getElementById("usuarioCrianca").value = crianca.nomeUsuario || '';
        document.getElementById("dataNascimento").value = crianca.dataNascimento
            ? crianca.dataNascimento.split("T")[0]
            : '';
    }
});


//  SALVAR ALTERAÇÕES 

async function salvarTudo() {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");
    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));

    if (!responsavel || !token) return;

    responsavel.email = document.getElementById("emailResponsavel").value;

    if (crianca) {
        const index = responsavel.criancas.findIndex(c => c.cpf === crianca.cpf);
        if (index !== -1) {
            responsavel.criancas[index].nomeUsuario = document.getElementById("usuarioCrianca").value;
            localStorage.setItem("criancaSelecionada", JSON.stringify(responsavel.criancas[index]));
        }
    }

    const novaSenha = document.getElementById("senhaResponsavel").value;
    await salvarNoBanco(responsavel, token, novaSenha);
}


//  ADICIONAR NOVA CRIANÇA E SALVA NO BANCO 

let contadorCriancas = 0;

function adicionarCrianca() {
    contadorCriancas++;

    const container = document.getElementById("criancas-container");
    const novaCrianca = document.createElement("div");
    novaCrianca.classList.add("box-crianca");
    novaCrianca.dataset.id = contadorCriancas;

    novaCrianca.innerHTML = `
        <h3>Nova Criança ${contadorCriancas}</h3>

        <div class="input-box">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Nome completo da criança" required>
        </div>

        <div class="input-box">
            <i class="fa-solid fa-id-card"></i>
            <input type="text" placeholder="CPF da criança" required>
        </div>

        <div class="input-box">
            <i class="fa-solid fa-user-pen"></i>
            <input type="text" placeholder="Nome de usuário" required>
        </div>

        <div class="input-box">
            <i class="fa-solid fa-calendar"></i>
            <input type="date" required>
        </div>

        <div class="grupo-botoes-crianca">
            <button type="button" class="btn-salvar" onclick="salvarNovaCrianca(this)">
                <i class="fa-solid fa-floppy-disk"></i> Salvar Criança
            </button>
            <button type="button" class="btn-excluir" onclick="removerCrianca(this)">
                <i class="fa-solid fa-trash"></i> Remover
            </button>
        </div>
    `;

    container.appendChild(novaCrianca);
}

function removerCrianca(botao) {
    botao.closest(".box-crianca").remove();
}

// salva apenas a nova criança adicionada no formulário
async function salvarNovaCrianca(botao) {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");

    if (!responsavel || !token) return;

    const bloco = botao.closest(".box-crianca");
    const inputs = bloco.querySelectorAll("input");

    const nomeCompleto = inputs[0]?.value.trim();
    const cpf = inputs[1]?.value.trim();
    const nomeUsuario = inputs[2]?.value.trim();
    const dataNascimento = inputs[3]?.value;

    if (!nomeCompleto || !cpf || !nomeUsuario || !dataNascimento) {
        alert("Preencha todos os campos da criança.");
        return;
    }

    // adiciona a nova criança no array do responsável
    responsavel.criancas.push({ nomeCompleto, cpf, nomeUsuario, dataNascimento });

    botao.disabled = true;
    botao.textContent = "Salvando...";

    const salvo = await salvarNoBanco(responsavel, token);

    if (salvo) {
        bloco.remove(); // remove o formulário da tela após salvar
    } else {
        botao.disabled = false;
        botao.textContent = "Salvar Criança";
    }
}



async function excluirCrianca() {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");
    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));

    if (!responsavel || !token || !crianca) return;

    const confirmado = confirm(`Tem certeza que deseja excluir ${crianca.nomeCompleto}?`);
    if (!confirmado) return;

    const index = responsavel.criancas.findIndex(c => c.cpf === crianca.cpf);
    if (index !== -1) {
        responsavel.criancas.splice(index, 1);
    }

    const salvo = await salvarNoBanco(responsavel, token);
    if (salvo) {
        localStorage.removeItem("criancaSelecionada");
        window.location.href = "perfilresponsavel.html";
    }
}


//   SALVAR BANCO 

async function salvarNoBanco(responsavel, token, novaSenha = null) {
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

        if (resposta.ok) {
            localStorage.setItem("responsavel", JSON.stringify(dados));
            alert("Criança adicionada com sucesso!");
            return true;
        } else {
            alert(dados.mensagem || "Erro ao salvar");
            return false;
        }

    } catch (erro) {
        console.error(erro);
        alert("Não foi possível conectar ao servidor.");
        return false;
    }
}