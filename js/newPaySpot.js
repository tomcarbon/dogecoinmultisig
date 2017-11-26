$(document).ready(function() {
/**************************************************************************
* newPaySpot.js
* Making a new PaySpot: supply a dogecoin address and make a payspot.
**************************************************************************/
var work_address;


/********************************************************************
* reserved for later
********************************************************************/
//$("#npsRegisterScreenR"      ).toggle("fast","swing");    // hide this at initialization time
//$("#npsBtn03R").click(function(){
//        $("#npsRegisterScreenR").toggle();
//});


/********************************************************************
* This goes to reddit addressbookbot to register/update' button.
********************************************************************/
$("#npsBtn05R").click(function(){

        work_address = $("#npsMyAddressR").val();

	console.info("Your Dogecoin Address is " + work_address);

        var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+work_address+'#payspot';

        window.open(tt0);
});





});

