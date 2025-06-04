// script.js
// Seleciona todos os links do menu
const links = document.querySelectorAll('nav ul li a');

// Adiciona um evento de cique a cada link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Obtem o id da seção alvo
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Rolgagem suave até a seção alvo
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});