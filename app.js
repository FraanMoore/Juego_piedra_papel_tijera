Array = Nombre  = prompt("Ingresar nombre jugador A");
Array = Nombre  = prompt("Ingresar nombre jugador B");

let JugadorA = prompt("JugardorA");
let JugadorB = prompt("JugardorB");

if(JugadorA == "piedra" && JugadorB == "tijera") 
{console.log("piedra gana a tijera, gana jugador: " + JugadorA);
} 
else if(JugadorA == "tijera" && JugadorB == "papel") 
{console.log("tijera gana a papel, gana jugador: " + JugadorA)}

else if(JugadorA == "papel" && JugadorB == "piedra") 
{console.log("papel gana a piedra, gana jugador: " + JugadorA)}

else if(JugadorA == "piedra" && JugadorB == "papel") 
{console.log("papel gana a piedra, gana jugador: " + JugadorB)}

else if(JugadorA == "tijera" && JugadorB == "piedra") 
{console.log("piedra gana a tijera, gana jugador: " + JugadorB)}

else if(JugadorA == "papel" && JugadorB == "tijera") 
{console.log("tijera gana a papel, gana jugador: " + JugadorB)}


else if (JugadorA == JugadorB) {
    console.log("Empate")}

    //acumulador para el conteo de veces ganadas o empates
    // ejemplo let perdidasJugadorA = 0
   // document.body.innerHTML para el texto de ganaste en HTML
