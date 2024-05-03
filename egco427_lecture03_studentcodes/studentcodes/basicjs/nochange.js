// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
cost = 0;
// Compute the cost
 // var totalCost = (3.45*falserench+2.85*cl)
 var french = (document.getElementById("french").value);
 var Cream = (document.getElementById("Cream").value);
 var Col = (document.getElementById("Col").value);
 if( french >= 0 && Cream >= 0 && Col >= 0){
   cost += document.getElementById("french").value * 3.49
   cost += document.getElementById("Cream").value * 3.95
   cost += document.getElementById("Col").value * 4.59
  document.getElementById("cost").value = cost.toFixed(2)
 } else{
    alert("Invalid input");
  }
  //totalCost = xxx
}  //* end of computeCost

