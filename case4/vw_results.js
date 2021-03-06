"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Beckham Le
   Date:   2/5/20
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//inputs the title into reportHTML variable
var reportHTML = "<h1>" + raceTitle + "</h1>";

//creates a table that displays the candidate names, their amount of votes, and the chart that shows the amount of votes 
//through it looping through the race array
for(var i=0; i<race.length; i++){
   var totalVotes = 0;

   votes[i].forEach(calcSum);

   reportHTML += "<table>";
   reportHTML += "<caption>" + race[i] + "</caption>";
   reportHTML += "<tr><th>Candidate</th><th>Votes</th></tr>";

   reportHTML += candidateRows(i,totalVotes);

   reportHTML += "</table>";
}

//inputs the reportHTML into the beginning part of the section element
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//creates a row of 3 candidate names, parties, and the amount of votes. Then it calculates the percent of the candidate's likeness
//then loops through to make the bar charts of the percent likeness of the candidates
function candidateRows(raceNum, totalVotes){
   var rowHTML = "";
   for(var j=0; j<3; j++){
      var candidateName = candidate[i][j];
      var candidateParty = party[i][j];
      var candidateVotes = votes[i][j];
      var candidatePercent = calcPercent(candidateVotes, totalVotes);

      rowHTML += "<tr>";
      rowHTML += "<td>" + candidateName + " " + "(" + candidateParty + ")" + "</td>";
      rowHTML += "<td>" + candidateVotes.toLocaleString() + " " + "(" + candidatePercent.toFixed(1) + ") </td>";
      for(var k=0; k<candidatePercent; k++){
         rowHTML += createBar(candidateParty);
      }
      rowHTML += "</tr>";
   }
   return rowHTML;
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

//goes through to see if any of these are true and adds the html code to add a piece of the bar into the bar chart if true
function createBar(partyType){
   var barHTML = "";

   if(partyType === "D"){
      barHTML = "<td class='dem'></td>"
   }
   else if(partyType === "R"){
      barHTML = "<td class='rep'></td>"
   }
   else if(partyType === "I"){
      barHTML = "<td class='ind'></td>"
   }
   return barHTML;
}
