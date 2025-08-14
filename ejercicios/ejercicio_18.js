//Validar correo electrónico
function esCorreo(correo) {
    return correo.includes("@") && correo.endsWith(".com");
}

console.log(esCorreo("test@example.com")); 
console.log(esCorreo("test@ejemplo.org"));