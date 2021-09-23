/**
Funcion para consumir una api rest * 
*/


async function getCharacters(){
    // generar peticion a la api
    const peticion= await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
    // console.log(peticion);
    const personajes= await peticion.json();
    // console.log(personajes);

    // agregar código html
    let contenedor=document.getElementById("contPersonajes")
    personajes.forEach(personaje => {
        // console.log("Nombre: "+personaje.Name+"\nEspecie: "+personaje.Species+"\n");

        //agregamos targetas mientras vamos iterando
        let tarjetaPersonaje="<div class='card' style='width: 18rem;'>"+
                                "<img class='card-img-top' src='"+personaje.PicUrl+"' id='"+personaje.Name+"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title'>"+personaje.Name+"</h5>"+
                                    "<p class='card-text'>"+"Especie: "+personaje.Species+"\nPlaneta: "+personaje.Planet+"</p>"+
                                    "</div>"+
                                "</div>";

        contenedor.innerHTML+=tarjetaPersonaje;
    });
}

getCharacters();
