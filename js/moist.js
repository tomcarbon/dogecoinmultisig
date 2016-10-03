$(document).ready(function() {
/******************************************************************
* Some folks don't like the word moist. Sorry. 
******************************************************************/
//window.alert("Hello from the initialization portion of moist.js");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_max_trans = parseInt("75");
var work_number_signatures_required;
var work_number_pubkeys;
var work_multisig_address;
var work_destination_address;
var work_amount_to_withdraw;
var work_balance;
var work_unconfirmed_balance;
var work_redeem_script;
var work_private_key;
var work_private_key2;
var work_successful_transaction;

var work_txs = [];
var work_txs_temp = [];
var work_miners_fee;
var work_redeem_transaction;
var work_signed_transaction;
var work_signed_transaction2;
var work_message;


/***************************************************************
* has information been passed to  as in by a URL?
***************************************************************/
var _spoon = _get("sign");
if(_spoon[0]){
var tt0 = _spoon[0];
	var tx = tt0.slice(0); 
	console.info("Fresh from spoon, here is the value of TX: " + tx ) ;
       	$("#signTransaction").val(tx);
}

var _spoon2 = _get("broadcast");
if(_spoon2[0]){
var tt0 = _spoon2[0];
	var tx = tt0.slice(0); 
	console.info("Fresh from spoon2, here is the value of TX: " + tx ) ;
       	$("#dogeScript3").val(tx);	// aptly named broadcast transaction
	    setTimeout(function () {
		if (tt0) {
			$("#testola").click();	// broadcast
		}
	    }, 1000);
}

var _getVerify = _get("redeemMultiSig");
if(_getVerify[0]){
var tt0 = _getVerify[0];
//	var arr = JSON.parse(_getVerify[0]);
//	console.info(JSON.stringify(_getVerify[0], null, 4));
	/* hide the redeem script and some other stuff, for streamlining */
	$("#walletRefreshBox").addClass("hidden");

	console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
	console.info("_getVerify[0] = " + _getVerify[0]);
		var msg 		= tt0.slice(0,tt0.indexOf(".", 0));
		var tt1 = tt0.slice((tt0.indexOf(".",0)+1));
		var address 		= tt1.slice(0,tt1.indexOf(".", 0));
		var tt2 = tt1.slice((tt1.indexOf(".",0)+1));
		var redeem_script 	= tt2.slice(0,tt2.indexOf(".", 0));
		var tt3 = tt2.slice((tt2.indexOf(".",0)+1));
		var dest_addr 		= tt3.slice(0,tt3.indexOf(".", 0));
		var tt4 = tt3.slice((tt3.indexOf(".",0)+1));
		var to_amount 		= tt4.slice(0);
		
        	$("#dogeScript7").val(address);
        	$("#dogeScript4").val(redeem_script);
        	$("#dogeScript5").val(dest_addr);
        	$("#dogeScript6").val(to_amount);
		work_message = msg;
        	//$("#newDogecoinAddress").val(address);
	console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
	console.info("_getVerify[0] = " + _getVerify[0] + "\nmsg = " + msg);


//        window.location.hash = "#redeemMultiSig";

    setTimeout(function () {
	if (address) {
        	$("#walletRefresh").click();
	}
    }, 2000);

}

/*
function get_next_string(stg,start_idx,control_character) {
	var i = 0;
	while (i < 999) {
		if (stg[i] == control_character) {
			var rv = stg.slice(0,i);
			return rv;	
		}
		i++;
	}
console.info("Warning.get_next_string blew past expected bounds");
return "missing value.";
}

*/


/***************************************************
* $("#moist2").click(function()): entry point 
* First things First. This called from index.html
* and in turn drives the main procesing here. 
***************************************************/
$("#moist2").click(function(){

        var iindex = prompt("Please enter your number (click ok then please wait).", "99");
	// the map of possible iindex values is currently provided in index.html (TCC20160712)

	tempstring = $("#dogeScript").val();

        if (iindex != null) {
                very_get_info(iindex);          // put out a GET request to the dogecoin network.
		// very_get_info("100");
        }
});




/* this for clicking the 'refresh' button on the REDEEM screen */
$("#walletRefresh").click(function(){
       	dogecoin_wallet_balance();
    	$("getWalletBalance").hide(2000, function(){
    	});
	if (parseFloat(work_unconfirmed_balance) > parseFloat("0.00000000")) {
	    	$("getWalletUCBalance").hide(2000, function(){
		});
	}

});



function dogecoin_wallet_balance() {
	work_multisig_address = $("#dogeScript7").val();
                $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_address_balance/DOGE/" + work_multisig_address,
                        dataType: "json",
                        error: function(data) {
                                //alert(JSON.stringify(data, null, 4));
                                var tt1 = JSON.stringify(data, null, 4);
                                console.error("10777 fail: %s",tt1);
                        },
                        success: function(data) {
                                var tt1 = JSON.stringify(data, null, 4);
				$("#getWalletUCBalance").addClass("hidden");
                                work_balance = data.data.confirmed_balance;
                                work_unconfirmed_balance = data.data.unconfirmed_balance;
                                console.info("The Dogecoin Balance = " + work_balance);
				$("#newDogecoinAddress").val(work_multisig_address);
                        },
                        complete: function(data, status) {
                                console.info("dogecoin_wallet_balance(): work_multisig_address = " + work_multisig_address);
// tcctempola removed for QR 20160827                		document.getElementById("multisigAddress").innerHTML = work_multisig_address;
				
				var tempvar = "Unconfirmed Balance: " + work_unconfirmed_balance; // now set unconfirmed if non-0
				if (parseFloat(work_unconfirmed_balance) > parseFloat("0.00000000") || 
			            parseFloat(work_unconfirmed_balance) < parseFloat("0.00000000")) {
					if (parseFloat(work_unconfirmed_balance) > parseFloat("0.00000000")) {
						var tt1 = "Confirmed Balance: " + parseFloat(work_balance);
					} else {
						var tt1 = "Confirmed Balance: " + parseFloat((parseFloat(work_balance) + 
										parseFloat(work_unconfirmed_balance)));
					}
                			document.getElementById("getWalletBalance").innerHTML = tt1;	// display to HTML
               				document.getElementById("getWalletUCBalance").innerHTML = tempvar; // display to HTML
					$("#getWalletUCBalance").removeClass("hidden");
				} else {
					var tt1 = "Confirmed Balance: " + parseFloat(work_balance);
                			document.getElementById("getWalletBalance").innerHTML = tt1;	// display to HTML
				}
				very_get_info("10778"); 	// start loading the unspent transactions
//				very_get_info("20778"); 	// start loading the unspent transactions
				// TCCDEBUG tempola 20160928 20778 (dogechain.info API support) is INCOMPLETE until I figure out the label names issue with the rest of my code.
                        }
                });
}


