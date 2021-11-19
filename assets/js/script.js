const togglebutton = document.getElementsByClassName('toggle_button')[0]
const navbarnav = document.getElementsByClassName('navbar_nav')[0]

togglebutton.addEventListener('click', () => {
    navbarnav.classList.toggle('active')
})

let slider = document.querySelector(".slider_container")
let sliderIndividual = document.querySelectorAll(".slider_content")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}