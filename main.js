

// header.style.background= `center/cover no-repeat url(${img[0]})`;
let header = document.querySelector('#header');
let cpt = 0;
let img = ["./assets/fond.jpg","./assets/fond2.jpg","./assets/fond3.jpg"]
header.style.background= `center/cover no-repeat url(${img[cpt]})`;

let slide = setInterval(function next(){
        header.style.background= `center/cover no-repeat url(${img[cpt]})`;
        cpt==img.length-1 ? cpt=0 : cpt++
}, 5000)