//var decode = script.decodeRedeemScript($("#verifyScript").val());
/*********************************************************************
* This is the main REDEEM SCRIPT functionality -- 10777 in CP.
*********************************************************************/
$("#redeemit").click(function(){

	$("#nextRedeemBox").addClass("hidden");
	$("#pleaseWaitBox").removeClass("hidden");

	/* if the user did not click the 'refresh' button, go ahead and get the wallet balance now. */
	if (work_balance == null) {
		var tt1 = "You did not select the 'Refresh' button to retrieve the balance.\n" + 
			" I (the website), will do that for you now. Processing will continue.\n" + 
			" (click refresh button next time to save a little time)";
		dogecoin_wallet_balance();
		console.info(tt1);
		alert(tt1);	// this is a callback substitute, remove only after careful consideration.
	}

	setTimeout(function(){
		do_the_redeemit();
		$("#pleaseWaitBox").addClass("hidden");
	}, 500);
});


function do_the_redeemit() {
	work_redeem_script = $("#dogeScript4").val();
	work_multisig_address = $("#dogeScript7").val();
	work_destination_address = $("#dogeScript5").val();
	work_amount_to_withdraw = $("#dogeScript6").val();

		/*************************************************
		* Get the number of signatures required for this.
		*************************************************/
                var script = coinjs.script();
                var decode = script.decodeRedeemScript(work_redeem_script);
                if(decode){
                        work_number_signatures_required = decode['signaturesRequired'];
			work_number_pubkeys = decode.pubkeys.length;
			console.info("The number of signatures required for this multisig is: " + 
				work_number_signatures_required + " and number of Key Holders (pubkeys) is " + work_number_pubkeys);
                }

	/* display the address, redeem script, and balance... */
	console.info("The supplied Multisig address is '%s'.",work_multisig_address);
	console.info("The supplied DEST address is '%s'.",work_destination_address);
	console.info("The supplied redeem_script is '%s'.",work_redeem_script);
	console.info("The amount to pay out is '%s'.",work_amount_to_withdraw);
       
	//work_destination_address = prompt("Which Dogecoin address are you paying out to today?");
	console.info("Dogecoin Destination address (to pay out to): " + work_destination_address);

	/* FINAL STEP - confirm that we want to do it! */
	work = "you are about to withdraw " + work_amount_to_withdraw + " Dogecoin\nfrom " + work_multisig_address +  
		"\nand deposit it \nto " + work_destination_address + ".";
	console.info(work);
		var rc = populate_unspent_txid();		

		/**********************************************
		* THIS IS THE HAPPY PATH. HapPy PaTh!
		* HAPPY 
		*  HAPPY 
		*   HAPPY PATH!
		**********************************************/
		if (rc == true) {	// if it was successful...
			var ttest = 0;
//			alert("populate_unspent_txid() was successful.");
			/* if no signature was provided, don't try to sign it, just stop after creating the unsigned transaction */
		        if($("#skipSigning").is(":checked")){
				console.info("Only provide the unsigned transacion");
				return true;
			} else {
				console.info("signature found (" + $("#redeemPrivateKey") + "). Will sign the transaction."); 
				rc = sign_that_transaction(0);
			}
//			alert("This is a temporary callback placeholder. Please continue.");
			if (rc == true) {
				if (work_number_signatures_required == 1) {
					var ttext = "You can Verify this transaction. When you're ready, press BROADCAST to send the withdraw.";
					console.info(ttext);
					$("#redeemVerifyBtn2x").addClass("hidden");	// hide the 'verify' button
				} else if (work_number_signatures_required == 2) {
					console.info("work_private_key2.length of " + work_private_key2.length + " found.");
					if (work_private_key2.length == 51) {  /* there's a second private key, and we need one, so let's use it. */
						var tt1 = "Now signing the 2nd key. Please continue.";
						console.info(tt1);
						alert(tt1);		// callback placeholder TCC20160915
						rc = sign_that_transaction(2);
						if (rc == true) {
							var ttext = "This transaction has been signed twice." + 
								"You can Verify this transaction, and when you're ready, press BROADCAST to send the withdraw.";
							console.info(ttext);
							$("#redeemVerifyBtn2x").addClass("hidden");	// hide the 'verify' button templa new window.open (_blank)
							$("#signedSuccessBox").addClass("hidden");
						} else {
							alert("sign_that_trans(2) returned non-true.");
							return false;
						}
							
					} else {
						console.info("work_private_key2.length of " + work_private_key2.length + " found.");
						var ttext = "You will need another signature. Give this Transaction ID to the next person, to sign.";
						console.info(ttext);
						alert(ttext);
					}
					$("#redeemVerifyBtn1x").addClass("hidden");	// hide the 'broadcast' button
				} else { 	// oh uh...
					alert("The number of signatures required can only be 1 or 2 at this time, provided value was: " + work_number_signatures_required);
				}
			}
			else {
				alert("The transaction signing process did not succeed.");
			}
		} else {
			alert("populate_unspent_txid() was unsuccessful.");
		}

return true;
};		// end of do_the_redeemit()()



