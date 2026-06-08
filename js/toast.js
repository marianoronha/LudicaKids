//aqui cria o popup de alerta caso as informações do cadastro funcione sim ou não

function mostrarToast(mensagem,tipo = "sucesso"){
    const toast = document.createElement("div");

    toast.textContent = mensagem;
    toast.classList.add("toast",tipo);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);


}

// meninas aqui eu tive q copia e colocar o anterior e colocar pra que aparecça pq o iframe não deixava eu ver

function mostrarToastPai(mensagem, tipo = "sucesso") {
    const toast = window.top.document.createElement("div");

    toast.textContent = mensagem;
    toast.classList.add("toast", tipo);

    window.top.document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

function mostrarConfirmacao(mensagem) {
    return new Promise((resolve) => {

        const overlay = document.createElement("div");
        overlay.classList.add("confirm-overlay");

        overlay.innerHTML = `
            <div class="confirm-box">
                <p>${mensagem}</p>

                <div class="confirm-botoes">
                    <button class="btn-cancelar">Cancelar</button>
                    <button class="btn-confirmar">Excluir</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector(".btn-cancelar").onclick = () => {
            overlay.remove();
            resolve(false);
        };

        overlay.querySelector(".btn-confirmar").onclick = () => {
            overlay.remove();
            resolve(true);
        };
    });
}