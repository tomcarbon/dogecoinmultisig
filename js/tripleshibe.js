$(document).ready(function() {
/******************************************************************
* 20161009 tcc
* snork love
* snork love
* snork love
******************************************************************/
//window.alert("Hello from the initialization portion of tripleshibe.js. ");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_pubkey1;
var work_pubkey2;
var work_pubkey3;
var work_balance;
var work_unconfirmed_balance;
var work_redeem_script;

$("#tsNewScreen01"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsPayBox"   	).toggle("fast","swing");	// hide this at initialization time

/* user presses the Spend button, this opens up the Spend Dialog Box */ 
$("#tsTogBtn1").click(function(){       // SPEND
        $("#tsPayBox").toggle();
});


var _getVerify = _get("tripleshibe");
if(_getVerify[0]){
var tt0 = _getVerify[0];

        console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
        console.info("_getVerify[0] = " + _getVerify[0]);
                    var work_pubkey1 = tt0.slice(0,130);         // first key
                    var work_pubkey2 = tt0.slice(130,260);       // second key
                    var work_pubkey3 = tt0.slice(260);           // third key

               $("#tsPubKey1").val(work_pubkey1);
               $("#tsPubKey2").val(work_pubkey2);
               $("#tsPubKey3").val(work_pubkey3);

	$("#tsmultisigPubKeys").addClass("hidden");
	makeTripleShibe();		// it'll have NO sorting to preserve unsorted intent by the users.

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
$("#tsVerifyBtn").click(function(){
        var v1  = document.getElementById("tsRedeemScript").value;
        var redeem_script = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
	window.open(tt0);
});

/* user clicks on Reddit Link */
$("#tsRedditBtn").click(function(){
var v1  = document.getElementById("tsRedeemScript").value;
var bs_pubKey1 = document.getElementById("tsPubKey1").value;             // retrieve the pubkeys from the html
var bs_pubKey2 = document.getElementById("tsPubKey2").value;             // retrieve the pubkeys from the html
var bs_pubKey3 = document.getElementById("tsPubKey3").value;             // retrieve the pubkeys from the html
        var redeem_script = v1.trim();
	var tt0 = 'https://www.reddit.com/search?q=%22' + document.location.origin+''+document.location.pathname+  '?tripleshibe='+bs_pubKey1+bs_pubKey2+bs_pubKey3+'#tripleshibe' + '%22';
	window.open(tt0);
});

/* user clicks on PaySpot */
$("#tsPaySpotBtn").click(function(){
        var v1  = document.getElementById("tsAddress").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user clicks on Next for generating the multisig */
$("#newtsMultiSigAddress").click(function(){
	$("#tsmultisigPubKeys").addClass("hidden");
	makeTripleShibe();		// it'll have sorting 
});

/*************************************************
**************************************************/
function makeTripleShibe() {
var bs_pubKey1 = document.getElementById("tsPubKey1").value;             // retrieve the pubkeys from the html
var bs_pubKey2 = document.getElementById("tsPubKey2").value;             // retrieve the pubkeys from the html
var bs_pubKey3 = document.getElementById("tsPubKey3").value;             // retrieve the pubkeys from the html
var keys = [];
var bs_multiPersonal1;
var bs_multiPersonal2;
var bs_multiSlush;
var bs_multiChecking;
var bs_multiSavings;
var bs_multiDoGoodFund;
var doSort;


       if($("#tsc1").is(":checked")){
		doSort = 1;		
	} else {
		doSort = 0;
	}
	
//        $("#bankSuiteNewScreen02").removeClass("hidden");       // show the URL with the Public Key in it.

//       $("#bankSuiteLoadBtnWrap").addClass("hidden");  // hide the go/refresh button for seconds       

        if (bs_pubKey1.length == 130 && bs_pubKey2.length == 130 && bs_pubKey3.length == 130) {
                console.info("A single public key has been brought into port 1:");
                keys.push(bs_pubKey1);
                keys.push(bs_pubKey2); 
                keys.push(bs_pubKey3); 
		if (doSort) {
	                keys.sort();    // order the keys alphabetically
			console.info("Keys have been sorted alphabetically.");
		} else {
			console.info("Keys have NOT been sorted alphabetically.");
		}
                $("#tsPubKey1").val(bs_pubKey1);		// display them re-ordered...
                $("#tsPubKey2").val(bs_pubKey2);		// "
                $("#tsPubKey3").val(bs_pubKey3);		// "
	//	alert("TripleShibe. so far so good.");
	} else {
		var tt1 = "ERROR: Not all three pubkeys are the expected size:\n" + 
			"Key 1 = "   + bs_pubKey1.length +  " (expected: 130)" +
			"\nKey 2 = " + bs_pubKey2.length +  " (expected: 130)" +
			"\nKey 3 = " + bs_pubKey3.length +  " (expected: 130)" +
			"\nPlease revise and try again.";
		$("#tsmultisigPubKeys").removeClass("hidden");
		console.error(tt1);
		alert(tt1);
		return false;
	}

	$("#tsmultiSigData").removeClass("hidden");			// HAPPY PATH!
//	$("#tsmultisigPubKeysAfter").removeClass("hidden");			// HAPPY PATH! but keep it hidden because we need it in the back.
	$("#tsPubKeyAfter1").val(bs_pubKey1);		// these 3 display the readonly pubkeys..
	$("#tsPubKeyAfter2").val(bs_pubKey2);	
	$("#tsPubKeyAfter3").val(bs_pubKey3);		

        /***************************************
	* Create the multisig, redeem etc here:
        ****************************************/
        var multisig =  coinjs.pubkeys2MultisigAddress(keys, 2);
                        $("#tsAddress").val(multisig['address']);
                        $("#tsRedeemScript").val(multisig['redeemScript']);
                        $("#tsRedeemScriptURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig['redeemScript']+'#verify');

	/* here's the URL for this page. */
	$("#tsPageURL").val(document.location.origin+''+document.location.pathname+  '?tripleshibe='+bs_pubKey1+bs_pubKey2+bs_pubKey3+'#tripleshibe');
	
	/*****************************************
	* Get and display the balance(s)
	*****************************************/
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig,"tsBalance","tsUCBalance");
	}, 750);
}


/******************************************************
* button to go to the WITHDRAW screen.
******************************************************/
$("#tsPayBtn").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsRedeemScript").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsAddress").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsToAddr").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsToAmt").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
tsToAddr
});

