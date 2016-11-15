$(document).ready(function() {
/******************************************************************
* 20160930 tcc
* a wow
******************************************************************/
//window.alert("Hello from the initialization portion of banksuite.js. ");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_balance = [];
var work_unconfirmed_balance = [];

/* 01 Let's Go! */ 
$("#rb01").click(function(){
        $("#rb01").addClass("hidden");
        $("#rBox01").removeClass("hidden");
});

/* 02 Good */ 
$("#rb02").click(function(){
        $("#rBox01").addClass("hidden");
        $("#rBox02a").removeClass("hidden");		// yeah good for you
        $("#rBox02").removeClass("hidden");
});

/* 03 so-so */ 
$("#rb03").click(function(){
        $("#rBox01").addClass("hidden");
        $("#rBox02").removeClass("hidden");
        $("#rBox02b").removeClass("hidden");		// bummer, dude
});

/* 04 rather not */ 
$("#rb04").click(function(){
        $("#rBox01").addClass("hidden");
        $("#rBox02").removeClass("hidden");
        $("#rBox02b").removeClass("hidden");		// bummer, dude
});


/* 05 goes to box 4*/ 
$("#rb05").click(function(){
        $("#rBox02a").addClass("hidden");
        $("#rBox02b").addClass("hidden");
        $("#rBox02").addClass("hidden");
        $("#rBox04").removeClass("hidden");	//  
});
/* 05a goes to box 4*/ 
$("#rb05a").click(function(){
        $("#rBox02a").addClass("hidden");
        $("#rBox02b").addClass("hidden");
        $("#rBox02").addClass("hidden");
	alert("I think you meant 'yes'");
        $("#rBox04").removeClass("hidden");	//  
});

/* 06 uncertainty speech */ 
$("#rb06").click(function(){
        $("#rBox02a").addClass("hidden");
        $("#rBox02b").addClass("hidden");
        $("#rBox02").addClass("hidden");
        $("#rBox03").removeClass("hidden");
});

/* 07 ok, let's go to box 4 */ 
$("#rb07").click(function(){
        $("#rBox03").addClass("hidden");
        $("#rBox04").removeClass("hidden");	//  
});

/* 08  nope. goes to box 4 */
$("#rb08").click(function(){
        $("#rBox03").addClass("hidden");
	var tt0 = "Ramin... you definitely meant to click 'yes'...\n" + 
			"Proceeding...";
	alert(tt0);
        $("#rBox04").removeClass("hidden");	//  
});

/* 09 help */
$("#rb09").click(function(){
	alert("Sorry, this feature is temporarily disabled, Ramin.");
});

/* 10 watched the video twice! */
$("#rb10").click(function(){
        $("#rBox04").addClass("hidden");
        $("#rBox05").removeClass("hidden");	//  
});

/* 11 open google email in a new window */
$("#rb11").click(function(){
        var tt1 = "https://mail.google.com/mail/u/0/#inbox?compose=new";
        window.open(tt1);
});

/* 12 failboats */
$("#rb12").click(function(){
	alert("you can do this, Ramin! Keep Trying!");
});




});   /* EOF */

