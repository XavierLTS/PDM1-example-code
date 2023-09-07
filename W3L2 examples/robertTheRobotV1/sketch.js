let x, y;

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
}

function draw() {
    x = mouseX;
    y = mouseY;
    background(255);
    head();
    body();
    legs();
}

function head() {
    fill(170);
    // Head
    rect(x, y - 115, 60, 70);
    // Neck
    rect(x, y - 65, 10, 30);
    // Mouth
    arc(x, y - 80, 40, 20, 0, PI, CHORD);
    // Eyes
    fill(207, 250, 23);
    arc(x - 15, y - 100, 20, 30, PI, TWO_PI, CHORD);
    arc(x + 15, y - 100, 20, 30, PI, TWO_PI, CHORD);
    // Antennae
    line(x + 30, y - 120, x + 50, y - 130);
    line(x - 30, y - 120, x - 50, y - 130);
    fill(255, 0, 0);
    circle(x + 50, y - 130, 10);
    circle(x - 50, y - 130, 10);
}

function body() {
    fill(170);
    // Torso
    square(x, y, 100);
    // Left arm
    rect(x + 65, y - 25, 30, 10);
    circle(x + 85, y - 25, 10);
    rect(x + 85, y + 20, 10, 80);
    circle(x + 85, y + 70, 20);
    // Right arm
    rect(x - 65, y - 25, 30, 10);
    circle(x - 85, y - 25, 10);
    rect(x - 85, y + 20, 10, 80);
    circle(x - 85, y + 70, 20);
}

function legs() {
    fill(170);
    // Left leg
    rect(x + 20, y + 65, 10, 30);
    circle(x + 20, y + 85, 10);
    rect(x + 20, y + 130, 10, 80);
    arc(x + 20, y + 170, 30, 20, PI, TWO_PI, CHORD);
    // Right leg
    rect(x - 20, y + 65, 10, 30);
    circle(x - 20, y + 85, 10);
    rect(x - 20, y + 130, 10, 80);
    arc(x - 20, y + 170, 30, 20, PI, TWO_PI, CHORD);
}