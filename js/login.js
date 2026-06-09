document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;


    loginForm.addEventListener("submit", async (e) =>{
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const senha = document.getElementById("loginPassword").value;
        const botao = loginForm.querySelector("button[type='submit']");

        // pega e-mail e a senha preenchidos pelo usuário.

        botao.disabled=true;
        botao.textContent= "Entrando...";

        // Bloqueia novos cliques e mostra a mensagem "Entrando..." enquanto a verificação é realizada.


        try{
            const resposta = await fetch(
                `${API_URL}/responsaveis/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    
                    },
                    body: JSON.stringify ({
                        email,
                        senhaResponsavel: senha
                    })
                }
            );

            const dados = await resposta.json();
            if (resposta.ok){

                localStorage.setItem(
                "token",
                dados.token
                );

                localStorage.setItem(
                    "responsavel",
                    JSON.stringify(
                        dados.responsavel
                    )
                );

                // Salva o token e os dados do responsável no navegador para manter 
                // o usuário logado e permitir o acesso às próximas páginas.
                mostrarToastPai("Login realizado!", "sucesso");

                setTimeout(() => {
                    window.top.document.getElementById("modalLogin").style.display = "none";
                    window.top.location.href = "conhecalogado.html";
                }, 2000);


            } else{
                mostrarToast(
                dados.mensagem || "Email ou senha inválidos" , "erro"
            );
        } 

        } catch (erro) { 
            console.error(erro); 
            mostrarToast( 
                "Não foi possível conectar ao servidor." , "erro"
            );

        // Executa sempre, independentemente do resultado

        // Reabilita o botão de login

        } finally {
                botao.disabled = false;
                botao.textContent = "Entrar";
            }
        
    });
});