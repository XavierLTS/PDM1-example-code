let shore;

function preload() {
    shore = loadSound("assets/53428__digifishmusic__close-mic-shore.wav");
}

function setup() {
    createCanvas(600, 300);
}

function draw() {
    
}

function mouseClicked() {
    if (!shore.isPlaying()) {
        shore.loop();
    } else {
        shore.pause();
    }
}