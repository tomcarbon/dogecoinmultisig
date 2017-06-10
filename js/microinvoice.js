$(document).ready(function() {
/******************************************************************
* 20170423 tcc
* a wow sunday.
******************************************************************/
//window.alert("Hello from the initialization portion of microinvoice.js. ");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_address;
var work_balance;
var work_unconfirmed_balance;
var work_redeem_script;

//$("#tsNewScreen01"   	).toggle("fast","swing");	// hide this at initialization time
$("#MINewScreen01"  	).toggle("fast","swing");	// hide this at initialization time
$("#MINewScreen02"  	).toggle("fast","swing");	// hide this at initialization time This is the for Mini Invoice  for the user to populate.

/* user presses the Spend button, this opens up the Spend Dialog Box */ 
/*$("#psTogBtn1").click(function(){       // SPEND
        $("#psPayBox").toggle();
});
*/

/* user clicks on the 'Quick Instructions' */
$("#MIQuickInstructions").click(function(){
        $("#MINewScreen01").toggle();
});


var _getVerify = _get("microinvoice");
if(_getVerify[0]){
var tt0 = _getVerify[0];

        console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
        console.info("_getVerify[0] = " + _getVerify[0]);
                    work_address = tt0.slice(0);         // the address

               $("#MIAddress").val(work_address);

	makeMicroInvoice();		

        $("#MINewScreen02").toggle();

    setTimeout(function () {
//        if (address) {
//                $("#walletRefresh").click();
//        }
    }, 2000);

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

/* user clicks on Verify */
/*$("#tsVerifyBtn").click(function(){
        var v1  = document.getElementById("tsRedeemScript").value;
        var redeem_script = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
	window.open(tt0);
});*/

/* user clicks on Reddit (search) Link */
$("#MIRedditBtn").click(function(){
var v1  = document.getElementById("MIAddress").value;
	var tt0 = 'https://www.reddit.com/search?q=%22' + document.location.origin+''+document.location.pathname+  '?payspot='+v1+'#payspot' + '%22';
	window.open(tt0);
});

/* user clicks on Reddit dogetipbot loading Link */
$("#MIRedditLoadBtn").click(function(){
var v1  = document.getElementById("MIAddress").value;
var tt0 = 'https://www.reddit.com/message/compose?to=dogetipbot&subject=withdraw&message=%2Bwithdraw%20' + v1 + '%20ReplaceMeWithAmount%20doge verify';
	window.open(tt0);
});


/*************************************************
**************************************************/
function makeMicroInvoice() {
//var ps_address = document.getElementById("tsAddress").value;
var keys = [];


        if (work_address.length == 34) {
                console.info("A single address and this is correct.");
 //               keys.push(ps_address);
                $("#MIAddress").val(work_address);
	} else {
		var tt1 = "ERROR: Address is not the expected size." + 
			"Length: "   + work_address.length +  " (expected: 34)" ;
		$("#MImultisigPubKeys").removeClass("hidden");
		console.error(tt1);
		alert(tt1);
		return false;
	}


        /***************************************
	* Create the multisig, redeem etc here:
        ****************************************/

	/* here's the URL for this page. */
	$("#MIPageURL").val(document.location.origin+''+document.location.pathname+  '?microinvoice='+work_address+'#microinvoice');
	
	/*****************************************
	* Get and display the balance(s)
	*****************************************/
	setTimeout(function () {
		microinvoice_wallet_balance(work_address,"MIBalance","MIUCBalance");
	}, 750);
}

/* copy address */
var copyTextareaBtn1 = document.querySelector('.js-MItextareacopybtn1');
copyTextareaBtn1.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-MIcopytextarea1');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

/* copy URL */
var copyTextareaBtn2 = document.querySelector('.js-MItextareacopybtn2');
copyTextareaBtn2.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-MIcopytextarea2');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

});


/* get from chain.so, then wait before displaying */
function microinvoice_wallet_balance(multisig, urlName, UCurlName) {
var tt1;
var tt2;
console.info("microinvoice_wallet_balance. Input Address: " + multisig);
	$.ajax ({
		type: "GET",
		url: "https://chain.so/api/v2/get_address_balance/DOGE/" + multisig,
		dataType: "json",
		error: function(data) {
			tt1 = JSON.stringify(data, null, 4);
			console.error("microinvoice_wallet_balance fail: %s",tt1);
		},
		success: function(data) {
			tt1 = JSON.stringify(data, null, 4);
			work_balance = data.data.confirmed_balance;
			work_unconfirmed_balance = data.data.unconfirmed_balance;
			console.info("microinvoice_wallet_balance: " + tt1);
		},
		complete: function(data, status) {
			var tempvar = "Unconfirmed Balance: " + work_unconfirmed_balance; // now set unconfirmed if non-0
			if (parseFloat(work_unconfirmed_balance) > parseFloat("0.00000000") ||
			    parseFloat(work_unconfirmed_balance) < parseFloat("0.00000000")) {
				if (parseFloat(work_unconfirmed_balance) > parseFloat("0.00000000")) {
					var tt1 = "Confirmed Balance: " + parseFloat(work_balance);
				} else {
					var tt1 = "Confirmed Balance: " + parseFloat((parseFloat(work_balance) +
									parseFloat(work_unconfirmed_balance)));
				}
				document.getElementById(urlName).innerHTML = tt1;    // display to HTML
				document.getElementById(UCurlName).innerHTML = tempvar; // display to HTML
				//$("#getWalletUCBalance").removeClass("hidden");
				$(UCurlName).removeClass("hidden");
			} else {
				var tt1 = "Confirmed Balance: " + parseFloat(work_balance);
				document.getElementById(urlName).innerHTML = tt1;    // display to HTML
			}
		}
	});
return true;
}

});   /* EOF */

