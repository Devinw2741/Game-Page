function playRPS(){
    
    var decision = document.getElementById("userInput");
    var hand = decision.value.toLowerCase();
    var cp = randomrps();
    document.getElementById("userOutput").innerHTML = "User chose " + hand;
    document.getElementById("computerOutput").innerHTML = "Computer chose " + cp;
    
    if(hand == "paper" && cp == "rock"){
        document.getElementById("rpsOutput").innerHTML="You've Won!";
    }
    else if(hand == cp){
        document.getElementById("rpsOutput").innerHTML="Thats a tie, play again!";
    }
    else if(hand == "rock" && cp == "scissors"){
        document.getElementById("rpsOutput").innerHTML="You win!";
    }
    else if(hand == "scissors" && cp == "paper"){
        document.getElementById("rpsOutput").innerHTML="You've won!";
    }else{
        document.getElementById("rpsOutput").innerHTML="Youve lost!";
    }
}
    function randomrps(){
        var num = Math.floor(Math.random()*3)+1;
        var comphand;
        if(num == 1)
       {
           comphand = "paper";
       }else if (num == 2){
           comphand = "rock";
       }
       else{
           comphand = "scissors";
       }
       
        return comphand;
    }
