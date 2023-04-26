// scope   
var persona = {
    nombre : "Jaime",
    apellido : "Tauta"
} // scope global

function saludar() {
    console.log(persona.nombre)
    var persona2 = {
        nombre : "Alfredo",
        Apellido : "Mora"
    }
    console.log("intento de accceder al scope local desde el scope local", persona2)
}

saludar();
console.log("intento de acceder al scope global desde el scope global",persona);

