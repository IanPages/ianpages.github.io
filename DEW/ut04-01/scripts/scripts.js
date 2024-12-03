const DOM = {
    form: document.getElementById("form"),
    inputName: document.getElementById("NombreUsuario"),
    contrasena: document.getElementById("Contrasena"),
    fechaNacimiento: document.getElementById("nacimiento"),
    titulo: document.getElementById("tit"),
    descripcion: document.getElementById("desc"),
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


DOM.titulo.addEventListener("change", () => {
    var p = document.getElementById("longitudTitulo");
    p.innerText = `${DOM.titulo.length} / 15`;
})


DOM.form.addEventListener("submit", (e) => {
    if (!DOM.inputName.validationMessage==""){
        e.preventDefault();
        alert("El campo de username esta vacío");
    }
})



