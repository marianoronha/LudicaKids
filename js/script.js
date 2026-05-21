//basicamente vou criar uma lista para fazer aqueles botoes do html funcionarem e passar as imagens
const configuracoes = {
    //usei só esse js para funcionar em todas as paginas 
    "emocoes": [
        "midias/telainicialIE.png",
        "midias/emocoes.png"
    ],
    "dragao": [
        "midias/telainicialRD.png",
        "midias/dragao.png"
    ],
    "sentidosmagicos": [
        "midias/telainicialCSM.png",
        "midias/toqueanimais.png",
        "midias/descubratoque.png",
        "midias/brinquedoteca.png",
        "midias/descubracheiro.png",
        "midias/melhorsabor.png"
    ]
    

};
let imagens = [];
let index = 0;

window.onload = function(){
    let nomePagina = document.body.getAttribute("data-pagina");
    imagens = configuracoes[nomePagina];
    if(imagens){
    document.getElementById("carrossel").src = imagens[index];
  }
};
function mudarImagem(direcao){
    index += direcao;

    if (index >= imagens.length) index = 0;
    if (index < 0) index = imagens.length -1;

    document.getElementById("carrossel").src = imagens[index];
}