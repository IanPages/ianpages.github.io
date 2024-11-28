function mostrarPassword() {
    var z = document.getElementById("passwd");
    if (z.type === "password") {
        z.type ="text";

    }else{
        z.type= "password";
    }
}
