var  database;
var playerCount;
var gameState = 0;
var allPlayers;

var form,player,game;

var car1,car2,car3,car4, cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-150);

game = new Game();
game.getState();
game.start();

 
}

function draw(){
  background('white');
  console.log(allPlayers);
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState ===1){
  
    game.play();
  }
  
  
  
}

