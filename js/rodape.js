document.addEventListener("DOMContentLoaded", () => {

    fetch("./rodape.html")
        .then(res => res.text())
        .then(html => {

            const div = document.createElement("div");
            div.innerHTML = html;

            // // Adiciona o rodapé no final da página
            document.body.appendChild(div);

        });

});


// document.addEventListener("DOMContentLoaded", () => {

//     fetch("./rodape.html")
//         .then(res => res.text())
//         .then(html => {

//             const div = document.createElement("div");
//             div.innerHTML = html;

//             document.body.appendChild(div);

//         });

// });