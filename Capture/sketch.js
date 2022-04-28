let capture;
var snak = new p5.Speech();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204,255,0);
  capture = createCapture(VIDEO);
  capture.size(160,120);
  capture.hide();
}

function draw() {
  //circle(mouseX, mouseY, 20);
  let frame = capture.get(0,0,160,120);
  frame.resize(3,3);
  let pixl = frame.get(1,1);
  background(pixl);
  
  if(pixl[0] > pixl[2]){
    background("red")
  }
  else{
    background("black")
  }

}

function touchStarted() {
  let talen = "The mouse is at " + mouseX;
  snak.speak(talen);
}




