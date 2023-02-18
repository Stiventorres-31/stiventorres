let menuVisible = false;

//Función que oculta o muestra el menú

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //OCULTO EL MENU UNA VEZ QUE SELECCIONE UNA OPCION
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajoEnEquipo");
        habilidades[5].classList.add("creatividad");
    }
}

//DETECTO EL SCROLLING PARA APLICAR LA ANIACION DE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}