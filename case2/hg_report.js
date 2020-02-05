"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Beckham Le
   Date:   2/4/20
   
   Filename: hg_report.js
	
*/
//html code that's stored in the gameReport variable that makes the title heading, the heading for the creator, the logo, and descriptions
//and is then inputted into the article 
var gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt'" + itemID + "' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingsSum = 0;

//the number of customer ratings
var ratingsCount = ratings.length;

//adds all of the ratings in the array together into the ratingSum variable
for(var i=0; i<ratings.length; i++){
   ratingsSum += ratings[i];
}

//finds the average of the ratings
var ratingsAvg = ratingsSum / ratingsCount;

var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars " + "(" + ratingsCount + " reviews)</h2>";

//creates 3 speech bubbles of the first 3 ratings in the ratings array, with their personal info, review, and rating of the product
for(var i=0; i<3; i++){
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";
   for(var x=0; x<ratings[i]; x++){
      ratingReport += "<img src='hg_star.png' />";
   }
   
   ratingReport += "</td></tr></table>"
   ratingReport += ratingSummaries[i];
   ratingReport += "</div>"
}

//inputs ratingReport variable in the aside element to display the 3 customer reviews
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
