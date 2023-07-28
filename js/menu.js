const botao = document.querySelector("nav h2");
const linkmenu = document.querySelector(".menu");
const icone = document.querySelector(".icone");

botao.addEventListener("click", function(event){
    event.preventDefault();
    linkmenu.classList.toggle("aberto");
    /* Logica para alternacia de texto/icone
    se a classe "aberto" estiver aplicada ao linkmenu então mude para "Fechar" 
    */

    if (linkmenu.classList.contains("aberto")) {
        icone.innerHTML ="Fechar &times;";
    } else {
        icone.innerHTML="Menu &equiv;";
    }

});