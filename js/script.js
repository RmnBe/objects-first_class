'use strict';

function Phone(brand, price, color, screen, soft) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.soft = soft;
};
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". " + this.brand + " use " + this.soft + " software and screen size is " + this.screen + ".");
};
var iPhone6S = new Phone("Apple", 2250, "silver", "4.7 inch", "iOS");
var samsungGalaxyS6= new Phone("Samsung", 1800, "black", "5.1 inch", "Android");
var onePlusOne = new Phone("OnePlus", 1500, "white", "5.5 inch", "Android");
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

