const diameter = 40;
let spiderX = [];
let spiderY = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    spiderX.push(mouseX);
    spiderY.push(mouseY);
    if (spiderX.length > 100) {
        spiderX = spiderX.slice(spiderX.length - 100);
        spiderY = spiderY.slice(spiderY.length - 100);
    }
    for (let i = 0; i < spiderX.length; i++) {
        const alpha = 255 * (i / 100);
        const r = (spiderX[i] / width) * 255;
        const b = (spiderY[i] / height) * 255;
        fill(r, 255, b, alpha);
        circle(spiderX[i], spiderY[i], diameter);
    }
}