// Funcion declarativa
function saludar(){
    console.log("Hola mundo");
}

saludar();


// Funcion declarativa
function saludar(nombre){
    console.log("Hola mundo");
}

saludar("Jaime");


// funcion anonima
const saluda = function(nombres){
    console.log("hola mundo " + nombres);
}

saluda("juan");

// funcion de flecha o arrow function

cosnt suma = (a,b) => {
    console.log(a+b);
}

suma(10,15);

