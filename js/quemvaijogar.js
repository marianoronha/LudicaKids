// meninas criei essa pagina pra quando a gente selecionar
// o perfil da criança

document.addEventListener("DOMContentLoaded", () => {

    const responsavel = JSON.parse(
        localStorage.getItem("responsavel")
    );

    if (!responsavel || !responsavel.criancas) {
        return;
    }

    const lista =
        document.getElementById("listaCriancas");

    responsavel.criancas.forEach((crianca, index) => {

        const card = document.createElement("div");

        card.classList.add("card-crianca");

        card.innerHTML = `
           <img src="${localStorage.getItem('fotoPerfil_' + crianca._id) || 'midias/girafasperfil/girafa' + ((index % 9) + 1) + '.png'}">
            <p>${crianca.nomeUsuario || crianca.nomeCompleto}</p>
        `;

        card.addEventListener("click", () => {

            localStorage.setItem(
                "criancaSelecionada",
                JSON.stringify(crianca)
            );

            window.location.href = "perfil.html";
        });

        lista.appendChild(card);

    });

});