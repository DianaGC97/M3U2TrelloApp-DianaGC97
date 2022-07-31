//Eliminamos los estilos de Hammer para que nos permita poder seleccionar textos
//sin reconocer que estamos haciendo alguno evento
delete Hammer.defaults.cssProps.userSelect;
// Referenciamos nuestro body con la librería de HammerJS
const APP = document.querySelector("#app");
// Instanciamos HammerJS
const hammerjs = new Hammer(APP);

//Añadimos los eventos de HammerJS
hammerjs.on("panleft panright", (ev) => {
    // Creamos la función que cuando este en mobile cuando deslizemos el dedo salga el panel de crear nueva tarea
    if (ev.pointerType === "touch") {
        const windowWidth = window.screen.width;
        const distance = Math.floor(e.distance) >= 50;
        if (ev.type === "panleft" && ev.center.x > windowWidth - 100 && distance) {
            modalTask.classList.add("active");
        }
        if (ev.type === "panright" && distance) {
            modalTask.classList.remove("active");
        }
    }
});