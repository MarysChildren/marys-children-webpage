document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
    });
});

window.onscroll = function() {
    holdHeader();
    borrarNav1();
    borrarNav2();
}

var header = document.getElementById("navigation");

var sticky = header.offsetTop;

function holdHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky")
    }
}

function borrarNav1() {
    if (window.pageYOffset > sticky) {
        document.getElementById("borrable1").style.display = "none";
    }
    else {
        document.getElementById("borrable1").style.display = "inline";
    }
}

function borrarNav2() {
    if (window.pageYOffset > sticky) {
        document.getElementById("borrable2").style.display = "none";
    }
    else {
        document.getElementById("borrable2").style.display = "inline";
    }
}