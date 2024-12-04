const DOM = {
    form: document.getElementById("form"),
    inputName: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    fechaNacimiento: document.getElementById("nacimiento"),
    titulo: document.getElementById("tit"),
    descripcion: document.getElementById("desc"),
    longitudTitulo: document.getElementById("longitudTitulo"),
    longitudTextarea: document.getElementById("longitudTextarea"),
    aficionesDiv: document.getElementById("aficionesReunidas")

}

DOM.fechaNacimiento.addEventListener("click", () => {
    for(let i = 1920; i <= 2010; i++ ){
        let option = document.createElement("option");
        option.append(i);
        option.value = i
        DOM.fechaNacimiento.append(option);
    }
})
// (function() {


// })();



function mostrarPassword() {
    var z = document.getElementById("Contrasena");
    if (z.type === "password") {
        z.type ="text";

    }else{
        z.type= "password";
    }
}


DOM.titulo.addEventListener("input", () => {
    DOM.longitudTitulo.textContent = `${DOM.titulo.value.length} / 15`;
})

DOM.descripcion.addEventListener("input", () => {

    DOM.longitudTextarea.textContent = `${DOM.descripcion.value.length} / 120`;
})

DOM.form.addEventListener("submit", (e) => {
    const aficionesElegidas = [];
    const aficiones = document.querySelectorAll('input[name="Aficiones"]:checked');

    aficiones.forEach(aficion => {
    aficionesElegidas.push(aficion.value);
    });

    if (aficionesElegidas.length <2){
        e.preventDefault();
        return;
    }

    let inputHidden = document.createElement("input");
    inputHidden.type = 'hidden';
    inputHidden.name = 'Aficiones';
    inputHidden.value= aficionesElegidas.join(',');

    DOM.aficionesDiv.append(inputHidden);

    if (!DOM.inputName.validationMessage==""){
        e.preventDefault();
    }
})





