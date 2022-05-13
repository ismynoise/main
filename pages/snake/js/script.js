const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const backgroundImg = new Image();
backgroundImg.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let boxSize = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * boxSize,
    y: Math.floor((Math.random() * 15 + 3)) * boxSize
};

let snake = [];
snake[0] = {
    x: 9 * boxSize,
    y: 10 * boxSize
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right")
        dir = "left";
    else if (event.keyCode == 38 && dir != "down")
        dir = "up";
    else if (event.keyCode == 39 && dir != "left")
        dir = "right";
    else if (event.keyCode == 40 && dir != "up")
        dir = "down";
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game);
    }
}

function draw() {
    ctx.drawImage(backgroundImg, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "red" : "green";
        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, boxSize * 2.5, boxSize * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * boxSize,
            y: Math.floor((Math.random() * 15 + 3)) * boxSize,
        };
    } else
        snake.pop();

    if (snakeX < boxSize || snakeX > boxSize * 17
        || snakeY < 3 * boxSize || snakeY > boxSize * 17)
        clearInterval(game);

    if (dir == "left") snakeX -= boxSize;
    if (dir == "right") snakeX += boxSize;
    if (dir == "up") snakeY -= boxSize;
    if (dir == "down") snakeY += boxSize;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);

    snake.unshift(newHead);
}

let game = setInterval(draw, 200);