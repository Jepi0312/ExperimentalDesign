var song;

var fft;
var button;
//var volhistory = [];
//var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  soundFormats('mp3');
  song = loadSound("demon_slayer.mp3");
}

function setup() {
  createCanvas(1900,1080);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('Play/Pause');
  
  button.mousePressed(toggleSong);
  textSize(40)
  song.play();
  song.setVolume(1)
  fft = new p5.FFT(0.9, 64);
  //w = width / 64;
}

function draw() {
  background(0);
  //text(" rad", width/2, height/4);
  text("JEPI BEATS RADIO STATION", width/4, height/4);
  text("Demon Slayer", width/2, height/2);
  //text("Radio", width/2, height/2);
  var spectrum = fft.analyze();
  
  noStroke();
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 250, 20);
    fill(47, 47, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);

    stroke(i, 255, 255);
    line(0, 0, x, y);
    
    //enable for random colors
    //var r = random(255); // r is a random number between 0 - 255
    //var g = random(100,200); // g is a random number betwen 100 - 200
    //var b = random(100); // b is a random number between 0 - 100
    //var a = random(200,255); // a is a random number between 200 - 255
    //fill(r, g, b, a);
    //rect(200,200,100,100);

    //Enable for circle in center
    //vertex(x, y);


    // Enable for line
    //var y = map(amp, 0, 256, height, 0);
    //fill(i, 255, 255);
    //rect(i * w, y, w - 2, height - y);
  }
  endShape();

  //stroke(255);

}

function doSensor(event) {
  let beta = event.beta;
  if (Math.abs(beta) > 160) {
    song.pause();
  } else {
    if (song.isPlaying() == false) {
        //song.play();
    } 
  }
}

function touchStarted() {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
    .then((permissionState) => {
      if (permissionState  === "granted") {
        window.addEventListener("deviceorientation", doSensor, false);
      }
    })
    .catch(console.error);
  } else {
    window.addEventListener("deviceorientation", doSensor, false);
  }
}

