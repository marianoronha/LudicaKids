document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );
    const token = localStorage.getItem("token");
    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));
    
    if (!responsavel || !token) {
        alert("Responsável não encontrado.");

        window.location.href = "index.html";
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



       if (crianca) {

    document.getElementById("nomeCrianca").value =
        crianca.nomeCompleto;

    document.getElementById("cpfCrianca").value =
        crianca.cpf;

    document.getElementById("usuarioCrianca").value =
        crianca.nomeUsuario || '';

    document.getElementById("dataNascimento").value =
        crianca.dataNascimento
        ? crianca.dataNascimento.split("T")[0]
        : '';
     }
    });

//aqui é para salvar a as informações da criança no banco
 

// agora é salvar o email do responsavel nmo banco
async function salvarAlteracoes() {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");

    if (!responsavel || !token)
        return;
    responsavel.email = document.getElementById("emailResponsavel").value;
    const novaSenha = document.getElementById("senhaResponsavel").value;

    await salvarnoBanco(responsavel, token, novaSenha);
}


async function salvarCrianca() {
    const responsavel = JSON.parse(localStorage.getItem("responsavel"));
    const token = localStorage.getItem("token");
    const crianca = JSON.parse(localStorage.getItem("criancaSelecionada"));

    if (!responsavel || !token ||!crianca)
        return;
   
    const index = responsavel.criancas.findIndex(c => c.cpf === crianca.cpf);
    if (index !== -1) {
        responsavel.criancas[index].nomeCompleto = document.getElementById("nomeCrianca").value;
        responsavel.criancas[index].nomeUsuario = document.getElementById("usuarioCrianca").value; 

        localStorage.setItem("criancaSelecionada", JSON.stringify(responsavel.criancas[index]));
    }
    await salvarnoBanco(responsavel, token);
}


//aqui vai chamar o backend para finalizar a alteração
async function salvarnoBanco(responsavel, token, novaSenha = null) {
   try {
    const body = {
        nomeCompleto: responsavel.nomeCompleto,
        email: responsavel.email,
        celular: responsavel.celular,
        criancas: responsavel.criancas
    };
    if(novaSenha){
        body.senhaResponsavel = novaSenha;
    }

    const resposta = await fetch(`${API_URL}/responsaveis/${responsavel._id}`,{
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        },
            body: JSON.stringify(body)
        });

        const dados = await resposta.json();

        if (resposta.ok){
    ///caso de certo
        localStorage.setItem("responsavel", JSON.stringify(dados));
        alert("Salvo com sucesso!");
    }else {

    //caso dê errado
        alert(dados.mensagem || "Erro ao salvar");
    }

    //aqui é um erro mais geral de falha de comunicação com a api 
    } catch (erro){
        console.error(erro);
        alert("Não foi possével conectar ao servidor");
        }
    }








