 

window.onload = function() {

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
        
        var Newone = String.fromCharCode(event.keyCode);
        // if else statement
        
        if(letter.innerHTML===comp) {
        document.getElementById("wins").innerHTML=wins++,
        alert("You win"),
        counter = 15;
        } 
        else if(left.innerHTML<= 0){
        document.getElementById("losses").innerHTML=losses+1;
        // When you lose, the counter resets
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








