var cajaTexto = document.getElementById("texto");
var cajaResultado = document.getElementById("resultado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");
var contenido;
var letra;
var mensajeEncriptado = "";
var mensajeDesencriptado;

function encriptar(){
    contenido = cajaTexto.value;

    for(var i = 0; i < contenido.length; i++){
        ocultarImagen();
        letra = contenido.charAt(i);

        if(letra == "a"){
            letra = "ai";
            mensajeEncriptado = mensajeEncriptado + letra;
        }else if(letra == "e"){
            letra = "enter";
            mensajeEncriptado = mensajeEncriptado + letra;
        }else if(letra == "i"){
            letra = "imes";
            mensajeEncriptado = mensajeEncriptado + letra;
        }else if(letra == "o"){
            letra = "ober";
            mensajeEncriptado = mensajeEncriptado + letra;
        }else if(letra == "u"){
            letra = "ufat";
            mensajeEncriptado = mensajeEncriptado + letra;
        }else{
            mensajeEncriptado = mensajeEncriptado + letra;
        }
        cajaResultado.innerHTML = `${mensajeEncriptado}`;
    }
    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("botonCopiar").style.display = "inline-block";
    mensajeEncriptado = "";
}

function desencriptar(){
    ocultarImagen();
    contenido = cajaTexto.value;

    mensajeDesencriptado = contenido;
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai", "a");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter", "e");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes", "i");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober", "o");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat", "u");

    cajaResultado.innerHTML = `${mensajeDesencriptado}`;

    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("botonCopiar").style.display = "inline-block";
}

function ocultarImagen(){
    document.getElementById("presentacion").style.display = "none";
}

function copiar(){
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    document.execCommand("copy");
}

document.getElementById("resultado").style.display = "none";
document.getElementById("botonCopiar").style.display = "none";

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;