/********************************************************************
* This is actually the BROADCAST button from the REDEEM screen
* ( this is used for 1/1, 1/2, and 1/3 multisigs)
*********************************************************************/
$('#redeemVerifyBtn1x').on('click', function() {
	//console.info("top of redeemVerifyBtn1x()");
	$("#redeemVerifyBtn1x").addClass("hidden");	
	tempstring = $("#signedSuccessBox textarea").val();
//	$("#signedSuccessBox").addClass("hidden");
	$("#pleaseWaitBox").removeClass("hidden");
	setTimeout(function(){
		very_get_info("10102");	 //such broadcast from the redeem screen.
	}, 500);
});
/********************************************************************
* This brings the user to the 2nd SIGN screen if they have another sig.
* (this is used for 2/2 and 2/3 multisigs (multiple signatures))
*********************************************************************/
$('#redeemVerifyBtn2x').on('click', function() {

	//console.info("top of redeemVerifyBtn2x()");
	tempstring = $("#signedSuccessBox textarea").val();
	var ttxt = "I have another signature and I want to sign it again!";
	console.info(ttxt);
        var tt1 = document.location.origin+''+document.location.pathname+'?sign='+
                        tempstring + '#sign';
        window.open(tt1);
});
/********************************************************************
* This is a URL VERIFY MAKINGbutton from the REDEEM screen
* it's the first take at a mini invoice
* (this is used for 2/2 and 2/3 multisigs (multiple signatures))
* that does not involve the Private Suite Key
* opens a new window
*********************************************************************/
$('#redeemVerifyBtn4x').on('click', function() {
	//console.info("top of redeemVerifyBtn2x()");
	tempstring = $("#signedSuccessBox textarea").val();
        var tt1 = document.location.origin+''+document.location.pathname+'?verify='+
                        tempstring + '#verify';
        window.open(tt1);
});
/********************************************************************
* This is on the SIGN Screen and it's the BROADCAST BUTTON
*********************************************************************/
$('#signBtn2x').on('click', function() {
	tempstring = $("#signDataText").val();
        var tt1 = document.location.origin+''+document.location.pathname+'?broadcast='+
                        tempstring + '#broadcast';
        window.open(tt1);
});
/********************************************************************
* This is on the SIGN Screen and it's the MAKE URL BUTTON
*********************************************************************/
$('#signBtn3x').on('click', function() {
	tempstring = $("#signDataText").val();
        var tt1 = document.location.origin+''+document.location.pathname+'?verify='+
                        tempstring + '#verify';
        window.open(tt1);
});
/********************************************************************
* This is on the VERIFY (Transactions) Screen and it's the BROADCAST BUTTON
*********************************************************************/
$('#verifyBtn2x').on('click', function() {
	tempstring = $("#verifyScript").val();
        var tt1 = document.location.origin+''+document.location.pathname+'?broadcast='+
                        tempstring + '#broadcast';
        window.open(tt1);
});
/********************************************************************
* This is on the VERIFY (Transactions) Screen and it's the SIGN BUTTON
*********************************************************************/
$('#verifyBtn3x').on('click', function() {
	tempstring = $("#verifyScript").val();
        var tt1 = document.location.origin+''+document.location.pathname+'?sign='+
                        tempstring + '#sign';
        window.open(tt1);
});
/********************************************************************
* This is actually the 2nd BROADCAST button from the REDEEM screen
* ( this is used for 2/2 and 2/3 multisigs)
*********************************************************************/
$('#redeemVerifyBtn3x').on('click', function() {
	//console.info("top of redeemVerifyBtn1x()");
	$("#redeemVerifyBtn3x").addClass("hidden");
	$("#signedSuccessBox").addClass("hidden");
	tempstring = $("#signedSuccessBox2 textarea").val();
//	$("#signedSuccessBox2").addClass("hidden");
	$("#pleaseWaitBox2").removeClass("hidden");
	setTimeout(function(){
		very_get_info("10102");	 //such broadcast from the redeem screen.
	}, 500);
});

/********************************************************************
* the reset and clear everything button on the Redeem screen.
*********************************************************************/
$('#redeemVerifyReset').on('click', function() {
//	console.info("top of #redeemVerifyReset()");
//    	location.reload();
        var tt1 = document.location.origin + '' + document.location.pathname + '#redeemMultiSig';
        console.info("Value is " + tt1);
        window.open(tt1);

});


/********************************************************************
* The user clicks the clear button on the redeem screeen.
*********************************************************************/
$("#signClearBtn").click(function(){
	document.getElementById("signedData").value = "";
	$("#signedData").addClass("hidden");
	document.getElementById("signPrivateKey").value = "";
	document.getElementById("signTransaction").value = "";

});


/********************************************************************
* THIS IS THE OFFICIAL BROADCAST TRANSACTION
*********************************************************************/
$("#testola").click(function(){
	tempstring = $("#dogeScript3").val();
	
	$("#testola").addClass("hidden");
	$("#broadcastPleaseWaitBox").removeClass("hidden");
	setTimeout(function(){
		very_get_info("10101");	// tempola it's a 10101!
	}, 500);

});

