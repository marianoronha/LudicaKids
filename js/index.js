
const btnConheca = document.getElementById('btnConheca');
if (btnConheca){
btnConheca.addEventListener('click',function(e){
    const token = localStorage.getItem('token');

    if(!token){
        e.preventDefault();
        mostrarToast('⚠️ Faça login ou cadastre-se para continuar!','aviso');
    }
});
}