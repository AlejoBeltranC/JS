
//  get elements
let tablero = document.getElementById("tablero");
let boton_play = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");

// state
let run = false;
let time = {
    decimas : 0,
    segundos : 0,
    minutos : 0
}
//functions
// format
function formato(numero){
    if(numero<10){
        return "0"+numero;
    }
    else{
        return numero;
    }
}
function actualizar(){

    time.decimas++;

    if(time.decimas == 10){
        time.decimas = 0;
        time.segundos++;
    }

    if(time.segundos == 60){
        time.segundos = 0;
        time.minutos++;
    }

    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`
    
    if(run == true){
        setTimeout(actualizar,100);
    }
}
function play(){

    if(run == false){
        run = true;
        actualizar();
    }
}

function pause(){
    run = false;
}

function reset(){
    time.decimas = 0;
    time.segundos = 0;
    time.minutos = 0;
    tablero.innerHTML = `${formato(time.minutos)}:${formato(time.segundos)}:${time.decimas}`
    
}

boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause);
boton_reset.addEventListener('click', reset);