/************************************************
* function very_get_info(iindex): do something based on a number.
* This function (currently) uses chain.so and GET commands to
* access the dogecoin network. Provide an indexed value to
* zip to that particular function, where you may be prompted
* for additional information. If you add to this use comments or
* else your work will get lost!
* This function will also POST in addition to GET.
*
* SOME INTERNALS:
* 10100 - official Broadcast function
* 10777 - official redeem script
* 10778 - official redeem script con't
************************************************/
function very_get_info(iindex){
	switch (iindex)
	{
        /*****************************************
        * INDEX099: This is the hello, world, it
        * is kept bone-dry empty to be used as a 
        * template
        *****************************************/
        case "99":
                $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_info/DOGE",
                        dataType: "json",
                        error: function(data) {
                                console.error(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                   
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });
        break;
        /*****************************************
        * INDEX100: SEND A CP(100)TRANSACTION.
        *****************************************/
        case "100":
        //POST /api/v2/send_tx/{NETWORK}
                tempstring = prompt("100 - Send the following signed transaction","your transaction here");

                $.ajax ({
                        type: "POST",
                        url: "https://chain.so/api/v2/send_tx/DOGE/"+tempstring,
                        dataType: "json",
                        error: function(data) {
                                alert(JSON.stringify(data, null, 4));
                                var fooboy = "https://chain.so/api/v2/send_tx/DOGE/"+tempstring;
                                console.error(JSON.stringify(fooboy));
                        },
                        success: function(data) {
                                console.error(JSON.stringify(data, null, 4));
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });
           break;
        /*****************************************
        * INDEX10100: SEND AN OFFICIAL BROADCAST TRANSACTION.
	* very POST.
	* this is the old one not used TCC20160804
        *****************************************/
        case "10100":
		/* make a JSON object, tempstring is the hash */
		var our_send_object = {"network":"DOGE","txid":tempstring};
		console.info("10100 send transaction. provided hex is: " + our_send_object.txid);
		console.info("                        provided network is: " + our_send_object.network);
              	$.ajax ({
                        type: "POST",
//                        url: "https://chain.so/api/v2/send_tx/DOGE/"+tempstring,
                        url: "https://chain.so/api/v2/send_tx/DOGE/"+our_send_object.txid,
                        dataType: "json",
                        error: function(data) {
                                console.error(JSON.stringify(data, null, 4));
				var fooboy = "https://chain.so/api/v2/send_tx/DOGE/"+our_send_object.txid;
				console.error(JSON.stringify(fooboy));
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                   
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });
           break;
        /*****************************************
        * INDEX10101: SEND AN OFFICIAL BROADCAST TRANSACTION.
	* very POST.
        *****************************************/
        case "10101":
		/* make a JSON object, tempstring is the hash */
		var our_send_object = {"network":"DOGE","txid":tempstring};
		console.info("10101 send transaction. provided hex is: " + our_send_object.txid);
		console.info("                        provided network is: " + our_send_object.network);
              	$.ajax ({
                        type: "POST",
                        url: "https://chain.so/api/v2/send_tx/DOGE/",
			data: {tx_hex: our_send_object.txid},
                        dataType: "json",
                        error: function(data) {
				$("#broadcastPleaseWaitBox").addClass("hidden");
				$("#broadcastFailBox").removeClass("hidden");
                                console.error(JSON.stringify(data, null, 4));
				var fooboy = "https://chain.so/api/v2/send_tx/DOGE/"+our_send_object.txid;
				console.error(JSON.stringify(fooboy));
                                window.alert("ERROR: The Broadcast has FAILED. Go to F12 (Console) for more information, and/or review your parameters.");
				
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                   
				work_successful_transaction = data.data.txid;
				console.info("The successful Transaction ID is: " + work_successful_transaction);
				$("#broadcastPleaseWaitBox").addClass("hidden");
				$("#broadcastSuccessBox textarea").val(work_successful_transaction);
				$("#broadcastSuccessBox").removeClass("hidden");
                                //window.alert("The Broadcast was successful. Go to F12 (Console) for more information.");
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });
		
           break;
        /*****************************************
        * INDEX10102: OFFICIAL BROADCAST BUTTON
	* very POST.
        *****************************************/
        case "10102":
		/* make a JSON object, tempstring is the hash */
		var our_send_object = {"network":"DOGE","txid":tempstring};

		console.info("10102 send transaction. provided hex is: " + our_send_object.txid);
		console.info("                        provided network is: " + our_send_object.network);
              	$.ajax ({
                        type: "POST",
                        url: "https://chain.so/api/v2/send_tx/DOGE/",
			data: {tx_hex: our_send_object.txid},
                        dataType: "json",
                        error: function(data) {
				$("#pleaseWaitBox").addClass("hidden");
				$("#withdrawlFailBox").removeClass("hidden");
                                console.error(JSON.stringify(data, null, 4));
				var fooboy = "https://chain.so/api/v2/send_tx/DOGE/"+our_send_object.txid;
				console.error(JSON.stringify(fooboy));
                                window.alert("ERROR: The Broadcast has FAILED. Go to F12 (Console) for more information, and/or review your parameters.");
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                   
				$("#pleaseWaitBox").addClass("hidden");
				work_successful_transaction = data.data.txid;
				$("#withdrawlSuccessBox textarea").val(work_successful_transaction);
				$("#withdrawlSuccessBox").removeClass("hidden");
				$("#signedSuccessBox").addClass("hidden");
				$("#signedSuccessBox2").addClass("hidden");
                                //window.alert("The Broadcast was successful. Go to F12 (Console) for more information.");
				setTimeout(function(){ 	// wait a sec then refresh the wallet
        				$("#walletRefresh").click();
				}, 2000);
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });
           break;
	/*****************************************
	* INDEX10777: Provide Balance Info from 
	* address.
	*****************************************/
	case "10777":
	//	if (tempstring == "") {
  	//		tempstring = prompt("10777 - Please provide the address you would like to check","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4");
	//	}
              	$.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_address_balance/DOGE/" + work_multisig_address,
                        dataType: "json",
                        error: function(data) {
                                //alert(JSON.stringify(data, null, 4));
                                var tt1 = JSON.stringify(data, null, 4);
				console.error("10777 fail: %s",tt1);
                        },
                        success: function(data) {
                                var tt1 = JSON.stringify(data, null, 4);                   
				work_balance = data.data.confirmed_balance;
				console.info("10777 success: %s",tt1);
				console.info("Balance = " + work_balance);
                        },
                        complete: function(data, status) {
				return (work_balance);
                        }
                });

	break;


	/*****************************************
	* INDEX10778: Provide Balance Info from 
	* address.
	*****************************************/
	case "10778":
              	$.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_tx_unspent/DOGE/" + work_multisig_address,
                        dataType: "json",
                        error: function(data) {
               //                 alert(JSON.stringify(data, null, 4));
                                var tt1 = JSON.stringify(data, null, 4);
				console.error("10778 fail: %s",tt1);
                        },
                        success: function(data) {
                //                alert(JSON.stringify(data, null, 4));                   
                                var tt1 = JSON.stringify(data, null, 4);                   
				console.info("10778 success: %s",tt1);
				console.info("10778 data.network = " + data.data.network);
				console.info("10778 data.network = " + data.data.address);
				console.info("10778 number of transactions to load: " + data.data.txs.length);
				work_txs = data.data.txs;		// tempola work_txs
				
				for (var i=0;i<data.data.txs.length;i++)		
				{
					console.info("chain.so:TX(" + i + "): " + work_txs[i].txid + ", vout: " + work_txs[i].output_no + ", value: " + work_txs[i].value);
				}
                        },
                       	complete: function(data, status) {
                        }
                });
	break;
	/*****************************************
	* INDEX20778: Provide Balance Info from 
	* address from dogechain.info
	*****************************************/
	case "20778":
  	var dogeaddress = prompt("20778 - Please provide the address you would like to check","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4"); //777
              	$.ajax ({
                        type: "GET",
                        //url: "https://chain.so/api/v2/get_tx_unspent/DOGE/" + work_multisig_address,
                        //url: "https://dogechain.info/api/v1/unspent/" + work_multisig_address,
                        url: "https://dogechain.info/api/v1/unspent/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                var tt1 = JSON.stringify(data, null, 4);
				console.error("20778 fail: %s",tt1);
                        },
                        success: function(data) {
                                var tt1 = JSON.stringify(data, null, 4);                   
				console.info("20778 success: %s",tt1);
				console.info("20778 data.address = " + data.unspent_outputs[0].address);
				console.info("20778 number of transactions to load: " + data.unspent_outputs.length);
				work_txs_temp = data.unspent_outputs;		// tempola work_txs
				
				for (var i=0;i<data.unspent_outputs.length;i++)		
				{
					console.info("TX(" + i + "): " + work_txs_temp[i].tx_hash + ", vout: " + work_txs_temp[i].tx_output_n + ", value: " + work_txs_temp[i].value);
					console.info("work_txs_temp[" + i + "].tx_hash = " + work_txs_temp[i].tx_hash);
					
//					work_txs[i].output_no = data.unspent_outputs[i].tx_output_n;
//					work_txs[i].txid = wt.tx_hash;
//					work_txs[i].value = wt.value/100000000;
				}
				/* now, it should have been converted to be the same format as with chain.so */
				for (var i=0;i<data.unspent_outputs.length;i++)		
				{
//					console.info("dogechain.info:TX(" + i + "): " + work_txs[i].txid + ", vout: " + work_txs[i].output_no + ", value: " + work_txs[i].value);
				}
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }

                });
	break;

	/*****************************************
	* INDEX777: Provide Balance Info from 
	* address.
	*****************************************/
	case "777":
  	var dogeaddress = prompt("777 - Please provide the address you would like to check","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4"); //777
              $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_address_balance/DOGE/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                console.error(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                   
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });

	break;
	/*****************************************
	* INDEX778:  Get Unspent TXs for Addr
	*****************************************/
        case "778":
	//GET /api/v2/get_tx_unspent/{NETWORK}/{ADDRESS}[/{AFTER TXID}]
        var dogeaddress = prompt("778 - Please provide the address you would like to check unspent transactions for","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4");
              $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_tx_unspent/DOGE/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                console.error(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                  
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });

           break;
	/*****************************************
	* INDEX1778:  Get Unspent TXs for Addr
	* dogechain.info
	*****************************************/
        case "1778":
	//GET /api/v2/get_tx_unspent/{NETWORK}/{ADDRESS}[/{AFTER TXID}]
        var dogeaddress = prompt("1778 - Please provide the address you would like to check unspent transactions for","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4");
              $.ajax ({
                        type: "GET",
                        //url: "https://chain.so/api/v2/get_tx_unspent/DOGE/" + dogeaddress,
                        //url: "https://dogechain.info/api/v1/address/balance/" + dogeaddress,		// the balance
                        url: "https://dogechain.info/api/v1/unspent/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                console.error(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                console.info(JSON.stringify(data, null, 4));                  
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });

           break;

        /*****************************************
        * INDEX779: Get Transaction Information.
        *****************************************/
        case "779":
	//GET /api/v2/get_tx/{NETWORK}/{TXID}
        var dogeaddress = prompt("779 - Please provide the txid you'd like information for","186ee19e0d84d8c14a4ad1c4409aac0ba947655290dfa41d023dd091a85a3ceb");
              $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_tx/DOGE/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                alert(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                alert(JSON.stringify(data, null, 4));                   
                        },
                        complete: function(data, status) {
                        //	window.alert("complete1");
                        }
                });

           break;

        /*****************************************
        * INDEX780:  Get Spent TXs for Addr
        *****************************************/
        case "780":
        //GET /api/v2/get_tx_spent/{NETWORK}/{ADDRESS}[/{AFTER TXID}]
        var dogeaddress = prompt("780 - Please provide the address you would like to check Spent transactions for","A9A3sB2S7J5VLKTwNvF1rTkyyQ35PkaTU4");
              $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_tx_spent/DOGE/" + dogeaddress,
                        dataType: "json",
                        error: function(data) {
                                alert(JSON.stringify(data, null, 4));
                        },
                        success: function(data) {
                                alert(JSON.stringify(data, null, 4));                   // THIS IS GOLD DON'T LOSE IT
                        },
                        complete: function(data, status) {
                        //        window.alert("complete1");
                        }
                });

           break;


        /*****************************************
        * INDEX999: Create a multisig address.
        *****************************************/
        case "999":
			/* hello, there */
           break;


        /*****************************************
        * INDEXxxx: template. wow something.
        *****************************************/
        case "xxx":
			/* where is frog? can you find? */ 
           break;


	   default:
