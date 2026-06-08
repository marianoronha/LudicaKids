
const btnConheca = document.getElementById('btnConheca');

if (btnConheca){
btnConheca.addEventListener('click',function(e){
        e.preventDefault();
        mostrarToast('⚠️ Faça login ou cadastre-se para continuar!','aviso');
    });
}