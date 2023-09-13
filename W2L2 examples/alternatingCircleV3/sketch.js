let x = 0;
let moveAmount = 1;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    circle(spiderX, height / 2, 100);
    if (spiderX < 0 || spiderX > width) {
        moveAmount *= -1;
    }
    spiderX += moveAmount;
}