//		window.alert("Sorry shibe, " + iindex + " is not on the menu.");
	   break;
	}
}

/************************************************
* function populate_unspent_txid() : take the 
* information from 10778-style transaction (get 
* unspent_tx from work_multisig_address),
* this function loads it into the coinb.structure, 
* then creates the hashed transaction id from it.
************************************************/
function populate_unspent_txid() {
		var estimatedTxSize = 10; // <4:version><1:txInCount><1:txOutCount><4:nLockTime>
		var amountPaid = 0;
		var paid_miner_flag = false;
		var add_a_change_address = false;
		var maximum_possible_miners_fee = 1;
		var number_multi_transactions_added = 0;

//console.info("top of populate_unspent_txid()");

                var currentScript = work_redeem_script;
		var atw= work_amount_to_withdraw;

		/*********************************************
		****** KINDA IMPORTANT ************tempola****
		*********************************************/
		if (work_txs.length > 100)
			work_txs.length = 100;	// we'll do 100 at a time, maximum, until further notice.

		/**************************************************************
		* the pre loop
		* Decide here which of the following transaction styles to use
		***************************************************************/
		var multi_transaction_sum_amount = 0.0;
		var our_txid_size_champion = {index:0, value:0.0}
		var wow_transaction_type = "no transaction type selected yet"; 
		var single_transaction_id; // for single transaction types

		/* try to determine which transaction type is the cheapest in terms of mining fees, and use that one */
		for (var i=0; i<work_txs.length;i++) {
			//console.info("preloop(" + i +  ") value = " + work_txs[i].value);	

			/* the following variable stores all values in txids to date. */
			multi_transaction_sum_amount = multi_transaction_sum_amount + work_txs[i].value

			/* INFO: is this transaction the largest we've seen yet? */
			if (work_txs[i].value > our_txid_size_champion.value) {
				our_txid_size_champion.index = i;
				our_txid_size_champion.value = work_txs[i].value;
			}

			/* SINGLE SWEEP TRANSACTION. if this is a single transaction for the whole amount, that's special */
			if (i == 0 && parseFloat(work_amount_to_withdraw) == parseFloat(work_balance) &&
 			    parseFloat(work_txs[i].value) == parseFloat(work_balance)			) {
				console.info ("SINGLE SWEEP TRANSACTION selected for the amount of " + work_balance 
						+ "-1 (miners_fee)" + "= 1" );
				wow_transaction_type = "single sweep transaction";	
				single_transaction_id = 0;
				i = work_txs.length + 1; // break outta loop		
			}
			/**********************************************************************
			* SINGLE TRANSACTION. If the value to be paid is less than the value of a single transaction,
			* plus one doge for the miners fee, use that transaction!
			***********************************************************************/
			else if ( (parseFloat(work_amount_to_withdraw) + 1) <= parseFloat(work_txs[i].value)) {	
				console.info("SINGLE TXID TRANSACTION selected. \n" + 
						"Transaction Index(" + i + ") is larger than amount to be withdrawn,\n" +
						" so we will use it (and give change). One doge miners fee");
				wow_transaction_type = "single transaction";	// change address will be utilized in this model
				single_transaction_id = i;
				i = work_txs.length + 1; // break outta loop		
			}
		}

		//	"We will withdraw ALL of it, and subtract the miners fee from the total 
		if (wow_transaction_type == "no transaction type selected yet") {
			/**********************************************************************
			* SWEEP TRANSACTION: like a sweep, but no more transactions after the
			* amount is paid for.
			***********************************************************************/
			if (parseFloat(work_amount_to_withdraw) == parseFloat(work_balance)) {
				wow_transaction_type = "sweep transaction";
			}
			/**********************************************************************
			* MULTI TRANSACTION: like a sweep, but no more transactions after the
			* amount is paid for.
			***********************************************************************/
			else if (parseFloat(work_amount_to_withdraw) < parseFloat(work_balance)) {
				wow_transaction_type = "multi transaction";
			}
			else {
				console.error("ERROR condition. No suitble 'transaction style' was found (no single_tx, sweepall, or multi style selected.)");
			}
		}

		/********************************************************************************************
		* At this point we have one of the following scenarios:
		* 1) The amount to be requested is less than the value on (at least) one of the txids found.
		********************************************************************************************/
		console.log("The large switch() in moist.js: The selected transaction type for this transacion is '" + wow_transaction_type + "'.");
		switch(wow_transaction_type) {
			/*******************************************************************************
			* SINGLE TRANSACTION. 
			* SINGLE SWEEP TRANSACTION.
			* The withdraw amount requested fits into a single transaction, and can be paid
			* for with only 1 dogecoin! Construct an output txid and if necessary a 
			* change txid
			* The single sweep transaction: in this case the 1 transaction is the totality
			* of the amount, so we subtract one doge miners_fee from the total_amount.
			*******************************************************************************/
			case "single transaction":
			case "single sweep transaction":
				//console.info("Single Transaction selected in switch statement.");
				work_miners_fee = 1;		// always 1 for single txid for 1/1, 1/2, 1/3, 2/2.


				/**********************
				* INPUTS
				* Add the (solo) input.
				**********************/
                                tx.addinput(	work_txs[single_transaction_id].txid,
                                            	work_txs[single_transaction_id].output_no,
						currentScript,null);

				/******************************************************
				* OUTPUTS
				* Here we make a differentiation in how miner
				* fees are handled. If it's for the totalilty, subtract 1.
				* Otherwise, since it's for less than then the total, add 1.
				******************************************************/
				if (wow_transaction_type == "single sweep transaction") {
					//console.info("switch(single sweep transaction)");
					var signed_size = calculate_multisig_signed_size(
									work_number_signatures_required,
									work_number_pubkeys,1,1);
					tx.addoutput(work_destination_address, work_amount_to_withdraw-1);
				}
				else {
					/* first add the primary output */
					tx.addoutput(work_destination_address, work_amount_to_withdraw);
					/******************************************************
					* See if a change address is needed.
					******************************************************/
					if ( (parseFloat(work_amount_to_withdraw) + work_miners_fee) < 
						parseFloat(work_txs[single_transaction_id].value)) {	// YES, add CHANGE

						var signed_size = calculate_multisig_signed_size(
									work_number_signatures_required,
									work_number_pubkeys,1,2);	// 2 txs
						work_miners_fee = parseInt(signed_size/1000) + 1;
						console.info("Computed miners fee = " + work_miners_fee);

						var change_address_amount = 
							parseFloat(work_txs[single_transaction_id].value) - 
							(parseFloat(work_amount_to_withdraw) + work_miners_fee);
						tx.addoutput(work_multisig_address, change_address_amount);
					}
					else if ( (parseFloat(work_amount_to_withdraw) + work_miners_fee) == 
							parseFloat(work_txs[single_transaction_id].value)) { // NO CHANGE

						var signed_size = calculate_multisig_signed_size(
									work_number_signatures_required,
									work_number_pubkeys,1,1);	// 1 tx
						work_miners_fee = parseInt(signed_size/1000) + 1;
						console.info("Computed miners fee = " + work_miners_fee);

						/* this is exactly equal - good. Do not add a change address */
						console.info("the amount to withdraw + mining fee exactly equals " + 
								"the value id of " + 
								work_txs[single_transaction_id].value + 
								" (no change address needed) ");
					}
					else  { 	// this should never happen but err on safety.
						alert("Unexpected condition in 'single transaction' change logic." + 
							"  Will not continue.");
						return false;
					}
				}
				break;
			/*******************************************************************************
			* SWEEP TRANSACTION. Withdraw all of it.
			* subtract the miner's fee from the totality. No change address.
			*******************************************************************************/
			case "sweep transaction":	
				var cum_balance = parseFloat("0.00000000");	// this is mainly used for validation
				var maximum_transactions_to_process = work_max_trans;
				console.info("top of sweep transaction. Theoretical maximum # of trans = " + maximum_transactions_to_process);
				
				/* Set the maximum # trans to the lesser of itself or number of actual transactions in this multisig */
				if (maximum_transactions_to_process > work_txs.length) {
					maximum_transactions_to_process = work_txs.length;
					console.info("The actual maximum number of transactions to process is " + maximum_transactions_to_process);
				}	

				/* for every transaction in the multisig , add an input */
				/* up to the maximum number of transactions allowed by our system */
				for (var i=0; i<maximum_transactions_to_process;i++) {
					cum_balance = parseFloat(cum_balance) + parseFloat(work_txs[i].value);
					console.info("SWEEPING tx# " + i + ". cumulative balance = " + cum_balance);
					tx.addinput(	work_txs[i].txid,
							work_txs[i].output_no,
							currentScript,null);
				}

				/* figure out the miners fee. */
				var signed_size = calculate_multisig_signed_size(
							work_number_signatures_required,
							work_number_pubkeys,maximum_transactions_to_process,1);	// 1 output
				work_miners_fee = parseInt(signed_size/1000) + 1;
				console.info("Miners fee will be " + work_miners_fee + " doge.");

				/* perform a validation, compare cumulative value to the balance. If not as expected.... */
				cum_balance = cum_balance.toFixed(8);
				console.info("Validation: Comparing calculated total (" + cum_balance + ") to the stated account balance(" + work_balance + "):");
				if (parseFloat(work_balance) != parseFloat(cum_balance)) {
					/**************************************************************************************
					* If this address has more than max # of transactions allowed by our program,
					* we will offer to the user the option to process only the  max number.
					***************************************************************************************/
					if (parseInt(work_txs.length) >= parseInt(work_max_trans)) {	// mega # of transcations in account
						var tt1 = 	"There at least " + maximum_transactions_to_process + " transactions in this account.\n" + 
								" This site will only process " + 
									maximum_transactions_to_process + " transactions at a time.\n" +
								" This will move the amount of " + parseFloat(cum_balance) + " dogecoins to the\n" + 
								" destination address. You may repeat this procedure until the source wallet is \n" + 
								" empty, if you like.\n" + 
								" WOULD YOU LIKE TO CONTINUE WITH THIS TRANSACTION?" ;	
						console.info(tt1);
						if (confirm(tt1) == true) {
							console.info("User has pressed the OK button to process the first " + 
									maximum_transactions_to_process + "\n" + 
								"transactions of this multisig.");
						} else {
							console.info ("User has pressed the cancel button and will not process these transactions.");
							return false;
						}
					} else {
						/* otherwise, seems like there's an error to report, so this is a FAIL */
						var tt1 = "	Error: The validation for the sweep transaction has produced an error. Stopping.";
						$("#pleaseWaitBox").addClass("hidden");
						$("#withdrawlFailBox").removeClass("hidden");
						console.error(tt1);
						alert(tt1);
						return false;
					}
				} else {
					console.info("	Validation passed.");
				}

				/* last but not least, add the single output (no change addr required) */
				tx.addoutput(work_destination_address, (parseFloat(cum_balance) - work_miners_fee));
				break;	

			/*******************************************************************************
			* MULTI TRANSACTION. Withdraw selected amount which is greater than any 1 tx.
			* subtract the miner's fee from the totality. No change address.
			*******************************************************************************/
			case "multi transaction":
				var work_miners_fee = 0;
				var cum_balance = parseFloat("0.00000000");	// this is mainly used for validation
				var maximum_transactions_to_process = work_max_trans;
				console.info("top of multi transaction");
				
				/* Set the maximum # trans to the lesser of itself or number of actual transactions in this multisig */
				if (maximum_transactions_to_process > work_txs.length) {
					maximum_transactions_to_process = work_txs.length;
					console.info("The actual maximum number of transactions to process is " + maximum_transactions_to_process);
				}	

				/* figure out the maximum miners fee. */
				/* AND validate: if the amount to withdraw + max_mining_fee is greater than the balance, we must stop (error) */
				var signed_size = calculate_multisig_signed_size(
							work_number_signatures_required,
							work_number_pubkeys,maximum_transactions_to_process,2);	//  assume change tx is needed.
				var max_miners_fee = parseInt(signed_size/1000) + 1;
				work_miners_fee = max_miners_fee; 		// for now, we'll reduce later
				console.info("Maximum miners_fee for this would  be " + max_miners_fee + " doge.");
				/* validate to see if we are attempting to overdraw from the wallet. */
				if ((parseFloat(work_amount_to_withdraw) + parseFloat(max_miners_fee)) > work_balance) {	// if would be overdrawn... 
					var tt1 = "The amount to withdraw + the miners fee is greater than the balance!\n" 	+ 
							"  amount_to_withdraw: " + work_amount_to_withdraw + "\n" 		+
							"  max_miners_fee: " + max_miners_fee + "\n" 				+ 
							"  (is greater than the wallet balance of: " + work_balance + ")";
					$("#pleaseWaitBox").addClass("hidden");
					$("#withdrawlFailBox").removeClass("hidden");
					console.error(tt1);			
					alert(tt1);
					return false;
				}

				/* for every transaction in the multisig until desired amount is reached, add an input. */
				for (var i=0; i<maximum_transactions_to_process;i++) {
					cum_balance = parseFloat(cum_balance) + parseFloat(work_txs[i].value);
					cum_balance = cum_balance.toFixed(8);
					console.info("MULTI tx# " + i + ". cumulative balance = " + cum_balance);
					tx.addinput(	work_txs[i].txid,
							work_txs[i].output_no,
							currentScript,null);
					/* if the cumulative balance is greater than the amount to withdraw, next check to see if the miners fee fits */
					if (parseFloat(cum_balance) > parseFloat(work_amount_to_withdraw)) {
						var signed_size = calculate_multisig_signed_size(
									work_number_signatures_required,
									work_number_pubkeys,(i+1),2);	// assume change address is needed
						work_miners_fee = parseFloat(parseInt(signed_size/1000) + 1);
						console.info("computed miners fee = " + work_miners_fee);
						if (parseFloat(parseFloat(cum_balance) + parseFloat(work_miners_fee)) >= 
							parseFloat(work_amount_to_withdraw)) {		// we've got enough...
							var num_transactions = i+1;
							console.info("The first " + num_transactions + " transactions cover the miners fee " + 
									"and the requested amount to pay out.");
							i = maximum_transactions_to_process;	// break outta loop
						} else {
							console.info("Amount required for tranaction reached but doesn't allow miners fee. Read another input.");
						}
					}
				}

				/****************************************************************************************************************
				* OUTPUT
				* Also check if we actually have enough transactions to make the  the full payment!
				* If we don't, then special handling's needed because we cannot pay the full amt with 1 pass....
				***************************************************************************************************************/
				var aa1 = parseFloat(cum_balance + work_miners_fee); 
				if (aa1 < parseFloat(work_amount_to_withdraw)) {  // can't do full amt..
					var signed_size = calculate_multisig_signed_size(
								work_number_signatures_required,
								work_number_pubkeys,work_max_trans,1);	// assume change address is needed
					work_miners_fee = parseFloat(parseInt(signed_size/1000) + 1);
					console.info("recomputed miners fee = " + work_miners_fee);
					var bb1 = parseFloat(cum_balance - work_miners_fee);
					var tt1 = 	"The amount requested to be withdrawn has higher amount than the maximum allowed number of transactions\n" + 
							"that this site allows! However, there is a solution: \n" +  	
							"We can use the first " + work_max_trans + " transactions to pay a \n" + 
							"total of " + bb1 + " to the output address.\n" + 
							"(you can repeat with subsequent transaction(s) until the full amount is paid.)\n" +
							"There will be no change transaction this time.\n" + 
 							"DO YOU STILL WISH TO PROCEED?";
					console.info(tt1);
					if (confirm(tt1) == true) {
						console.info("User has pressed the OK button to process the first " + 
								maximum_transactions_to_process + "\n" + 
							"transactions of this multisig.");
						tx.addoutput(work_destination_address, parseFloat(bb1));	// implied miners fee added.
					} else {
						console.info ("User has pressed the cancel button and will not process these transactions.");
						return false;
					}
				} else {		// BAU logic where we are able to process the full amount... seriously most will go here
					/* First add the main output, then check to see if change tx is needed. */
					tx.addoutput(work_destination_address, parseFloat(work_amount_to_withdraw));		// main output
					if ((parseFloat(work_amount_to_withdraw) + parseFloat(work_miners_fee)) == cum_balance) {	
						console.info("No change address is needed because amount_to_pay + miners_fee fits perfectly.");
					} else {
						/* figure out the miners fee one last time */
						var signed_size = calculate_multisig_signed_size(
									work_number_signatures_required,
									work_number_pubkeys,num_transactions,2);	// assume change address is needed
						work_miners_fee = parseFloat(parseInt(signed_size/1000) + 1);
						console.info("final recomputed miners fee = " + work_miners_fee);

						/* formula: change_amt =cum - (amt_to_pay + MF) */
						var aa1 = parseFloat(work_amount_to_withdraw) + parseFloat(work_miners_fee);	
						aa1 = aa1.toFixed(8);
						console.info("work_amount + miners_fee = " + work_amount_to_withdraw + " + " + work_miners_fee + 
								" equals: " + aa1);
						var change_tx_to_pay = (cum_balance - aa1).toFixed(8);
						var tt1 = "Computation of change amount. Here's the formula:\n" +
								"change_amount_to_pay = cumulative_balance - (amt_to_pay + miners_fee)\n" + 
								"change_amount_to_pay = " + cum_balance + " - (" +
								work_amount_to_withdraw + " + " + work_miners_fee + ")\n" + 
								"change_amount_to_pay = " + parseFloat(change_tx_to_pay);
						console.info(tt1);
						tx.addoutput(work_multisig_address, parseFloat(change_tx_to_pay));		// change output
						console.info("Change tx with amount of " + change_tx_to_pay + " has been added.");
					}
				}
				break;	

			/*********************************
			* something's wrong, then go here:
			*********************************/
			case "no transaction type selected yet":
				var tempee = "No transaction type selected - this is an ERROR." + 
						"Please recheck your parameters and try again.\n" + 
						"(this site has some 'HowTo' videos you can watch)";
				console.info(tempee);
				alert(tempee);
				return false;
			default:
				var tempee = "ERROR in the switch statement in the redeem protocol. What happened?";
				console.info(tempee);
				alert(tempee);
				return false;
		}
//console.info("after the bigass switch statement.");
		



/* the following (and index.html counterpart) disable as it clutters things TCC 20160807 */
$("#transactionCreate2 textarea").val(tx.serialize());
$("#transactionCreate2 .txSize").html(tx.size());
$("#transactionCreate2").removeClass("hidden");


//console.info("bottom of populate_unspent_txid()");
work_redeem_script = tx.serialize();
return true;    // success
}


