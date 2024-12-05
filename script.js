var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Programmer" ],
    typeSpeed: 100,
    BackSpeed: 40,
    loop: true
})
  

function toggleNav() {
    const navbar = document.querySelector('.navbar1');
    navbar.classList.toggle('show');
}

function closeNavOnScroll() {
    const navbar = document.querySelector('.navbar1');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}

window.addEventListener('scroll', closeNavOnScroll);
  
