/* Etapa 1 

En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

*/

let autos = require("./autos");

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null // ternario
/*         if(resultado.length !=0){ 
            return resultado
        } else { 
                return null 
            } */
    }    
}

console.log(concesionaria.buscarAuto("APL123"))


