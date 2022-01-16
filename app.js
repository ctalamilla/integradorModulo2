/* Etapa 1 y 2

En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

*/

/* let autos = require("./autos");

let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null // ternario
    },


}

console.log(concesionaria.buscarAuto("APL123")) */

/* Etapa 3

Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

*/

let autos = require("./autos");

let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },

    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },

    }

concesionaria.venderAuto("APL123")
console.log(concesionaria.buscarAuto("APL123"))



