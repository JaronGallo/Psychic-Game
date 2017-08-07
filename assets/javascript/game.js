// function makeid() {
//   var text = "";
//   

// document.getElementsByTagName('wins')[0].innerHTML = text;
//   

window.onload = function() {


//generate letter

 //Change formula

  
var wins = 0;

var losses = 0;
var soFar = [];

var letter = document.getElementById('change');
var left = document.getElementById('left');
var helper = document.getElementById("losses");
var counter = 15;




 var guess = document.body.onkeypress = function(event){
        
        document.getElementById("change").innerHTML = 
        String.fromCharCode(event.keyCode);
      
        var comp = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
        );

        // if else statement
        var Newone = String.fromCharCode(event.keyCode);

        if(letter.innerHTML===comp) {
          
          document.getElementById("wins").innerHTML=wins++,
          alert("You win"),
          counter = 15;
          
        }

        else if(left.innerHTML<= 0){
          document.getElementById("losses").innerHTML=losses+1;
          counter = 15;
          
                   
          



        }

        else {
          soFar.push(Newone);
          document.getElementById("soFar").innerHTML=soFar
          console.log("wrong");
          console.log(soFar);
          console.log(comp)
          document.getElementById("left").innerHTML=counter--;
          }


  }




}


	// var h = "h"
	// var userText = document.getElementById("change");
	// var compGuess = "abcdefghijklmnopqrstuvwxyz";

	// for (var i = 0; i < 1; i++){
 //    text += compGuess.charAt(Math.floor(Math.random() * compGuess.length));
 
// }






