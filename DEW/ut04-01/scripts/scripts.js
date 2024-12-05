const DOM = {
    //descripciones generales
    form: document.getElementById("form"),
    divValidation: document.getElementById("validationMessages"),
    //inputs
    inputName: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    nombre: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    fechaNacimiento: document.getElementById("nacimiento"),
    telefono: document.getElementById("telefono"),
    codPostal: document.getElementById("codpost"),
    dniNie: document.getElementById("dni2"),
    cuentaComo: document.getElementsByName("CuentaComo"),
    titulo: document.getElementById("tit"),
    descripcion: document.getElementById("desc"),
    longitudTitulo: document.getElementById("longitudTitulo"),
    longitudTextarea: document.getElementById("longitudTextarea"),
    aficionesDiv: document.getElementById("aficionesReunidas"),
    //gestionErrores
    errorUserName: document.getElementById("errorUserName"),
    errorPassword: document.getElementById("errorPassword"),
    errorNombre: document.getElementById("errorNombre"),
    errorApellido: document.getElementById("errorApellido"),
    errorTelefono: document.getElementById("errorTelefono"),
    errorCodPostal: document.getElementById("errorCodPostal"),
    errorDniNie: document.getElementById("errorDniNie"),
    errorCuentaComo: document.getElementById("errorCuentaComo"),
    errorAficiones: document.getElementById("errorAficiones"),
    errorPublicacionTitulo: document.getElementById("errorPublicacionTitulo"),
    errorPublicacionDescripcion: document.getElementById("errorPublicacionDescripcion"),
}

function mostrarPassword() {
    var z = document.getElementById("Contrasena");
    if (z.type === "password") {
        z.type ="text";

    }else{
        z.type= "password";
    }
}

DOM.fechaNacimiento.addEventListener("click", () => {
    for(let i = 1921; i <= 2010; i++ ){
        let option = document.createElement("option");
        option.append(i);
        option.value = i
        DOM.fechaNacimiento.append(option);
    }
})

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
        DOM.errorAficiones.textContent="Minimo 2 selecciones"
        e.preventDefault();
    }

    let inputHidden = document.createElement("input");
    inputHidden.type = 'hidden';
    inputHidden.name = 'Aficiones';
    inputHidden.value= aficionesElegidas.join(',');

    DOM.aficionesDiv.append(inputHidden);
    let campo = "Campo Obligatorio";

    let inputsRequired = document.querySelectorAll("input[required]");
    
    //FALTA AÑADIR QUE BORRE TODOS LOS HIJOS MEDIANTE DOM 
    while (DOM.divValidation.firstChild) {
        DOM.divValidation.removeChild(DOM.divValidation.firstChild);
    }
    
    inputsRequired.forEach(element => {
        if (element.validationMessage!= ""){
            let span = document.createElement("span");
            span.textContent=`${element.name} = ${element.validationMessage}`
            DOM.divValidation.append(span);
            e.preventDefault();
        }
    });

    if (DOM.inputName.value == ""){
        DOM.errorUserName.textContent = campo;
    }
    if(DOM.contrasena.value == ""){
        DOM.errorPassword.textContent= campo
    }
    if (DOM.nombre.value==""){
        DOM.errorNombre.textContent=campo
    }
    if (DOM.apellidos.value == ""){
        DOM.errorApellido.textContent =campo
    }
    if(DOM.telefono.value == ""){
        DOM.errorTelefono.textContent= campo
    }
    if (DOM.codPostal.value==""){
        DOM.errorCodPostal.textContent=campo
    }
    if (DOM.dniNie.value == ""){
        DOM.errorDniNie.textContent=campo
    }
    if(DOM.titulo.value ==""){
        DOM.errorPublicacionTitulo.textContent=campo
    }
    if(DOM.descripcion.value== ""){
        DOM.errorPublicacionDescripcion.textContent=campo
    }

})





