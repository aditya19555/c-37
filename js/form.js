class Form {

    constructor(){
   
        this.input=createInput("Name");
        this.greeting= createElement('h3');
        this.button=createButton("Press");
        
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }




    display(){
        
        var title = createElement('h1');
        title.html('** Car Racing Game **');
        title.position(displayWidth/2,0);


   this. input.position(displayWidth/2-50,displayHeight/2);
    this.button.position(displayWidth/2+20,displayHeight/2+50);

this.button.mousePressed(()=>{


    this.input.hide();
   this. button.hide();

   player.name = this.input.value();

    playerCount += 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

   
   this. greeting.html("Welcome !! " + player.name);
   this. greeting.position(130,160); 
})

    }











}