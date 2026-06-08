// menujogos.js

document.addEventListener("DOMContentLoaded", () => {

    fetch("./menujogos.html")
        .then(res => res.text())
        .then(html => {

            const div = document.createElement("div");
            div.innerHTML = html;

            document.body.prepend(div);

              const btnSair = document.querySelector(".btn-sair");
            if (btnSair) {
                btnSair.addEventListener("click", function (e) {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    localStorage.removeItem("responsavel");
                    localStorage.removeItem("criancaSelecionada")
                    window.location.href = "index.html";
        });
    }
});

});
/* TOGGLE MENU */

window.abrirMenu = function () {
    document.getElementById("menuLateral")?.classList.add("ativo");
}

/* FECHAR MENU */

window.fecharMenu = function () {
    document.getElementById("menuLateral")?.classList.remove("ativo");
};

/* TOGGLE JOGOS */
window.toggleJogos = function () {
    document.getElementById("listaJogos")?.classList.toggle("ativo");
};


function toggleMenu() {
    let menu = document.getElementById("menuLateral");

    menu.classList.toggle("ativo");
}

function fecharMenu() {
    let menu = document.getElementById("menuLateral");

    menu.classList.remove("ativo");
}

function toggleJogos() {
    let lista = document.getElementById("listaJogos");

    lista.classList.toggle("mostrar");
}


// // menujogos.js

// document.addEventListener("DOMContentLoaded", () => {

//     fetch("./menujogos.html")
//         .then(res => res.text())
//         .then(html => {

//             const div = document.createElement("div");
//             div.innerHTML = html;

//             document.body.prepend(div);

//         });

// });

// /* TOGGLE MENU */

// function toggleMenu() {
//     let menu = document.getElementById("menuLateral");

//     menu.classList.toggle("ativo");
// }

// /* FECHAR MENU */

// function fecharMenu() {
//     let menu = document.getElementById("menuLateral");

//     menu.classList.remove("ativo");
// }

// /* TOGGLE JOGOS */

// function toggleJogos() {
//     let lista = document.getElementById("listaJogos");

//     lista.classList.toggle("ativo");
// }