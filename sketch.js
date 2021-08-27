let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
function setup() {
  createCanvas(800, 400);
  player = new Player();
}

function preload() {
  bgImg = loadImage("background.png");
  playerImg = loadImage("player.gif");
  obsImg = loadImage("obstacle.png");
}

function draw() {
  text("zoo hair", 10, 30
  
  );
  background(bgImg);
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      strokeWeight(5);
      stroke("black");
      fill(25, 0, 255);
      textSize(100);
      text("GAME OVER", width / 2 - 300, height / 2);
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
