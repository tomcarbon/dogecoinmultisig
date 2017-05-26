$(document).ready(function() {
/**************************************************************************
* anbot.js
* it's actually called Address Book Bot
* This the client wrapper attempt for the new tipbot for r/dogecoin - 
* individual stores their own private keys reducing the trust requirement
* on the central server. tcc 20170518
**************************************************************************/
var tempstring;
var username;
var work_address;

$("#anbRegisterScreen"      ).toggle("fast","swing");    // hide this at initialization time
$("#anbAdvancedFeatures"      ).toggle("fast","swing");    // hide this at initialization time
$("#anbInformationScreen"      ).toggle("fast","swing");    // hide this at initialization time
$("#anbTippingScreen"      ).toggle("fast","swing");    // hide this at initialization time


/* first time stuff */
username = getCookie("username");	// grab it and use it
console.log ("client initialization, username from cookies = " + username);
work_address = getCookie("address");	// grab it and use it
console.log ("client initialization, address from cookies = " + work_address);
      var e0_1 = document.getElementById('anbUser1');      
      var e0_2 = document.getElementById('anbUserName');      
      var e1_1 = document.getElementById('anbAddress1');      
      var e1_2 = document.getElementById('anbMyAddress');      
if (username != "") {
        e0_1.innerHTML = username;
        e0_2.innerHTML = username;
}
if (work_address != "") {
        e1_1.innerHTML = work_address;
        e1_2.innerHTML = work_address;
}
else {
	console.info ("no username cookied found, or null value.");
        e0_1.innerHTML = "<not registered>";
        e0_2.innerHTML = " ";
        e1_1.innerHTML = "<not registered>";
        e1_2.innerHTML = "<not registered>";
}









/********************************************************************
* This is the refresh button for the landing spot
* The 'tipping screen'
********************************************************************/
$("#anbBtn01").click(function(){
	//alert("refresh functionality will go here.");
        $("#anbTippingScreen").toggle();
	//$.getJSON("http://www.reddit.com/r/dogecoin/comments/" + id + ".json?", function (data){
	$.getJSON("http://www.reddit.com/r/dogecoin/comments/tomcarbon.json", function (data){
	  $.each(data[1].data.children, function (i, item) {
	    var comment = item.data.body
	    var author = item.data.author
	    var postcomment = '<p>[Author]' + author + '<br>' + comment + '</p>'
	    results.append(postcomment)
		console.info(postcomment);
	  });
	});
console.info("done with anbBtn01");
});

/********************************************************************
* This is the 'get info' button for the landing spot
* The 'information screen'.
********************************************************************/
$("#anbBtn02").click(function(){
//	alert("get info functionality will go here.");
        $("#anbInformationScreen").toggle();
});

/********************************************************************
* This is the create new account button for the addressbookbot
********************************************************************/
$("#anbBtn03").click(function(){
	//alert("new account functionality will go here. User will supply their username (possibly) and their address. There will be a button to quickly create a address/privkey pair for SAVING, etc");
        $("#anbRegisterScreen").toggle();
});
/********************************************************************
* This is the advanced features button
********************************************************************/
$("#anbBtn04").click(function(){
	//alert("Advanced features to go here, such has clearing information, and who knows what else. All the stuff that would make the interface look messy goes here.");
        $("#anbAdvancedFeatures").toggle();
});


/********************************************************************
* This goes to reddit addressbookbot to register/update' button.
********************************************************************/
$("#anbBtn05").click(function(){
        username = $("#anbUserName").val();
	document.cookie = "username=" + username;

        work_address = $("#anbMyAddress").val();
	document.cookie = "address=" + work_address;

	console.info("anbusername = " + username + " and Your Dogecoin Address is " + work_address);

//	username = getCookie("username");
//	console.info("Username retrieved from cookie is: " + username);

//var tt0 = 'https://www.reddit.com/message/compose?to=addressnamebot&subject=+register&message=%2Bwithdraw%20' + v1 + '%20ReplaceMeWithAmount%20doge verify';
var tt0 = 'https://www.reddit.com/message/compose?to=addressbookbot&subject=%2Bregister&message=' + work_address;
        window.open(tt0);
//	alert("now go to the bot to register");
});


/********************************************************************
* Erase my cookies
********************************************************************/
$("#anbBtn06").click(function(){
        var iindex = prompt("This action will remove the two cookies that remember the user_name and address for this site. Do you wish to proceed?", "yes");
	if (iindex == "yes") {
		document.cookie = "username=";
		document.cookie = "address=";
		e0_1.innerHTML = " "
		e0_2.innerHTML = " ";
		e1_1.innerHTML = " ";
		e1_2.innerHTML = " ";
	}
});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //return c.substring(name.length, c.length);
            return c.substring(name.length, c.length) + "\n";
        }
    }
    return "";
}




});