/************************************
* This function signs the transaction.
************************************/
function sign_that_transaction(signum) {
        //var wifkey = $("#redeemPrivateKey");
        var wifkey = $("#redeemPrivateKey");
//        var script = $("#transactionCreate2 textarea");
	if (signum == 0) {
        	var script = $("#transactionCreate2 textarea");
	} else if (signum == 2) {
        	var script = $("#signedSuccessBox textarea");
	} else {
		alert("a problem in signthattransaction.");
		return false;
	}
	$("#transactionCreate2").addClass("hidden");
	var tt1 = wifkey.val();

	var priv1 = tt1.slice(0,51);
	var priv2 = tt1.slice(51);
	work_private_key1 = priv1;
	work_private_key2 = priv2;
	/*******************************************************
	* Look through the messages
	* Choose which private key to use here.
	******************************************************/
	if (work_message == 'personal2') {
		console.info("personal2 message has been detected so using 2nd sig if it's a Private Suite Key(ordered by pubkey order)");	
		if (priv2.length == 51) {
			var private_key = priv2;
		} else {
		 	var private_key = priv1;
		}
	} else { 	// BAU
		var private_key = (signum == 0 ? priv1 : priv2);
	}

	console.info("wifkey.val() = " + tt1 + "\npriv1 = " + priv1 + "\nand yes priv2 = " + priv2);
	console.info("Using this as the private key for this transaction(signum = " + signum + "): " + private_key);
	console.info("Here is the value of script: " + script);
	
	
               // if(coinjs.addressDecode(wifkey.val())){
                if(coinjs.addressDecode(private_key)){
			console.info("validation: coinjs.addressDecode was Good.");
                } else {
			console.info("WARNING: failure in Private Key Validation.");
                }

                if((script.val()).match(/^[a-f0-9]+$/ig)){
			console.info("validation: scriptval.match Good2.");
                } else {
			console.info("validation: scriptval.match not Good2.");
                }

                        $("#signedDataError").addClass('hidden');
                        try {
                                var tx = coinjs.transaction();
                                var t = tx.deserialize(script.val());

                                //var work_signed_transaction = t.sign(wifkey.val());
				if (signum == 0) {	// BAU
                                	var work_signed_transaction = t.sign(private_key);
					console.info("return value from t.sign (work_signed_transaction) = " + work_signed_transaction);
				} else if (signum == 2) { 	// 2nd signature
                                	var work_signed_transaction2 = t.sign(private_key);
					console.info("return value from t.sign (work_signed_transaction2) = " + work_signed_transaction2);
				} else { 		// otherwise, BAU
					console.error("unexpected signum found......!");
					return false;
				}
                        } catch(e) {
                                console.error(e);
				var tt1 = "There was an error in the signing, this usually indicates a mismatch between the paying address, the redeem script, and/or the private key(s).\n" + 
				console.error(tt1);
				alert(tt1);
                        }

if (signum == 0) {	// no frills, it's the original
	$("#signedSuccessBox textarea").val(work_signed_transaction);
	$("#signedSuccessBox").removeClass("hidden");
	console.info("END of auto-sign mechanism. Check out this hash: " + work_signed_transaction);
} else if (signum == 2) {	// this is the 2nd signature
	$("#signedSuccessBox2 textarea").val(work_signed_transaction2);
	$("#signedSuccessBox2").removeClass("hidden");
	console.info("END of auto-sign mechanism. Check out this hash(2nd sig): " + work_signed_transaction2);
} else { // unknown signum
	var tt1 = "Unknown signum of " + signum + " found.";
	console.error(tt1);
	alert(tt1);
	return false;
}



//	alert(	"The redeem script has been created and signed with one signature, no problems so far.\n" + 
console.info("END of auto-sign mechanism. Check out this hash: " + work_signed_transaction);
return true;
}





