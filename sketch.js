var canvas;
var database;
var gameState=0;
var playerCount;
var form, game, player;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var car1Image, car2Image, car3Image, car4Image, ground, track;

function preload(){
  car1Image = loadImage("images/car1.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  car4Image = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.png");
}

function setup(){
    canvas = createCanvas(displayWidth+200,displayHeight+50);
    database=firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
  if(playerCount === 4){
    game.updateState(1);
  }
  
  console.log(gameState);

  if(gameState === 1){
      clear();
    game.play();
  }
}