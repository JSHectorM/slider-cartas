let slider = document.querySelector(".contenedor-slider");
let sliderIndividual = document.querySelectorAll(".img-slider");
let width = sliderIndividual[0].clientWidth;
let contador = 0;

slides();

function slides () {
    for (let i = 0; i < sliderIndividual.length; i++) {
        sliderIndividual[i].style.display = "none";
    }
    contador ++;
    if(contador > sliderIndividual.length) {
        contador = 1;
    }
    sliderIndividual[contador-1].style.display = "inline-block"
    setTimeout(slides, 3000);
}