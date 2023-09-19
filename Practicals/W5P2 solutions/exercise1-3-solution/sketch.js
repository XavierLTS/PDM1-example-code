let player = {
    x: 50,
    y: 50,
    size: 50
};

let obstacle = {
    x: 150,
    y: 100,
    width: 100,
    height: 200
}

function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background(255);
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    fill(0, 255, 0);
    square(player.x, player.y, player.size);
    if (keyIsPressed) {
        processMove();
    }
}

/**
 * Moves the player if an arrow key has been pressed and the block can move
 */
function processMove() {
    if (keyCode === RIGHT_ARROW && canMove(0, 1, 0, 0)) {
        player.x += 1;
    }
    else if (keyCode === LEFT_ARROW && canMove(1, 0, 0, 0)) {
        player.x -= 1;
    }
    else if (keyCode === UP_ARROW && canMove(0, 0, 1, 0)) {
        player.y -= 1;
    }
    else if (keyCode === DOWN_ARROW && canMove(0, 0, 0, 1)) {
        player.y += 1;
    }
}

/**
 * Checks if the player can move in the selected direction
 * @param {number} left 1 if the user wants to move left, 0 otherwise
 * @param {number} right 1 if the user wants to move right, 0 otherwise 
 * @param {number} up 1 if the user wants to move up, 0 otherwise
 * @param {number} down 1 if the user wants to move up, 0 otherwise
 * @returns {boolean} True if the block can move in the selected direction
 */
function canMove(left, right, up, down) {
    return player.y + player.size <= obstacle.y - down || player.y >= obstacle.y + obstacle.height + up
        || player.x + player.size <= obstacle.x - right || player.x >= obstacle.x + obstacle.width + left;
}