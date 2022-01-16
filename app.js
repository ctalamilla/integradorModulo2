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

/* let autos = require("./autos");

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
console.log(concesionaria.buscarAuto("APL123")) */

/* Funciones extras

La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.
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

    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false)

    },

    }

console.log(concesionaria.autos)
concesionaria.venderAuto('APL123')
console.log(concesionaria.autosParaLaVenta())


