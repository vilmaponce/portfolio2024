let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("neon-skill");

        // Verificar si hay elementos con la clase "neon-skill"
        if (habilidades.length > 0) {
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("react.js");
            habilidades[3].classList.add("gitygithub");
            habilidades[4].classList.add("bootstrap");
            habilidades[5].classList.add("node.js");
            habilidades[6].classList.add("comunicacion");
            habilidades[7].classList.add("trabajo");
            habilidades[8].classList.add("creatividad");
            habilidades[9].classList.add("dedicacion");
            habilidades[10].classList.add("aprendizaje");
            habilidades[11].classList.add("resolucion");
            habilidades[12].classList.add("gestion");
        } else {
            console.error("No se encontraron elementos con la clase 'progreso'");
        }
    }
}
function animatePhoto() {
    var container = document.getElementById("animation-container");
    container.classList.add("container"); // Agrega la clase para iniciar la animación
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}


function scrollToFooter(elementId) {
    var targetElement = document.getElementById(elementId);
    targetElement.scrollIntoView({ behavior: "smooth" });
}

