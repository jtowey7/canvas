function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(200,20,255 );
    noStroke();
  } else {
    fill(255,192,203);
    noStroke();
  }
  ellipse(mouseX, mouseY, 80, 80);
}
