

// function fjern1() {
//     document.getElementById("boxInmat2").style.fontSize = "0px"
//     document.getElementById("boxInmat3").style.fontSize = "20px"
// }
// function fjern2() {
//     document.getElementById("boxInmat2").style.fontSize = "20px"
//     document.getElementById("boxInmat3").style.fontSize = "0px"
// }


function moveForward1() {
    document.getElementById("Verktøy").style.fontSize = "0px"
    document.getElementById("Verktøy2").style.fontSize = "20px" 
    
}
function moveForward2() {
    document.getElementById("Penn").style.fontSize = "0px"
    document.getElementById("Penn2").style.fontSize = "20px" 
}
function moveForward3() {
    document.getElementById("Papir").style.fontSize = "0px"
    document.getElementById("Papir2").style.fontSize = "20px" 
}
function moveForward4() {
    document.getElementById("Linjal").style.fontSize = "0px"
    document.getElementById("Linjal2").style.fontSize = "20px" 
}
function moveForward5() {
    document.getElementById("Visklær").style.fontSize = "0px"
    document.getElementById("Visklær2").style.fontSize = "20px" 
}

// Alle moveForward: Endrer skriftstørrelse som gir en illusjon på at
//  verktøy/verktøy2 flytter seg til høyre.


function moveBack1() {
   document.getElementById("Verktøy").style.fontSize = "20px"
   document.getElementById("Verktøy2").style.fontSize = "0px"
   
}

function moveBack2() {
    document.getElementById("Penn").style.fontSize = "20px"
    document.getElementById("Penn2").style.fontSize = "0px"
}

function moveBack3() {
    document.getElementById("Papir").style.fontSize = "20px"
    document.getElementById("Papir2").style.fontSize = "0px"
}

function moveBack4() {
    document.getElementById("Linjal").style.fontSize = "20px"
    document.getElementById("Linjal2").style.fontSize = "0px"
}

function moveBack5() {
    document.getElementById("Visklær").style.fontSize = "20px"
    document.getElementById("Visklær2").style.fontSize = "0px"
}



function toggle() {
    if (document.getElementById("box1").style.display == "block") {
       document.getElementById("box1").style.display = "none";
    } else {
        document.getElementById("box1").style.display = "block";
    }
}

console.debug