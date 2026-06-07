//aqui cria o popup de alerta caso as informações do cadastro funcione sim ou não

function mostrarToast(mensagem,tipo = "sucesso"){
    const toast = document.createElement("div");

    toast.textContent = mensagem;
    toast.classList.add("toast",tipo);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
