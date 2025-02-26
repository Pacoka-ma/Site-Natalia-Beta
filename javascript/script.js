document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    // Impede as teclas Ctrl+U e Ctrl+S
    if (event.ctrlKey && (event.key === "u" || event.key === "U" || event.key === "s" || event.key === "S")) {
        event.preventDefault();
    }
    // Impede a combinação Ctrl+Shift+I (Inspecionar)
    if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault();
    }
    // Impede a tecla F12 (F12 é usada para abrir as ferramentas de desenvolvedor)
    if (event.key === "F12") {
        event.preventDefault();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const cabecalho = document.querySelector(".cabecalho");
    const espacoCabecalho = document.querySelector(".espaco-cabecalho");

    // Função para o cabeçalho fixo
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            cabecalho.classList.add("fixo");
            espacoCabecalho.style.display = "block"; 
        } else {
            cabecalho.classList.remove("fixo");
            espacoCabecalho.style.display = "none"; 
        }
    });

    // Seleciona os contêineres que devem ser animados
    const containers = document.querySelectorAll('.conteinerabout, .conteinerform, .conteinerserv, .conteinerhors');
    
    window.addEventListener("scroll", function() {
        containers.forEach(function(container) {
            var rect = container.getBoundingClientRect();
            var windowHeight = window.innerHeight;

            if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
                if (!container.classList.contains("ativo")) { // Evita reaplicar animação
                    container.classList.add("ativo");
                    container.classList.remove("inativo");
                }
            } else {
                if (!container.classList.contains("inativo")) { // Evita reaplicar animação
                    container.classList.add("inativo");
                    container.classList.remove("ativo");
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".links a"); // Seleciona todos os links do menu

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede a ação padrão do link

            const targetId = this.getAttribute("href").substring(1); // Pega o ID do destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2; // Centraliza na tela

                window.scrollTo({
                    top: elementPosition - offset, // Ajuste para manter no centro
                    behavior: "smooth" // Rola suavemente
                });
            }
        });
    });
});
