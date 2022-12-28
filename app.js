




let gana;
let veces;

let contadorA = 3;
let contadorB = 3;

while (contadorA != 0 && contadorB != 0) {
    let JugadorA = prompt("Ingrese juego JugadorA");
    let JugadorB = prompt("Ingrese juego JugadorB");


//let x = 1;
//let suma = 0;
//let valor;
//while (x+1)
//{valor=prompt('¿Cuántas partidas?:','');
//valor=parseInt(valor);
//suma=suma+valor;
//x=x+1;}
//document.write('La suma de los valores es '+suma+'');

//function calcResult (JugadorA, JugadorB){

if (JugadorA == "piedra" && JugadorB == "tijera") {
    console.log("piedra gana a tijera, gana jugador: " + JugadorA);
}
else if (JugadorA == "tijera" && JugadorB == "papel") { console.log("tijera gana a papel, gana jugador: " + JugadorA) }

else if (JugadorA == "papel" && JugadorB == "piedra") { console.log("papel gana a piedra, gana jugador: " + JugadorA) }

else if (JugadorA == "piedra" && JugadorB == "papel") { console.log("papel gana a piedra, gana jugador: " + JugadorB) }

else if (JugadorA == "tijera" && JugadorB == "piedra") { console.log("piedra gana a tijera, gana jugador: " + JugadorB) }

else if (JugadorA == "papel" && JugadorB == "tijera") { console.log("tijera gana a papel, gana jugador: " + JugadorB) }


else if (JugadorA == JugadorB) {
    console.log("Empate")
}


iniciar= prompt("¿Jugar de nuevo?" , "si/no");}

if (iniciar == "no"){
        if (contadorA > contadorB){
            document.body.innerHTML =  "Gana JugadorA con : " + contadorA + "victorias"
        } else if (contadorA == contadorB) {
            document.body.innerHTML =  "¡Empate!"
        } else (contadorB> contadorB)
            document.body.innerHTML =  "Gana JugadorB con : " + contadorB + "victorias"}
        

    




    //acumulador para el conteo de veces ganadas o empates
    // ejemplo let perdidasJugadorA = 0
   // document.body.innerHTML para el texto de ganaste en HTML
