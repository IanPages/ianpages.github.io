const DOM = {
    //descripciones generales
    form: document.getElementById("form"),
    divValidation: document.getElementById("validationMessages"),
    //inputs
    inputName: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    passcheck: document.getElementById("passcheck"),
    nombre: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    fechaNacimiento: document.getElementById("nacimiento"),
    telefono: document.getElementById("telefono"),
    codPostal: document.getElementById("codpost"),
    dniSelect: document.getElementById("dni"),
    dniNie: document.getElementById("dni2"),
    cuentaComo: document.getElementById("particular"),
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


DOM.passcheck.addEventListener("click", function(){
    if (DOM.passcheck.checked){
        DOM.contrasena.type="text";
    }
    else{
        DOM.contrasena.type="password";
    }
})

let usado = false;
DOM.fechaNacimiento.addEventListener("click", () => {

    if (usado == false){
        for(let i = 1921; i < 2011; i++ ){
            let option = document.createElement("option");
            option.append(i);
            option.value = i
            DOM.fechaNacimiento.append(option);
        }
        usado = true;
    }
    
})

DOM.dniSelect.addEventListener("click", function(){
    if (DOM.dniSelect.value == "DNI"){
        DOM.dniNie.placeholder="00000000X";
        DOM.dniNie.removeAttribute("disabled");
    }
    else if(DOM.dniSelect.value == "NIE"){
        DOM.dniNie.placeholder="X0000000X";
        DOM.dniNie.removeAttribute("disabled");
    }
})

DOM.titulo.addEventListener("input", () => {
    DOM.longitudTitulo.textContent = `${DOM.titulo.value.length} / 15`;
})

DOM.descripcion.addEventListener("input", () => {

    DOM.longitudTextarea.textContent = `${DOM.descripcion.value.length} / 120`;
})

DOM.form.addEventListener("submit", (e) => {
    //AFICIONES y concatenacion
    const aficionesElegidas = [];
    const aficiones = document.querySelectorAll('input[name="Aficiones"]:checked');

    aficiones.forEach(aficion => {
    aficionesElegidas.push(aficion.value);
    });

    let inputHidden = document.createElement("input");
    inputHidden.type = 'hidden';
    inputHidden.name = 'Aficiones';
    inputHidden.value= aficionesElegidas.join(',');

    //LO añadimos despues del while ya que el validation message tambien lo cree en la validacion de minimo 2 checkboxes

    //DIV DERECHO VALIDACIONES
    let inputsRequired = document.querySelectorAll("input[required]");
    
    //Borramos los anteriores para que no sea un lío
    while (DOM.divValidation.firstChild) {
        DOM.divValidation.removeChild(DOM.divValidation.firstChild);
    }

    if (aficionesElegidas.length <2){
        DOM.errorAficiones.textContent="Elige al menos 2 opciones"
        let span = document.createElement("span");
        span.textContent = `${inputHidden.name} = Elige al menos 2 opciones`;
        span.classList.add("rojo");
        DOM.divValidation.append(span);
        e.preventDefault();
    }

    DOM.aficionesDiv.append(inputHidden);

    //Mensajes de validacion
    inputsRequired.forEach(element => {
        if (element.validationMessage!= ""){
            let span = document.createElement("span");
            span.textContent=`${element.name} = ${element.validationMessage}`
            span.classList.add("rojo");
            DOM.divValidation.append(span);
            e.preventDefault();
        }
    });
    //Validacion suelta del textarea
    if(DOM.descripcion.validationMessage!= ""){
        let span2 = document.createElement("span");
        span2.textContent=`${DOM.descripcion.name} = ${DOM.descripcion.validationMessage}`
        span2.classList.add("rojo");
        DOM.divValidation.append(span2);
        e.preventDefault();
    }
    //validacion de los radio
    let radios = document.querySelectorAll("input[type=radio]:checked");
    if(radios.length<1){
        DOM.errorCuentaComo.textContent="Campo Obligatorio";
        let span = document.createElement("span");
        span.textContent=`${DOM.cuentaComo.name} = Elige uno de los dos`
        span.classList.add("rojo");
        DOM.divValidation.append(span);
        e.preventDefault();
    }

    //INPUTS VACIOS DEL USUARIO

    let campo = "Campo Obligatorio";

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





