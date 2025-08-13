// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[]
function agregarAmigo(){
    nombreAmigo=document.getElementById("amigo").value
    if (nombreAmigo==""){
        alert("Por favor ingresa un nombre válido")
    } else {
        listaAmigos.push(nombreAmigo)
        document.getElementById("amigo").value=""
    }
}

function sortearAmigo(){}
