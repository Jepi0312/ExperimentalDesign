let capture;
//let snak = new p5.Speech();
let lyt = new p5.Speech();
lyt.continuous = true;
lyt.interimResults=true;


lyt.onResult = doStuff;


function setup() {
  createCanvas(500, 500);
  
}



function doStuff()



