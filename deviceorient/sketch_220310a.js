let val = 100;
let tillad;
let valZ, valX, valY;

var song;
var fft;

var alpha = 0;
var beta = 0;
var gamma = 0;


function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound("demon_slayer");
}

function touchStarted() {
  getAudioContext().resume()
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(173, 216, 230);
  textSize(50);
  song.play();
  song.setVolume(0.5);

}

function draw() {
  background(173, 216, 230);
  circle(
  width / 2 + (width / 2 / 90) * gamma,
  height / 2 + (height / 2 / 90) * beta,
  20);

  text("Play", width/2, height/2);


  

}
function doSensor(e) {
  valZ = e.alpha;
  valX = e.beta;
  valY = e.gamma;
  
  alpha = event.alpha;
  beta = event.beta;
  gamma = event.gamma;
  
  val = Math.floor(val);
}