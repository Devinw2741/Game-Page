function diceRoll(){
    var rolledOne = Math.floor(Math.random()*6)+1;
    var rolledTwo= Math.floor(Math.random()*6)+1;
    var diceTotal = rolledOne + rolledTwo;
    if(diceTotal == 7 || diceTotal == 11){
        document.getElementById("diceOutput").innerHTML="You have won! you rolled a "+ diceTotal;

    }else if(diceTotal == 2 || diceTotal == 3|| diceTotal== 12){
         document.getElementById("diceOutput").innerHTML="You have lost! you rolled a " +diceTotal;
    }else{
         document.getElementById("diceOutput").innerHTML="You still have a chance! Roll again you got a " +diceTotal;
    }
    
    
    
}
