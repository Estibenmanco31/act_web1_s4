//Crear un contador privado
const contador = (function() {
    let cuenta = -1;
    return function() {
        cuenta++;
        return cuenta;
    };
})();

console.log(contador()); 
console.log(contador()); 