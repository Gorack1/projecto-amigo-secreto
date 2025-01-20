// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let indicesUsados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    
    if (amigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(amigo);
        vaciarCaja("amigo");
    }

    mostrarAmigos();
}

function vaciarCaja(idElemento){
    document.getElementById(idElemento).value = "";
}

function mostrarAmigos(){
    let amigosIngresados = document.getElementById('listaAmigos');
    amigosIngresados.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        amigosIngresados.appendChild(elemento);
        //console.log(xd);
    }
}

function sortearAmigo(){
    
    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = "";
    
    if (amigos.length != 0 && indicesUsados){
        let indice = Math.floor(Math.random() * amigos.length);
        indicesUsados.push(indice);
        
        sorteado = amigos[indice];
        
        let elemento = document.createElement("li");
        elemento.textContent = sorteado;
        amigoSorteado.appendChild(elemento);
    } 
}