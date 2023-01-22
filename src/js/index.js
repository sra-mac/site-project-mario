const modalTrailer = document.querySelector(".modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkTrailer = video.src;
botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", linkTrailer);
})

const fecharModalTrailer = document.querySelector(".fechar-modal");
fecharModalTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", "");
})

function alternarModal(){
    modalTrailer.classList.toggle("aberto");
}