document.body.onload=function(){
    coeff = 600
    if(window.innerWidth < 800){
        coeff = 400
    }
    nbPhoto = 5;
    pos=0;
    imgMenu= document.getElementById("img-menu");
    gauche= document.getElementById("gauche");
    droite= document.getElementById("droite");
    imgMenu.style.width=(800*nbPhoto)+ "px";
    for(i=1;i<= nbPhoto; i++){
        div =document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('images/img"+i+".jpg')";
        imgMenu.appendChild(div);
    }
}
gauche.onclick=function(){
    if(pos<0)
        pos++;
    else
        pos=-nbPhoto+1;
    imgMenu.style.transform="translate("+pos*coeff+"px)";
    imgMenu.style.transition="all 0.5s ease";
    
    
}
droite.onclick=function(){
    if(pos>-nbPhoto+1)
        pos--;
    else
        pos=0;
    imgMenu.style.transform="translate("+pos*coeff+"px)";
    imgMenu.style.transition="all 0.5s ease";
    
}
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var bulles = document.querySelectorAll('.bulles a');

    sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.offsetHeight;

        if (window.scrollY >= top-200 && window.scrollY < top + height-200) {
            bulles[index].classList.add('active');
        } else {
            bulles[index].classList.remove('active');
        }
    });
});

const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector("nav");
menuHamburger.addEventListener('click',()=>{
    nav.classList.toggle('mobile-menu')
});
const navlinks = document.querySelectorAll(".navbar");
navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        nav.classList.remove('mobile-menu');
    });
});


const scroll = ScrollReveal();
scroll.reveal('.titre',{
    origin: top,
    duration: 2000,
    reset: true
});
scroll.reveal('#accueil',{
    origin: top,
    duration: 2000,
});
scroll.reveal('#menu',{
    origin: top,
    duration: 2000,
});
scroll.reveal('#contact',{
    origin: top,
    duration: 2000,
});
scroll.reveal('.nomRestaurant',{
    delay: 800,
    duration: 2000,
    origin: 'top',
    distance: '50px'});
if(window.innerWidth > 800){
    scroll.reveal('ul',{
            delay: 800,
            duration: 2000,
            origin: 'top',
            distance: '50px'});
    }

scroll.reveal('text-Apropos',{
            delay: 800,
            duration: 2000,
            origin: 'top',
            distance: '50px'});