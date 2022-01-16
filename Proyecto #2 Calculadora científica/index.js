class Botones {
    constructor (_elemento, _contenido){
        this.panelElement = _elemento; // elemento HTML
        this.botones = _contenido;     // Array 2D, [["contenido1","clase1"],["contenido2","clase2"]]
    }

    static crear(contenido,clase){
        const btn = document.createElement("button");
        const spn = document.createElement("div");
        spn.textContent = contenido;
        btn.className = clase;
        btn.appendChild(spn)
        return btn;
    }

    crearBotones(){
        for (const boton of this.botones){
            this.panelElement.appendChild(Botones.crear(boton[0],boton[1]))
        }
    }
}



// Class names
let op = "operador";
let fn = "funcion";
let n = "numero";

// Definicion de los botones "avanzados"
const elementoAvanzado = document.getElementById("avanzado");
const panelAvanzado = new Botones(elementoAvanzado,
    [
        ["x²",op],
        ["x³",op],
        ["x⁻¹",op],
        ["√",op],
        ["∛",op],
        ["^",op],
        ["sen",op],
        ["cos",op],
        ["tan",op],
        ["ENG",fn],
        ["(",n],
        [")",n],
        ["ln",op],
        ["log",op],
        ["RCL",fn]
    ]
    );
panelAvanzado.crearBotones();

// panel de botones "básicos"
const elementoBasico = document.getElementById("basico");
const panelBasico = new Botones(elementoBasico,
    [
        ["7",n],
        ["8",n],
        ["9",n],
        ["DEL",fn],
        ["AC",fn], // raíz cúbica
        ["4",n],
        ["5",n],
        ["6",n],
        ["×",op],
        ["÷",op],
        ["1",n],
        ["2",n],
        ["3",n],
        ["+",op],
        ["-",op],
        ["0",n],
        [".",n],
        ["EXP",op],
        ["Ans",n],
        ["=",op]
    ]
    );
panelBasico.crearBotones();