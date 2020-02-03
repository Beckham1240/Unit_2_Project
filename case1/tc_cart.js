"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Beckham Le
   Date:   2/3/20
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

//inserts the html code to create a table with the headings in the variable cartHTML
var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th>";
cartHTML += "<th>Description</th>";
cartHTML += "<th>Price</th>";
cartHTML += "<th>Qty</th>";
cartHTML += "<th>Total</th>";
cartHTML += "</tr>";

//loops through the whole item array and then creates a row with table data boxes with the image of the item, description of the item,
//the price of it, and the amount they want for each item. It also determines the cost by multiplying the price by the quantity of the item
// and then adds that in the orderTotal for each item 
for(var i=0; i < item.length; i++){
   cartHTML+= "<tr>";
   cartHTML+= "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'" + "/></td>";
   cartHTML+= "<td>" + itemDescription[i] + "</td>";
   cartHTML+= "<td>" + "$" + itemPrice[i] + "</td>";
   cartHTML+= "<td>" + itemQty[i] + "</td>";

   var itemCost = itemPrice[i] * itemQty[i];

   cartHTML+= "<td>" + "$" + itemCost + "</td></tr>";

   orderTotal += itemCost;
}

//inputs the orderTotal into the html code of cartHTML
cartHTML+= "<tr>";
cartHTML+= "<td colspan='4'>Subtotal</td>";
cartHTML+= "<td>" + "$" + orderTotal + "</td>";
cartHTML+= "</tr>";
cartHTML+= "</table>";

//inserts the html code of the cartHTML variable into the div with id "cart"
document.getElementById("cart").innerHTML = cartHTML;

