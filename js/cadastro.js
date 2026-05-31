//aqui executa o código dps que a pagina carrega
document.addEventListener("DOMContentLoaded", () => {
    //busca o responsavel pelo id e para se caso não encontrar
 const formCadastro = document.getElementById("cadastroForm");

 if (!formCadastro)
    return;
//pega o envio do formulario
//e impede o carregamento do site
formCadastro.addEventListener("submit", async(evento)=> {
    evento.preventDefault();

    //dados do responsavel no cadastro do back
const payload = {
    nomeCompleto: document.getElementById("nomeCompleto").value.trim(),
    cpf: document.getElementById("cpf").value.trim(), 
    rg: document.getElementById("rg").value.trim(), 
    email: document.getElementById("email").value.trim(),
    celular: document.getElementById("celular").value.trim(),
    senhaResponsavel: document.getElementById("senha").value.trim(),
    criancas: []
};
//aqui o botão não funciona durante o envio do formulario para o banco e manda um resposta para o usuario aguardar
    const botaoCadastrar = formCadastro.querySelector("button[type='submit']");
    botaoCadastrar.disabled = true;
    botaoCadastrar.textContent = "Cadastrando..";

//conexão com a api
    try{
        const resposta = await fetch(`${API_URL}/responsaveis`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload),
        });

//caso dê certo
if (resposta.ok){
    mostrarToast("Cadastro concluído com sucesso");
    formCadastro.reset();
    setTimeout(() => (window.location.href = "./login.html"), 2000);
}else {

//caso dê errado
    const erroServidor = await resposta.json().catch(() => null);
    mostrarToast(
        "Erro: " + (erroServidor?.mensagem || "tente novamente"),
        "erro"
    );
  }
  //aqui é um erro mais geral de falha de comunicação com a api 
} catch (erroConexao){
    mostrarToast("Falha de conexão", "erro");
    console.error(erroConexao);

    //ativa o botão de cadastro de novo
} finally {
    botaoCadastrar.disabled = false;
    botaoCadastrar.textContent = "Cadastrar";
   }
});
}); 
    
