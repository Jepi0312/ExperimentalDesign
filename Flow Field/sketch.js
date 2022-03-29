var points = []
var mult = 0.005


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)

  var density = 100;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10))
      points.push(p)
    }
  }
}

function draw() {
  noStroke()
  fill(255)

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
    ellipse(points[i].x, points[i].y, 1)
  }
}


function keyPressed() {
  if (key == '½') {
    save("FlowWave.png");
  }
}
