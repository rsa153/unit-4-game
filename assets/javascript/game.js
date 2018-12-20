$(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19);
    $("#random-number").text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var yourTotal= 0; 
    var wins= 0;
    var losses = 0;

    $("#number-wins").text("Wins: " + wins);
    $("#number-losses").text("Losses: " + losses);


function reset(){
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)

    $("#random-number").text(Random);

    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
} 

function youWon(){
    alert("You won!");
      wins++; 
      $("#number-wins").text(wins);
      reset();
      yourTotal = 0;
    console.log(yourTotal);
    $("#your-score").text(yourTotal);
}

function youLost(){
    alert ("You lose!");
      losses++;
      $("#number-losses").text(losses);
      reset();
      yourTotal = 0;
    console.log(yourTotal);
    $("#your-score").text(yourTotal);
}

$("#gem1").on("click", function() {
    yourTotal = yourTotal + num1;
    console.log("Your Score  " + yourTotal);

    $("#your-score").text(yourTotal); 
          
        if (yourTotal === Random) {
          youWon();
        }
        else if (yourTotal > Random) {
          youLost();
        }   
  })  

  $("#gem2").on("click", function() {
    yourTotal = yourTotal + num2;
    console.log("Your Total= " + yourTotal);

    $("#your-score").text(yourTotal); 
          
        if (yourTotal === Random) {
            youWon();
        }
        else if (yourTotal > Random) {
            youLost();
        }   
  })  

  $("#gem3").on("click", function() {
    yourTotal = yourTotal + num3;
    console.log("Your Total= " + yourTotal);

    $("#your-score").text(yourTotal); 
          
        if (yourTotal === Random) {
            youWon();
        }
        else if (yourTotal > Random) {
            youLost();
        }   
  })  

  $("#gem4").on("click", function() {
    yourTotal = yourTotal + num4;
    console.log("Your Total= " + yourTotal);

    $("#your-score").text(yourTotal); 
          
        if (yourTotal === Random) {
            youWon();
        }
        else if (yourTotal > Random) {
            youLost();
        }   
  })

})

