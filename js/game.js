class Game{

    constructor(){
    
    }
    
    getState(){
    
    database.ref('gamestate').on("value",function(data){
        gameState = data.val();
    })
    
    }
    
    update(state){
    database.ref('/').update({
        gamestate : state
    })
    }
    
    start(){
        if(gameState === 0){
        player = new Player;
        player.getCount();
        form = new Form();
        form.display();
        }
        car1 = createSprite(200,200);
        car2 = createSprite(400,200);
        car3 = createSprite(500,200);
        car4 = createSprite(600,200);

        cars = [car1,car2,car3,car4];
       
    } 

    play(){

        form.hide();
        textSize(30);
        text("Game Start" , 120,100);

        Player.getPlayerInfo();


        if(allPlayers !== undefined){
            var index = 0;
            var x = 200;
            var y =0;
            
           
        for(var plr in allPlayers){
            index = index + 1;
            x = x + 200;
             y = displayHeight - allPlayers[plr].distance;
            cars[index - 1].x = x; 
            cars[index - 1].y = y;
            if(index ===  player.index){
                cars[index - 1].shapeColor='red';
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y;
            }
        
        }
        }

if(keyDown(UP_ARROW) && player.index !== null){
    player.distance += 50;
    player.update();
}


drawSprites();


    }
    
    
    }