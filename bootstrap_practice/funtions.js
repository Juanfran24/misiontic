// funcion para actualizar el DOM
function actualizarImagen() {
    let imagen=document.getElementById("img1");
    let imagen1="https://image.goat.com/750/attachments/product_template_pictures/images/059/514/704/original/793049_00.png.png";
    let imagen2="https://image.goat.com/750/attachments/product_template_pictures/images/060/411/172/original/GW0847.png.png";
    if(imagen.src!=imagen1){
        imagen.src = imagen1;
    }else{
        imagen.src=imagen2;
    }
}


/**********variables***************/

const numero_5 = 5;        //constante
var cadena = "hola mundo"; //variable global
let numero_1 = 1;          //variable local
let decimal = 10.2;

var personas = ["Juan", "Andrea", "Pedro", "Jose"];
// // agregar elementos al arreglo
personas.push("Alexis");
// console.log(personas);
// // eliminar último elemento
personas.pop();
// console.log(personas);

/**************ciclos******************/

// // // for
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=0;i<personas.length;i++){
//     console.log(personas[i]);
// }

// // // for-each
// personas.forEach(persona => {
//     console.log(persona);
// });

/**********console*********/
// console.log("esto es un log normal");
// console.info("Esto es un console info");
// console.error("Esto es un console error");
// console.warn("Esto es un console warning");
// console.table({ Llave_1: "clave 1", Llave_2: "clave 2" });

/************Funciones*************/
// function saludar(){
//     alert("hola mundo");
// }

// let funcionFlecha=()=>{

// }