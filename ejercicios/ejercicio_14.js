//Generar un ID único
const generarId = (function() {
    let id = 0;
    return function() {
        id++;
        return id;
    };
})();

console.log(generarId()); 
console.log(generarId());