//this set the canvas dimensions
let canvasHeight  = 500;
let canvasLength = 600;

// this set the ball values
let ballX = canvasLength/2;
let ballY = canvasHeight/2;
let ballRay = 20;

let ballXspeed = -3;
let ballYspeed = 4;

//this set the racket values
let rackW = 7;
let rackH = 50;
let rackX = 30;
let rackY = canvasHeight/2 - rackH/2;

let rackSpeed = 3;
let enemyRackSpeed = 3;

// this set specifically the racket x and y from the enemy
let enemyRackX = canvasLength - rackW - rackX;
let enemyRackY = canvasHeight/2 - rackH/2;

// this are the points
let myPoints = 0;
let enemyPoints = 0;


function setup() {
  createCanvas(canvasLength, canvasHeight);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  collBallCanvas();
  showRacket(rackX, rackY);
  showRacket(enemyRackX, enemyRackY);
  moveMyRacket();
  collBallRack();
  collBallRackEnemy();
  moveEnemyRack();
  showPoints();
  countPoints();
}
function showBall(){
  circle(ballX, ballY, ballRay);
}

function moveBall(){
  ballX += ballXspeed;
  ballY += ballYspeed;
}

function collBallCanvas(){
  if (ballX <= 0 || ballX >= canvasLength) {
    ballX = canvasLength/2;
    ballXspeed *= -1;}
  
  if (ballY <= 0 || ballY >= canvasHeight){
    ballYspeed *= -1}
}

// pay attention to the x and y values there
function showRacket(x,y){
  rect(x, y, rackW, rackH);
}

function moveMyRacket(){
  if (keyIsDown(87)){
    rackY -= rackSpeed;
  }
  if (keyIsDown(83)){
    rackY += rackSpeed;
  }
}

//im gonna try to create the collision here

function collBallRack(){
  if (ballY >= rackY && 
      ballY <= rackY + rackH && 
      ballX <= rackX + rackW){
    ballXspeed *= -1;
  }
}

function collBallRackEnemy(){
  if (ballY >= enemyRackY && 
      ballY <= enemyRackY + rackH && 
      ballX >= enemyRackX){
    ballXspeed *= -1;
  }
}

function moveEnemyRack(){
  if (enemyRackY >= ballY){
    enemyRackY -= enemyRackSpeed;
  }
  if (enemyRackY <= ballY){
    enemyRackY += enemyRackSpeed;
  }
}

function showPoints(){
  fill(255);
  textSize(15);
  text(myPoints,100,50);
  text(enemyPoints, canvasLength - 100, 50);
}

function countPoints(){
  if (ballX + ballXspeed <= 0){
    enemyPoints += 1;
  } 
  if (ballX + ballXspeed >= canvasLength){
    myPoints += 1;
  }
}