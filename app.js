// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[]
// función que genera la lista de amigos ingresada por el usuario.
function agregarAmigo(){
    nombreAmigo=document.getElementById("amigo").value;
    // Aquí se ingresan los nombres a la lista, siempre que sean válidos.
    if (nombreAmigo==""){
        alert("Por favor ingresa un nombre válido");
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value="";
        actualizarLista();
    }
}

// función que muestra la lista en pantalla de los amigos que ha ingresado el usuario.
function actualizarLista(){
    lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    // Aquí se muestra la lista al usuario
    for (let i=0;i<listaAmigos.length;i+=1){
        lista.innerHTML+=`<li> ${listaAmigos[i]} </li>`;
    }
}
//función para el botón de sortear amigo, realiza el sorteo del amigo secreto.
function sortearAmigo(){
    if (listaAmigos.length>0){
        indice=Math.floor(Math.random()*(listaAmigos.length));
        amigoSorteado=listaAmigos[indice];
        document.getElementById("resultado").innerHTML=`Tu amigo secreto es ${amigoSorteado}`;
        console.log(indice)
    }
}
