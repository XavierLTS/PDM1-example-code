let x = 0; // The value of x needs to be "remembered" from frame to frame

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    circle(x, height / 2, 40);
    x++;
}
