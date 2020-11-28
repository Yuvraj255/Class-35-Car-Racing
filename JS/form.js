class Form{
    constructor(){

    }

    display(){
        var title = createElement("H1");
        title.html("Car Racing Game");
        title.position(430,0);

        var input = createInput("name");
        input.position(430,160);

        var button = createButton("Start");
        button.position(450,200);
       
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            player.update(name);
            playerCount +=1;
            player.updateCount(playerCount);

            var greeting = createElement("H3");
            greeting.html("Hello"+name);
            greeting.position(430,160);

        })
    }

}

