document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;


    loginForm.addEventListener("submit", async (e) =>{
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const senha = document.getElementById("loginPassword").value;
        const botao = loginForm.querySelector("button[type='submit']");

        botao.disabled=true;
        botao.textContent= "Entrando...";

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

                alert(
                    "Login realizado!"
                );

                window.top.document.getElementById("modalLogin").style.display = "none";
                window.top.location.href = "conhecalogado.html";

            } else{
                alert(
                dados.mensagem || "Email ou senha inválidos" 
            );
        } 

        } catch (erro) { 
            console.error(erro); 
            alert( 
                "Não foi possível conectar ao servidor." 
            );

        } finally {
                botao.disabled = false;
                botao.textContent = "Entrar";
            }
        
    });
});