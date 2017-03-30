$(document).ready(function() {
/******************************************************************
* 20170325 tcc
* wankee doodle
******************************************************************/
//window.alert("Hello from the initialization portion of miniinvoice.js. ");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_pubkey1;
var work_pubkey2;
var work_pubkey3;
var work_pubkey4;
var work_balance = [];
var work_unconfirmed_balance = [];
var work_redeem_script;

/*
$("#qsNewScreen01"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsPayBox"   	).toggle("fast","swing");	// hide this at initialization time

$("#qsMiniPayBox1"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox2"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox3"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox4"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox5"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox6"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox7"   	).toggle("fast","swing");	// hide this at initialization time
*/



var _getVerify = _get("miniinvoice");
if(_getVerify[0]){
var tt0 = _getVerify[0];

        console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
        console.info("_getVerify[0] = " + _getVerify[0]);
        /*            var work_pubkey1 = tt0.slice(0,130);         // first key
                    var work_pubkey2 = tt0.slice(130,260);       // second key
                    var work_pubkey3 = tt0.slice(260,390);       // third key
                    var work_pubkey4 = tt0.slice(390);           // fourth key
	*/
/*
	document.getElementById("qsc1").checked = false;		// we don't want to sort
	$("#qsmultisigPubKeys").addClass("hidden");
	makeQuatroShibe();		// it'll have NO sorting to preserve unsorted intent by the users.

    setTimeout(function () {
//        if (address) {
//                $("#walletRefresh").click();
//        }
    }, 2000);
*/


}


function _get(value) {
        var dataArray = (document.location.search).match(/(([a-z0-9\_\[\]]+\=[a-z0-9\_\.\%\@]+))/gi);
        var r = [];
        if(dataArray) {
                for(var x in dataArray) {
                        if((dataArray[x]) && typeof(dataArray[x])=='string') {
                                if((dataArray[x].split('=')[0].toLowerCase()).replace(/\[\]$/ig,'') == value.toLowerCase()) {
                                        r.push(unescape(dataArray[x].split('=')[1]));
                                }
                        }
                }
        }
        return r;
}

/* user presses the next button, this opens up the next Dialog Box */ 
$("#psMiniInvoiceNextBtn").click(function(){       // SPEND
       console.info("miniinvoice.js in the house."); 
});

});   /* EOF */

