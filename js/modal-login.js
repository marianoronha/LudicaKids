   // criar modal

const modal = document.createElement("div");

modal.id = "modalLogin";

modal.innerHTML = `

<div id="modalFundo" class="modal-fundo"></div>

<div class="modal-conteudo">

    <span class="fechar-modal">&times;</span>

    <iframe id="iframeModal"></iframe>

</div>

`;

document.body.appendChild(modal);


// fechar o modal

const fundoModal = document.getElementById("modalFundo");

if(fundoModal){

    fundoModal.addEventListener("click", function(){

        document
        .getElementById("modalLogin")
        .style.display = "none";

    });

}
// ABRIR MODAL


function abrirModal(pagina){

    const modal = document.getElementById("modalLogin");

    const iframe = document.getElementById("iframeModal");

    iframe.src = "";

    setTimeout(() => {

        iframe.src = pagina;

    }, 10);

    modal.style.display = "flex";

}


// BOTÕES


document.addEventListener("click", function(e){

    // LOGIN / CADASTRO

    if(
        e.target.id === "abrirLoginCadastro"
        ||
        e.target.id === "abrirLoginCadastro2"
    ){

        e.preventDefault();

        abrirModal("login.html");

    }


    // FECHAR NO X

    if(e.target.classList.contains("fechar-modal")){

        document
        .getElementById("modalLogin")
        .style.display = "none";

    }

});
   
   
   
   // // parte que cria o meu modal

// const modal = document.createElement("div");

// modal.innerHTML = `

// <div id="modalLogin" class="modal-login">

//     <div id="modalFundo" style="
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 1;
//         cursor: pointer;
//     "></div>

//     <div class="modal-conteudo" style="position: relative; z-index: 2;">

//         <span class="fechar-modal">&times;</span>

//         <iframe id="iframeModal"></iframe>

//     </div>

// </div>

// `;

// document.body.appendChild(modal);
// // opção de fechar o meu modal

// document.getElementById("modalFundo").addEventListener("click", function(){

//     document.getElementById("modalLogin").style.display = "none";

// });


// // para abrir o modal

// function abrirModal(pagina){

//     const modal = document.getElementById("modalLogin");
//     const iframe = document.getElementById("iframeModal");

//     iframe.src = "";

//     setTimeout(() => {
//         iframe.src = pagina;
//     }, 10);

//     modal.style.display = "flex";

// }


// // os clicks do botão cadastro e login

// document.addEventListener("click", function(e){

//     /* CADASTRAR */

//     if(e.target.id === "abrirLoginCadastro"){

//         e.preventDefault();
//         e.stopPropagation();
//         e.stopImmediatePropagation();

//         abrirModal("login.html");

//         return false;

//     }


//     /* LOGIN */

//     if(e.target.id === "abrirLoginCadastro2"){

//         e.preventDefault();
//         e.stopPropagation();
//         e.stopImmediatePropagation();

//         abrirModal("login.html");

//         return false;

//     }



// // quando apertar o x o pop up fecha
//     if(e.target.classList.contains("fechar-modal")){

//         document
//         .getElementById("modalLogin")
//         .style.display = "none";

//     }

// });