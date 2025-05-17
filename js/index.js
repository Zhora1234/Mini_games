const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: Math.floor(tileCount / 2), y: Math.floor(tileCount / 2) }];
let dx = 0;
let dy = 0;
let food = { x: 0, y: 0 };
let gameInterval;
let score = 0;

const snakeImage = new Image();
snakeImage.src = '../assets/snake-head.png';

function generateFood() {
    let newX, newY;
    do {
        newX = Math.floor(Math.random() * tileCount);
        newY = Math.floor(Math.random() * tileCount);
    } while (snake.some(segment => segment.x === newX && segment.y === newY));
    food.x = newX;
    food.y = newY;
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (dy === 0) { dx = 0; dy = -1; }
            break;
        case 'ArrowDown':
            if (dy === 0) { dx = 0; dy = 1; }
            break;
        case 'ArrowLeft':
            if (dx === 0) { dx = -1; dy = 0; }
            break;
        case 'ArrowRight':
            if (dx === 0) { dx = 1; dy = 0; }
            break;
    }
});

function gameLoop() {
    if (dx === 0 && dy === 0) return;

    const head = { ...snake[0] };
    head.x += dx;
    head.y += dy;

    if (
        head.x < 0 || head.x >= tileCount ||
        head.y < 0 || head.y >= tileCount ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        alert(`Игра окончена! Ваш счет: ${score}`);
        clearInterval(gameInterval);
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const segment of snake) {
        ctx.drawImage(snakeImage, segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText(`Счет: ${score}`, 10, 20);
}

snakeImage.onload = () => {
    generateFood();
    gameInterval = setInterval(gameLoop, 200);
};