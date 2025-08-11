// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo(){
    const nombre = document.querySelector("#amigo").value;  // se obtiene el valor del input

    if (nombre.trim() === "") { // Validación para que no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    // a continuacion se agrega if para rechazar nombres ya ingresado 
    if (amigos.includes(nombre)) {
        alert("El nombre ya ha sido agregado.");
        return; // No agregar el nombre si ya existe
    }
    

    amigos.push(nombre);
    document.querySelector("#amigo").value = "";
    


    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";  // Esto borra todo lo que haya en la lista

    // Recorrer el array de amigos y agregar cada nombre como un nuevo <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");  // Crear un nuevo <li>
        li.textContent = amigos[i];  // Poner el nombre del amigo en el <li>
        lista.appendChild(li);  // Ag regar el <li> a la lista
    }

    console.log(amigos);  // Mostrar el array actualizado en la consola
    }

function sortearAmigo(){
    if(amigos.length === 0) {
        alert("¡No hay amigos para sortear!");
        return;
    }

    // egeneramos un indice aleatorio 

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // a continuacion obtenemos nombre de amigo sorteado 

    const amigoSorteado = amigos[indiceAleatorio];

    // mostramos el resultado 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    document.querySelector("#listaAmigos").innerHTML = "";

    console.log(amigoSorteado);
}

