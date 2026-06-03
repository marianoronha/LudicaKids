// menujogos.js

document.addEventListener("DOMContentLoaded", () => {

    fetch("./menujogos.html")
        .then(res => res.text())
        .then(html => {

            const div = document.createElement("div");
            div.innerHTML = html;

            document.body.prepend(div);

        });

});

/* TOGGLE MENU */

function toggleMenu() {
    let menu = document.getElementById("menuLateral");

    menu.classList.toggle("ativo");
}

/* FECHAR MENU */

function fecharMenu() {
    let menu = document.getElementById("menuLateral");

    menu.classList.remove("ativo");
}

/* TOGGLE JOGOS */

function toggleJogos() {
    let lista = document.getElementById("listaJogos");

    lista.classList.toggle("ativo");
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