/* user clicks on the 'Quick Instructions' */
$("#tsQuickInstructions").click(function(){
        $("#tsNewScreen01").toggle();
});

/* copy address */
var copyTextareaBtn1 = document.querySelector('.js-tstextareacopybtn1');
copyTextareaBtn1.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-tscopytextarea1');
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
var copyTextareaBtn2 = document.querySelector('.js-tstextareacopybtn2');
copyTextareaBtn2.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-tscopytextarea2');
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
/* tempola TCC20161011- get back and fix this whle function */
function tripleshibe_wallet_balance(multisig, urlName, UCurlName) {
var tt1;
var tt2;
console.info("tripleshibe_wallet_balance. Input Address: " + multisig['address']);
	$.ajax ({
		type: "GET",
		url: "https://chain.so/api/v2/get_address_balance/DOGE/" + multisig['address'],
		dataType: "json",
		error: function(data) {
			tt1 = JSON.stringify(data, null, 4);
			console.error("tripleshibe_wallet_balance fail: %s",tt1);
		},
		success: function(data) {
			tt1 = JSON.stringify(data, null, 4);
			work_balance = data.data.confirmed_balance;
			work_unconfirmed_balance = data.data.unconfirmed_balance;
			console.info("tripleshibe_wallet_balance: " + tt1);
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

