let mySong;


function preload() {
  soundFormats('mp3');
  song = loadSound("demon_slayer.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  textSize(50)
  song.play();
  song.setVolume(0.5)
}

function draw() {
  background(173, 216, 230);


}
function doSensor(e) {

}