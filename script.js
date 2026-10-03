const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 400;
canvas.height = 600;

// Game variables
let score = 0;
let gameRunning = false;
let player;
let obstacles = [];
let frameCount = 0;

// Controls
let keys = {
    left: false,
    right: false
};

// Player class
class Player {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 50;
        this.speed = 5;
        this.color = '#00d2ff';
    }

    update() {
        if (keys.left && this.x > 0) {
            this.x -= this.speed;
        }
        if (keys.right && this.x < canvas.width - this.width) {
            this.x += this.speed;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0; // Reset shadow for performance
    }
}

// Obstacle class
class Obstacle {
    constructor() {
        this.width = Math.random() * 40 + 20; // Random width between 20-60
        this.height = 20;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = -this.height;
        this.speed = Math.random() * 3 + 2; // Random speed between 2-5
        this.color = '#ff0055';
    }

    update() {
        this.y += this.speed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }
}

// Event Listeners
window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
});

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', startGame);

function startGame() {
    // Reset game state
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.add('hidden');
    score = 0;
    document.getElementById('scoreValue').innerText = score;
    gameRunning = true;
    
    player = new Player();
    obstacles = [];
    frameCount = 0;
    
    animate();
}

function gameOver() {
    gameRunning = false;
    document.getElementById('finalScore').innerText = score;
    document.getElementById('gameOverScreen').classList.remove('hidden');
}

function animate() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw player
    player.update();
    player.draw();

    // Spawn obstacles
    if (frameCount % 40 === 0) {
        obstacles.push(new Obstacle());
    }

    // Update and draw obstacles
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].update();
        obstacles[i].draw();

        // Collision detection
        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameOver();
        }

        // Remove obstacles that go off screen and increase score
        if (obstacles[i].y > canvas.height) {
            obstacles.splice(i, 1);
            i--;
            score += 10;
            document.getElementById('scoreValue').innerText = score;
        }
    }

    frameCount++;
    requestAnimationFrame(animate);
}