/************************************
* calculate_multisig_signed_size() 
************************************/
function calculate_multisig_signed_size(zeeReqSigs,zeeNumKeyHolders,zeeNumInputs,zeeNumOutputs) {
var estTxSize = 10;	// Begin with 10 for the header...

	console.info(	"Calculating the multisig (totally) signed size:\n" 	+ 
			"	Required Signatures :" + zeeReqSigs + "\n" 	+ 
			"	Number of KeyHolders:" + zeeNumKeyHolders + "\n"+
			"	Number of Inputs    :" + zeeNumInputs + "\n" 	+
			"	Number of Outputs   :" + zeeNumOutputs);  	
	if (zeeReqSigs == 1)  {
		if (zeeNumKeyHolders == 1) {
			estTxSize += parseInt(zeeNumInputs * 185);
			estTxSize += parseInt(zeeNumOutputs * 32);
		}
		else if (zeeNumKeyHolders == 2) {
			estTxSize += parseInt(zeeNumInputs * 252);		
			estTxSize += parseInt(zeeNumOutputs * 32);	
		}
		else if (zeeNumKeyHolders == 3) {
			estTxSize += parseInt(zeeNumInputs * 320);
			estTxSize += parseInt(zeeNumOutputs * 32);
		}
		else {
			alert("error in calculate_multisig_signed_size for 1/x. Number keyholders = " + zeeNumKeyHolders);
			return false;
		}
	}
	else if (zeeReqSigs == 2) {
		if (zeeNumKeyHolders == 2) {
			estTxSize += parseInt(zeeNumInputs * 327);
			estTxSize += parseInt(zeeNumOutputs * 32);
		}
		else if (zeeNumKeyHolders == 3) {
			estTxSize += parseInt(zeeNumInputs * 402);
			estTxSize += parseInt(zeeNumOutputs * 32);
		}
		else {
			alert("error in calculate_multisig_signed_size:\n" 		+ 
				" Number required sigs = " + zeeNumReqSigs + "\n" 	+ 
				" Number keyholders = " + zeeNumKeyHolders);
			return false;
		}
	}

	console.info(	"	Total Number of bytes: " + estTxSize);

return estTxSize;
} /* end of function calculate_multisig_signed_size() */



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


});   /* EOF */
