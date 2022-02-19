export default function jsMenu() {
    
}

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
})

function scrollToSection(e) {
    e.preventDefault();
    
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    console.log(section);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}