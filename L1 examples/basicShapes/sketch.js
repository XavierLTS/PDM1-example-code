function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    stroke(255);
    fill(255);
    rectMode(CENTER);
    square(150, 125, 150);
    noStroke();
    fill(0, 0, 255);
    square(250, 175, 150);
}
