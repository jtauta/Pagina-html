let persona = {
    "nombre" : "jaime",
    "apellido" : "tauta",
    "edad" : 35,
    "casado" : false,
    "saludar" :function(){
        console.log("emitiendo un saludo")
    },
    "direccion":{
        "nombre":"casa",
        "ruta":"manzana 2",
        "referencia":"referencia xxxx",
        "ruta:direccion":"esta es prueba de ruta y direccion"
    }

}

console.log("mostrando el objeto",persona.nombre);
console.log("mostrando el objeto",persona.direccion["ruta:direccion"]);