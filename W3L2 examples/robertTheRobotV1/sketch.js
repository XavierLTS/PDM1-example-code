let x, ghost1Y;

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
}

function draw() {
    spiderX = mouseX;
    spiderY = mouseY;
    background(255);
    head();
    body();
    legs();
}

function head() {
    fill(170);
    // Head
    rect(spiderX, spiderY - 115, 60, 70);
    // Neck
    rect(spiderX, spiderY - 65, 10, 30);
    // Mouth
    arc(spiderX, spiderY - 80, 40, 20, 0, PI, CHORD);
    // Eyes
    fill(207, 250, 23);
    arc(spiderX - 15, spiderY - 100, 20, 30, PI, TWO_PI, CHORD);
    arc(spiderX + 15, spiderY - 100, 20, 30, PI, TWO_PI, CHORD);
    // Antennae
    line(spiderX + 30, spiderY - 120, spiderX + 50, spiderY - 130);
    line(spiderX - 30, spiderY - 120, spiderX - 50, spiderY - 130);
    fill(255, 0, 0);
    circle(spiderX + 50, spiderY - 130, 10);
    circle(spiderX - 50, spiderY - 130, 10);
}

function body() {
    fill(170);
    // Torso
    square(spiderX, spiderY, 100);
    // Left arm
    rect(spiderX + 65, spiderY - 25, 30, 10);
    circle(spiderX + 85, spiderY - 25, 10);
    rect(spiderX + 85, spiderY + 20, 10, 80);
    circle(spiderX + 85, spiderY + 70, 20);
    // Right arm
    rect(spiderX - 65, spiderY - 25, 30, 10);
    circle(spiderX - 85, spiderY - 25, 10);
    rect(spiderX - 85, spiderY + 20, 10, 80);
    circle(spiderX - 85, spiderY + 70, 20);
}

function legs() {
    fill(170);
    // Left leg
    rect(spiderX + 20, spiderY + 65, 10, 30);
    circle(spiderX + 20, spiderY + 85, 10);
    rect(spiderX + 20, spiderY + 130, 10, 80);
    arc(spiderX + 20, spiderY + 170, 30, 20, PI, TWO_PI, CHORD);
    // Right leg
    rect(spiderX - 20, spiderY + 65, 10, 30);
    circle(spiderX - 20, spiderY + 85, 10);
    rect(spiderX - 20, spiderY + 130, 10, 80);
    arc(spiderX - 20, spiderY + 170, 30, 20, PI, TWO_PI, CHORD);
}