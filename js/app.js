// animação login e cadastro

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var container = document.querySelector(".container");

if (btnSignin) {
    btnSignin.addEventListener("click", function () {
        container.classList.add("sign-in-js");
        container.classList.remove("sign-up-js");
    });
}

if (btnSignup) {
    btnSignup.addEventListener("click", function () {
        container.classList.add("sign-up-js");
        container.classList.remove("sign-in-js");
    });
}

// login

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail")?.value || "";

        alert("Login realizado!\n\nEmail: " + email);

    });
}


// cadastro

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("signupName")?.value || "";
        const email = document.getElementById("signupEmail")?.value || "";

        alert("Conta criada com sucesso!\n\nNome: " + name + "\nEmail: " + email);

    });
}


// adicionar criança

let contadorCriancas = 1;

function adicionarCrianca() {

    const container = document.getElementById("criancas-container");

    if (!container) return;

    const novaCrianca = document.createElement("div");

    novaCrianca.classList.add("box-crianca");

    novaCrianca.innerHTML = `

<h3>Criança ${contadorCriancas}</h3>

<label class="label-input">
<i class="fas fa-child icon-modify"></i>
<input type="text" placeholder="Nome da criança" required>
</label>

<label class="label-input">
<i class="fas fa-id-card icon-modify"></i>
<input type="text" placeholder="CPF da criança" required>
</label>

<label class="label-input">
<i class="fas fa-id-badge icon-modify"></i>
<input type="text" placeholder="Nome de usuário" required>
</label>

<label class="label-input">
<i class="fas fa-calendar icon-modify"></i>
<input type="date" required>
</label>

<div class="botoes-crianca">

<button type="button" onclick="removerCrianca(this)">
❌
</button>

</div>

`;

    container.appendChild(novaCrianca);

    contadorCriancas++;

}

// remover criança

function removerCrianca(botao) {

    const box = botao.closest(".box-crianca");

    if (box) {
        box.remove();
    }

}


/* MENU LATERAL */

function abrirMenuLudica() {
    const menu = document.getElementById("menuLudica");

    if (!menu) return;

    menu.classList.toggle("ativo");
}


/* SUBMENU JOGOS */

const botao = document.querySelector(".toggle-btn");
const lista = document.querySelector(".lista-jogos");

if (botao && lista) {
    botao.addEventListener("click", () => {
        const aberto = lista.style.display === "block";

        lista.style.display = aberto ? "none" : "block";

        botao.textContent = aberto
            ? "▶ Cinco Sentidos Mágicos"
            : "▼ Cinco Sentidos Mágicos";
    });
}



// pop up só aparece quando aperta na senha da criança

const camposSenha = document.querySelectorAll('input[type="password"]');
const avisoSenha = document.querySelector(".aviso-senha");

if (camposSenha.length > 0 && avisoSenha) {

    const senhaCrianca = camposSenha[1];

    if (senhaCrianca) {

        // mostrar aviso ao clicar na senha da criança
        senhaCrianca.addEventListener("focus", function () {
            avisoSenha.style.display = "block";
        });

        // esconder aviso ao sair do campo
        senhaCrianca.addEventListener("blur", function () {
            avisoSenha.style.display = "none";
        });

    }
}