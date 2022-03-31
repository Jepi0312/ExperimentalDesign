//visual variables
var points = []
var mult = 0.005


//song variables
var song;
var fft;
var button;

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
  button = createButton('Play/Pause');
  button.center();

  button.mousePressed(toggleSong, changeBG);
  textSize(40)
  song.play();
  song.setVolume(1)
  fft = new p5.FFT(0.9, 64);
  //w = width / 64;


  createCanvas(windowWidth, windowHeight);
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)
  colorMode(HSB, 200)



  var density = 100;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10))
      points.push(p)
    }
  }
}

function changeBG() {
  var val = random(255);
  background(val);
}

function draw() {
  background(0)
  noStroke()
  fill(255)
  

  text("JEPI BEATS RADIO STATION", width/4, height/4);
  text("Demon Slayer", width/4, height/2);
  
  var spectrum = fft.analyze();
  beginShape();
  for (var i = 0; i < points.length; i++) {
    

    //Adds colors
    var r = map (points[i].x, 0, width, 50, 255)
    var g = map (points[i].y, 0, height, 50, 255)
    var b = map (points[i].x, 0, width, 255, 50)
    //Adds alpha
    var alpha = map(dist(width / 2, height / 2, points
    [i].x, points[i].y), 0, 300, 255, 0)

    fill(r, g, b, alpha)


    var angle = map(noise(points[i].x * mult, points[i].
      y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))

    //Adds a circle and limits within
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 300)
    ellipse(points[i].x, points[i].y, 4)
  }
  endShape();
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

function keyPressed() {
  if (key == '½') {
    save("FlowWave.png");
  }
}