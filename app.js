let intentosMaximos = 2;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
}

console.log(numeroSecreto);

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (intentos == intentosMaximos) {
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("botonIntentar").setAttribute("disabled", "true")
    } else {
        intentos++;
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertarte el numero en ${intentos} ${(intentos === 1) ? "vez":"veces"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            } else {
                if (numeroDeUsuario < numeroSecreto) {
                    if (intentos == intentosMaximos) {
                        asignarTextoElemento('p',"Lo lamento perdiste.");
                        document.getElementById("botonIntentar").setAttribute("disabled", "true");
                        document.getElementById("reiniciar").removeAttribute("disabled");
                    } else {
                        asignarTextoElemento('p',`INTENTO ${intentos}.  El numero secreto es MAYOR`);
                    }
                } else {
                    if (intentos == intentosMaximos) {
                        asignarTextoElemento('p',"Lo lamento perdiste.");
                        document.getElementById("botonIntentar").setAttribute("disabled", "true");
                        document.getElementById("reiniciar").removeAttribute("disabled");
                    } else {
                        asignarTextoElemento('p',`INTENTO ${intentos}.  El numero secreto es MENOR`);
                    }
                }
                limpiarCaja();
            }
    }
}

function reinciarJuego() {
    limpiarCaja();
    intentos = 0;
    //Habilitar Intentar
    document.getElementById("botonIntentar").removeAttribute("disabled");
    //Deshabilitar Reinterntar
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    //Invitar a poner un numero en el parrafo.
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}.`);
    //Generamos un numero nuevo.
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
}



function generarNumeroSecreto() {
    numerox = Math.floor(Math.random()*numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
        listaNumerosSorteados = [];
    } else {
        if (listaNumerosSorteados.includes(numerox)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerox);
            console.log(numerox);
            console.log(listaNumerosSorteados);
            return numerox;
        }
    }
    
    
    
}

asignarTextoElemento("h1","Juego del numero secreto!");
asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}.`);
