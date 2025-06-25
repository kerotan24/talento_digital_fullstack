// document.querySelector("h1").textContent = "Aprendiendo Javascript";
//let botonesAceptar =  document.getElementsByClassName("aceptar");
let botonesRechazar = document.querySelectorAll(".rechazar");
let botonesAceptar = document.querySelectorAll(".aceptar");

let solicitudes = document.querySelectorAll(".personaSolicitud");
let conexionesTexto = document.querySelector(".conexionesTexto");

let nombre = document.querySelector(".nombre");
let perfilDescripcion = document.querySelector(".perfilDescripcion");
let perfilTexto = document.querySelector(".perfilTexto");
let botonDescripcion = document.querySelector(".botonDescripcion");


let inEnglish = false;

let numeroActual = 10;

const textosEnEspañol = [
    "Canela",
    "Asistente Municipal | Experta en Proyectos | Amante de la Naturaleza",
    "Apasionada por crear pueblos funcionales y acogedores. Cuando no estoy organizando eventos, disfruto paseando por los jardines y tomando café con extra azúcar.",
    ];

const textosEnIngles = [
    "Isabelle",
    "Local Government Assistant | Project Specialist | Nature Enthusiast",
    "Passionate about creating functional and welcoming towns. When I'm not organizing events, I enjoy walking through gardens and drinking coffee with extra sugar.",
]    

console.log(conexionesTexto);

for (let index = 0; index < botonesAceptar.length; index++) {
    botonesAceptar[index].addEventListener("click", function () {
    solicitudes[index].remove();
    console.log("Aceptar");
    numeroActual++;
    conexionesTexto.textContent = ("Tus Conexiones(") + numeroActual + ")";
})
}
for (let index = 0; index < botonesRechazar.length; index++) {
    botonesRechazar[index].addEventListener("click", function () {
    solicitudes[index].remove();
    console.log("Rechazar");
})
}
botonDescripcion.addEventListener("click", function () {
    inEnglish = !inEnglish;
    if(inEnglish){
        botonDescripcion.textContent = "Español";
        nombre.textContent = textosEnIngles[0];
        perfilDescripcion.textContent = textosEnIngles[1];
        perfilTexto.textContent = textosEnIngles[2];
    }else{
        botonDescripcion.textContent = "English";
        nombre.textContent = textosEnEspañol[0];
        perfilDescripcion.textContent = textosEnEspañol[1];
        perfilTexto.textContent = textosEnEspañol[2];
    }
})
