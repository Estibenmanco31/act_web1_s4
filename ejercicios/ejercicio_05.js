//Contar vocales en una cadena
function contarVocales(cadena) {
    if (!cadena || cadena.length === 0) return 0;
    const vocales = "aeiouAEIOU";
    return (vocales.includes(cadena[0]) ? 1 : 0) + contarVocales(cadena.slice(1));
}

console.log(contarVocales("hola")); 
