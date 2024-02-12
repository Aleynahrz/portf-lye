/* toggle icon navbar*/
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* Kaydırma kısmı aktive etme bölümü  */
let sections = document.querySelectorAll('section')
let navlink = document.querySelectorAll('header nav a')

window.onscroll= () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navlink.forEach(link=>{
                link.classList.remove('active');
                document.querySelector( 'header nav [href*='+id+']').classList.add('active');

            });
        };
    });

    /* Yapışken gezinme cubuğu = Sticky Navbar */
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon  and navbar when clicknav link (scroll) */
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
};
    /* Scroll Reveal */
ScrollReveal({
        reset: true,
        distance:'80px',
        duration:2000,
        delay:200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });