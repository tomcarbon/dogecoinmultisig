$(document).ready(function() {
/**************************************************************************
* anbotR.js
* registration for Address Book Bot
**************************************************************************/
var tempstring;
var username;
var work_address;

$("#anbRegisterScreenR"      ).toggle("fast","swing");    // hide this at initialization time

/* first time stuff */
/* nil */


/********************************************************************
* This is the create new account button for the addressbookbot
********************************************************************/
$("#anbBtn03R").click(function(){
	//alert("new account functionality will go here. User will supply their username (possibly) and their address. There will be a button to quickly create a address/privkey pair for SAVING, etc");
        $("#anbRegisterScreenR").toggle();
});


/********************************************************************
* This goes to reddit addressbookbot to register/update' button.
********************************************************************/
$("#anbBtn05R").click(function(){
//        username = $("#anbUserNameR").val();

        work_address = $("#anbMyAddressR").val();

	console.info("Your Dogecoin Address is " + work_address);
	//console.info("anbusernameR = " + username + " and Your Dogecoin Address is " + work_address);

var tt0 = 'https://www.reddit.com/message/compose?to=addressbookbot&subject=%2Bregister&message=' + work_address;
        window.open(tt0);
});





});

