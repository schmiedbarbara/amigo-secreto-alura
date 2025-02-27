// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//inicialización de variables
let amigosIngresados = [];


function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Se incorporan los nombres al arreglo
    if (nombreAmigo === "") {
        alert("Por favor, complete con el nombre de su amigo!");
    } else {
        amigosIngresados.push(nombreAmigo);
        console.log(amigosIngresados); 
        
        //Mostrar lista en Página
        listaAmigos();
    }
    limpiarBox();
    
}


//Limpia el nombre ingresado anteriormente
function limpiarBox() {
    let valorCasilla = document.getElementById('amigo').value = '';
}


function listaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista <ul> o <ol>
    
    // Limpia la lista antes de actualizar
    lista.innerHTML = "";

    // Recorre el arreglo y agrega cada amigo a la lista
    amigosIngresados.forEach(amigo => {
        let elementoNuevo = document.createElement("li");
        elementoNuevo.textContent = amigo;
        lista.appendChild(elementoNuevo);
    });
}


function sortearAmigo(){
    const indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);

    if(amigosIngresados.length < 2){
        alert("No hay amigos disponibles para el sorteo. Ingresar al menos 2 amigos");
        return;
    } 

    const amigoSorteado = amigosIngresados[indiceAleatorio];
    

    //Mostrar el resultado en la Página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


function reiniciarJuego(){

    //Se reinicia arreglo
    amigosIngresados = [];

    //Se reinician valores en la Página
    document.getElementById("listaAmigos").innerHTML="";
    document.getElementById('resultado').innerHTML="";

}