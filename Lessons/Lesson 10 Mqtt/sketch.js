let foto;

function setup() {
  createCanvas(windowWidth, windowHeight);
  foto = loadImage("download.jpg")
}

function draw() {
  //circle(mouseX, mouseY, 20);
  background(foto);
  let pxl = foto.get(mouseX, mouseY);
  console.log(pxl);
  fill(pxl);
  rect(100, 100, 200, 200);
  image(foto, mouseX, mouseY);
  
}