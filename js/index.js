
const btnConheca = document.getElementById('btnConheca');

if (btnConheca){
btnConheca.addEventListener('click',function(e){
        e.preventDefault();
        mostrarToast('⚠️ Faça login ou cadastre-se para continuar!','aviso');
    });
}

// Quando o usuário clica no botão, o código impede a navegação normal do link e exibe um aviso pedindo para fazer login ou cadastro.