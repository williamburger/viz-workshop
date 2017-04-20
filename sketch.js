function setup() {
  createCanvas(640, 480);
}

function draw() {
  stroke(255, 255, 255, 25);
  if (mouseIsPressed) {
    fill(0);
    rect(mouseX, mouseY, 80, 80);
} else {
  fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  rect(mouseX, mouseY, 80, 80);
}

}
