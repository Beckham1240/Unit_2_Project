"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Beckham Le
   Date:    2/5/20
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//donationTotal stores the total amount of donations
var donationTotal = 0;

//calculates the total amount of donations
donors.forEach(calcSum);

//creates a table that displays the total amount of donors and donation money into the donationSummary div
var summaryTable = "<table>";
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>";
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>";

document.getElementById("donationSummary").innerHTML = summaryTable;

//majorDonors holds the people who donated more than $1000 and sorts them from least to greastest
var majorDonors = donors.filter(findMajorDonors);
majorDonors.sort(donorSortDescending);

//makes the html code to make a table of all of the donors and their info by using callbacks 
var donorTable = "<table>";
donorTable += "<caption>Major Donors</caption>";
donorTable += "<tr>";
donorTable += "<th>Donation</th><th>Donor ID</th>";
donorTable += "<th>Date</th><th>Name</th><th>Address</th>";
donorTable += "<th>Phone</th><th>E-mail</th>";
donorTable += "</tr>";

majorDonors.forEach(writeDonorRow);

donorTable += "</table>";

//displays all of the html code of donorTable into donorTable div
document.getElementById("donorTable").innerHTML = donorTable;



function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

