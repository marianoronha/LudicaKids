

 document.addEventListener("DOMContentLoaded", () => {

   fetch("./menu.html")
//    Busca o arquivo menu.html para inserir o menu em todas as páginas sem precisar copiar o HTML.
        .then(res => res.text())
        .then(html => {

            const div = document.createElement("div");
            div.innerHTML = html;

            document.body.prepend(div);
// Cria uma <div>, coloca dentro dela o conteúdo do menu.html e adiciona esse menu no início da página.


            //aqui é para bloquear o acesso aos botoes 

          const menuLateral = document.getElementById("menuLateral");
          
          if(menuLateral){
            menuLateral.querySelectorAll('a[href="#"]').forEach(link => {
                link.addEventListener('click', function(e){
                    e.preventDefault();                
                    fecharMenu();
                    mostrarToast('⚠️ Faça login ou cadastre-se para ter acesso as funcionalidades do site!', 'aviso')
                });
                // Mostra um aviso informando que é necessário fazer login ou cadastro.
            });

        }

    });
});
/* ABRIR MENU */
window.abrirMenu = function () {
    document.getElementById("menuLateral")?.classList.add("ativo");
};

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

    // Remove a classe ativo, escondendo o menu.
}

function fecharMenu() {
    let menu = document.getElementById("menuLateral");

    menu.classList.remove("ativo");
}

function toggleJogos() {
    let lista = document.getElementById("listaJogos");

    lista.classList.toggle("mostrar");
}

// Adiciona ou remove a classe ativo, mostrando ou escondendo a lista de jogos.



// document.addEventListener("DOMContentLoaded", () => {

//    fetch("./menu.html")
//         .then(res => res.text())
//         .then(html => {

//             const div = document.createElement("div");
//             div.innerHTML = html;

//             document.body.prepend(div);

//         });

// });

// /* ABRIR MENU */
// window.abrirMenu = function () {
//     document.getElementById("menuLateral")?.classList.add("ativo");
// };

// /* FECHAR MENU */
// window.fecharMenu = function () {
//     document.getElementById("menuLateral")?.classList.remove("ativo");
// };

// /* TOGGLE JOGOS */
// window.toggleJogos = function () {
//     document.getElementById("listaJogos")?.classList.toggle("ativo");
// };


// function toggleMenu() {
//     let menu = document.getElementById("menuLateral");

//     menu.classList.toggle("ativo");
// }

// function fecharMenu() {
//     let menu = document.getElementById("menuLateral");

//     menu.classList.remove("ativo");
// }

// function toggleJogos() {
//     let lista = document.getElementById("listaJogos");

//     lista.classList.toggle("mostrar");
// }