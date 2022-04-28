
function ocultarResultado() {
    
    document.getElementById("resultado").style.display = "none";
  
}

ocultarResultado();

function ocultarBoton() {
    
    document.getElementById("boton-copiar").style.display = "none";
  
}

ocultarBoton();

function mostrarResultado() {
    
    document.getElementById("resultado").style.display = "block";
  
}

function mostrarBoton() {
    
    document.getElementById("boton-copiar").style.display = "block";
  
}

  

function encriptarTexto() {

    let valorEntrada = document.getElementById("traducir").value;

        let nuevoVector = Array.from(valorEntrada);

        console.log(nuevoVector);

        for (let i = 0; i<nuevoVector.length; i++) {
        
                let letra = nuevoVector[i];
        
                if (letra === "a") {
        
                    nuevoVector[i] = "ai";

                }
                if (letra === "e") {
        
                    nuevoVector[i] = "enter";

                }
                if (letra === "i") {
        
                    nuevoVector[i] = "imes";

                }
                if (letra === "o") {
        
                    nuevoVector[i] = "ober";

                }
                if (letra === "u") {
        
                    nuevoVector[i] = "ufat";

                }


        }

        

        console.log(nuevoVector.join(""));
        mostrarResultado();
        mostrarBoton();
        document.getElementById("resultado").innerHTML = nuevoVector.join("");
        
            
            
    traducir.value = "";
}




function desencriptarTexto() {

    let valorEntrada = document.getElementById("traducir").value;

        if (valorEntrada != ""){
        let nuevaPalabra = valorEntrada.replace(/ai/g, "a").replace(/enter/g, "e").replace(/ober/g, "o").replace(/imes/g, "i").replace(/ufat/g, "u");

        console.log(nuevaPalabra);
        mostrarResultado();
        mostrarBoton();
        document.getElementById("resultado").innerHTML = nuevaPalabra;

        }

    traducir.value = "";
}

function copiarAlPortapapeles() {

    let texto = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0,99999);
    document.execCommand('copy');

}


document.getElementById("boton1");
boton1.onclick = encriptarTexto;

document.getElementById("boton2");
boton2.onclick = desencriptarTexto;





