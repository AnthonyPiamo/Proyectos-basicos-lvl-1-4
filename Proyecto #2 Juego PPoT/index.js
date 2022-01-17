// Returns un valor aleatorio dado en rango 
function rangoAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
    Primero revisa si es un empate, si lo es sale de la función regresando "Empate"
    luego revisa si el jugador ganó utilizando el array 2D definido más adelante
    si no es empate ni tampoco ganó, solo queda perder, así que es el valor default
    que regresa la función
*/
function resultado(j,b){
    if(j==b){
        return "Empate";
    }
    for(let caso of winCase){
        if (j==caso[0] && b==caso[1]){
            return "Ganaste";
        }
    }
    
    return "Perdiste";
}

// Array 2D que contiene los casos en donde el jugador gana
var winCase = [[0,2],[1,0],[2,1]];

document.querySelectorAll('.seleccion').forEach(item => {
    item.addEventListener('click', e => {

        let seleccion = item.id;          // Selección del jugador
        let bot = rangoAleatorio(0,2);    // Selección del "bot"
        alert(resultado(seleccion,bot));  // Función a realizar para mostrar el resultado.

    })
  })