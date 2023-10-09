let x = 400; // The value of x needs to be "remembered" from frame to frame
    speed = -5

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);
    circle(width-x, height / 2, 40);
    x=x+speed;
}
