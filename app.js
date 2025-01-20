// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let indicesUsados = [];

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
        // se sortea un amigo
        let indice = obtenerIndice(amigos.length);
        
        sorteado = amigos[indice];
        
        let elemento = document.createElement("li");
        elemento.textContent = sorteado;
        amigoSorteado.appendChild(elemento);
    } 
    else{
        alert("No se ha ingresado ningun nombre");
    }
}

function obtenerIndice(numeroDePersonas){
    
    if (indicesUsados.length < numeroDePersonas){
        let indice = Math.floor(Math.random() * numeroDePersonas);
        
        while (indicesUsados.includes(indice)){
            indice = Math.floor(Math.random() * numeroDePersonas);
            console.log("hola");
        }
        
        indicesUsados.push(indice);
        
        return indice;
    }
    else{
        alert("se han sorteado todos los amigos");
        // volver a las condiciones iniciales
        volverCondicionesIniciales();
    }
}

function volverCondicionesIniciales(){
    // vaciar lista de amigos en html
    let listaSorteados = document.getElementById("listaAmigos");
    listaSorteados.innerHTML = "";
    
    // limpiar listas
    amigos = [];
    indicesUsados = [];
}

function vaciarCaja(idElemento){
    document.getElementById(idElemento).value = "";
}