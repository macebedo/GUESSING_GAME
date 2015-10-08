// JavaScript Document
function inputValidate() {
    var entry = document.getElementById("inputNum").value;
        if((entry >=1) && (entry <= 999)) {
            game();
        }
        else { alert("X - Enter number from 1 - 999"); 
               }
}
function game() {
entry = document.getElementById("inputNum").value;    
var output1=document.getElementById("p1");
var output2=document.getElementById("p2");
var line2 = "";
// Start of loop

for (ctr=1; ctr <= 10; ctr++) { //Begin loop
  //  var playersGuess=prompt("Take a guess from 1 to 999", ""); 
	var x=Math.floor(Math.random()*999)+1;
		// Hints:
			if (x > entry) {
				line2+=ctr + " - Guessed Number: " + x +"  The secret number is LESSER<br />";
				output1.innerHTML="<p>Number of attemps: " + ctr + " of 10 </p>";
				output2.innerHTML="<p>" + line2 + "</p>"; }         
			else if (x < entry) {
				line2+=ctr + " - Guessed Number: " + x +" The secret number is GREATER<br />";
				output1.innerHTML="Number of attemps: " + ctr + " of 10"; 
				output2.innerHTML="<p>" + line2 + "</p>"; }
			else if (x==entry) {
				line2+=ctr + " - You win! I got the secret number: " + x + "<br />";
				output1.innerHTML="Number of attemps: " + ctr + " of 10";
				output2.innerHTML="<p>" + line2 + "</p>";	
				break; }
	if (ctr==10) {	
				line2+=" The User wins. The secret number is " + entry + ".<br />";
				output1.innerHTML="Number of attemps: " + ctr + " of 10";
			output2.innerHTML="<p>" + line2 + "</p>"; } //End loop
}
}