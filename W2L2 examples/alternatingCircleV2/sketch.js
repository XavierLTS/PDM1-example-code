let x = 0;
let movingRight = true;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    circle(spiderX, height / 2, 100);
    if (movingRight && spiderX < width) {
        spiderX++;
    }
    else if (!movingRight && spiderX > 0) {
        spiderX--;
    }
    else {
        movingRight = !movingRight;
    }
}
