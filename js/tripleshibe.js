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
var work_balance = [];
var work_unconfirmed_balance = [];
var work_redeem_script;

$("#tsNewScreen01"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsPayBox"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox1"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox2"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox3"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox4"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox5"   	).toggle("fast","swing");	// hide this at initialization time
$("#tsMiniPayBox6"   	).toggle("fast","swing");	// hide this at initialization time



/* this copies the AB DBS URL to the clipboard */ 
var copyTSTextareaBtn1 = document.querySelector('.js-textTSareacopybtn1');
copyTSTextareaBtn1.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copyTStextarea1');
  copyTextarea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

/* this copies the AC DBS URL to the clipboard */ 
var copyTSTextareaBtn2 = document.querySelector('.js-textTSareacopybtn2');
copyTSTextareaBtn2.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copyTStextarea2');
  copyTextarea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

/* this copies the BC DBS URL to the clipboard */ 
var copyTSTextareaBtn3 = document.querySelector('.js-textTSareacopybtn3');
copyTSTextareaBtn3.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copyTStextarea3');
  copyTextarea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
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

	document.getElementById("tsc1").checked = false;		// we don't want to sort
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

/* user presses the Spend button, this opens up the Spend Dialog Box */ 
/* user presses the Spend button, this opens up the Spend Dialog Box */ 
/* user presses the Spend button, this opens up the Spend Dialog Box */ 
$("#tsTogBtn1").click(function(){       // SPEND
        $("#tsPayBox").toggle();
});
/* user presses the Spend button for Slush #1 */
$("#tsMiniTogBtn1").click(function(){       // SPEND
        $("#tsMiniPayBox1").toggle();
});
/* user presses the Spend button for Slush #2 */
$("#tsMiniTogBtn2").click(function(){       // SPEND
        $("#tsMiniPayBox2").toggle();
});
/* user presses the Spend button for Slush #3 */
$("#tsMiniTogBtn3").click(function(){       // SPEND
        $("#tsMiniPayBox3").toggle();
});
/* user presses the Spend button for Slush #4 */
$("#tsMiniTogBtn4").click(function(){       // SPEND
        $("#tsMiniPayBox4").toggle();
});
/* user presses the Spend button for Slush #5 */
$("#tsMiniTogBtn5").click(function(){       // SPEND
        $("#tsMiniPayBox5").toggle();
});
/* user presses the Spend button for Slush #6 */
$("#tsMiniTogBtn6").click(function(){       // SPEND
        $("#tsMiniPayBox6").toggle();
});


/* user clicks on PaySpot */
/* user clicks on PaySpot */
/* user clicks on PaySpot */
$("#tsPaySpotBtn").click(function(){
        var v1  = document.getElementById("tsAddress").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});
/* user click PaySpot for Slush Fund #1 */
$("#tsMiniPaySpotBtn1").click(function(){
        var v1  = document.getElementById("tsMiniAddress1").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Slush Fund #2 */
$("#tsMiniPaySpotBtn2").click(function(){
        var v1  = document.getElementById("tsMiniAddress2").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Slush Fund #3 */
$("#tsMiniPaySpotBtn3").click(function(){
        var v1  = document.getElementById("tsMiniAddress3").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual A */
$("#tsMiniPaySpotBtn4").click(function(){
        var v1  = document.getElementById("tsMiniAddress4").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual B */
$("#tsMiniPaySpotBtn5").click(function(){
        var v1  = document.getElementById("tsMiniAddress5").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual C */
$("#tsMiniPaySpotBtn6").click(function(){
        var v1  = document.getElementById("tsMiniAddress6").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});


/* user click to Go to DBS #1 */
$("#tsMiniGotoDBSBtn1").click(function(){
        var v1  = document.getElementById("tsDBS_URL_AB").value;
	window.open(v1);
});


/* user click to Go to DBS #2 */
$("#tsMiniGotoDBSBtn2").click(function(){
        var v1  = document.getElementById("tsDBS_URL_AC").value;
	window.open(v1);
});

/* user click to Go to DBS #3 */
$("#tsMiniGotoDBSBtn3").click(function(){
        var v1  = document.getElementById("tsDBS_URL_BC").value;
	window.open(v1);
});

/* user clicks on Verify */
/* user clicks on Verify */
/* user clicks on Verify */
$("#tsVerifyBtn").click(function(){
        var v1  = document.getElementById("tsRedeemScript").value;
        var redeem_script = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
	window.open(tt0);
});
/* user clicks on Verify Slush Fund 1*/
$("#tsMiniVerifyBtn1").click(function(){
        var v1  = document.getElementById("tsMiniRedeem1").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify Slush Fund 2*/
$("#tsMiniVerifyBtn2").click(function(){
        var v1  = document.getElementById("tsMiniRedeem2").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify Slush Fund 3*/
$("#tsMiniVerifyBtn3").click(function(){
        var v1  = document.getElementById("tsMiniRedeem3").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify A */
$("#tsMiniVerifyBtn4").click(function(){
        var v1  = document.getElementById("tsMiniRedeem4").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify B */
$("#tsMiniVerifyBtn5").click(function(){
        var v1  = document.getElementById("tsMiniRedeem5").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify C */
$("#tsMiniVerifyBtn6").click(function(){
        var v1  = document.getElementById("tsMiniRedeem6").value;
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


/* user clicks on more to get the additional TripleShibe functionality */
$("#tsMoreBtn").click(function(){
        $("#tsMoreBox").removeClass("hidden");       // release the flying monkeys! Fly my pretties! FLY
        $("#tsMoreBtn").addClass("hidden");          // hide the button now that we've used it.
	
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
			bs_pubKey1 = keys[0];
			bs_pubKey2 = keys[1];
			bs_pubKey3 = keys[2];
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
	* Get and display the balance
	*****************************************/
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig,"tsBalance","tsUCBalance",0);
	}, 750);



        /* Assemble and display the URLs for the Three DBSes */
        $("#tsDBS_URL_AB").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey1+bs_pubKey2+'#bankSuite');
        $("#tsDBS_URL_AC").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey1+bs_pubKey3+'#bankSuite');
        $("#tsDBS_URL_BC").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey2+bs_pubKey3+'#bankSuite');

	/*  Item #1: 1/3 multisig */
	var keys = [];
        keys.push(bs_pubKey1); // A
        keys.push(bs_pubKey2); // B
        keys.push(bs_pubKey3); // C
        var multisig1 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#tsMiniAddress1").val(multisig1['address']);
	$("#tsMiniRedeem1").val(multisig1['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig1,"tsMiniBalance1","tsMiniUCBalance1",1);
	}, 3500);

	/*  Item #2: 2/3 multisig (BONUS, order ACB) */
	var keys = [];
        keys.push(bs_pubKey1); // A
        keys.push(bs_pubKey3); // C
        keys.push(bs_pubKey2); // B
        var multisig2 =  coinjs.pubkeys2MultisigAddress(keys, 2);
	$("#tsMiniAddress2").val(multisig2['address']);
	$("#tsMiniRedeem2").val(multisig2['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig2,"tsMiniBalance2","tsMiniUCBalance2",2);
	}, 4500);

	/* Item #3: 3/3 multisig */
	var keys = [];
        keys.push(bs_pubKey1);	// A
        keys.push(bs_pubKey2);  // B
        keys.push(bs_pubKey3);  // C
        var multisig3 =  coinjs.pubkeys2MultisigAddress(keys, 3);
	$("#tsMiniAddress3").val(multisig3['address']);
	$("#tsMiniRedeem3").val(multisig3['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig3,"tsMiniBalance3","tsMiniUCBalance3",3);
	}, 5500);

	/* Item #4: 1/1 personal A */
	var keys = [];
        keys.push(bs_pubKey1);	// A
        var multisig4 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#tsMiniAddress4").val(multisig4['address']);
	$("#tsMiniRedeem4").val(multisig4['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig4,"tsMiniBalance4","tsMiniUCBalance4",4);
	}, 500);

	/* Item #5: 1/1 personal B */
	var keys = [];
        keys.push(bs_pubKey2);	// B
        var multisig5 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#tsMiniAddress5").val(multisig5['address']);
	$("#tsMiniRedeem5").val(multisig5['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig5,"tsMiniBalance5","tsMiniUCBalance5",5);
	}, 1500);

	/* Item #6: 1/1 personal C */
	var keys = [];
        keys.push(bs_pubKey3);	// C
        var multisig6 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#tsMiniAddress6").val(multisig6['address']);
	$("#tsMiniRedeem6").val(multisig6['redeemScript']);
	setTimeout(function () {
		tripleshibe_wallet_balance(multisig6,"tsMiniBalance6","tsMiniUCBalance6",6);
	}, 2500);

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

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #1
******************************************************/
$("#tsMiniPayBtn1").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem1").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress1").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr1").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt1").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #2
******************************************************/
$("#tsMiniPayBtn2").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem2").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress2").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr2").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt2").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #3
******************************************************/
$("#tsMiniPayBtn3").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem3").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress3").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr3").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt3").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw A
******************************************************/
$("#tsMiniPayBtn4").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem4").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress4").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr4").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt4").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw B
******************************************************/
$("#tsMiniPayBtn5").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem5").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress5").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr5").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt5").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw C
******************************************************/
$("#tsMiniPayBtn6").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("tsMiniRedeem6").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("tsMiniAddress6").value;
        var address     = v2.trim();
        var v3  = document.getElementById("tsMiniToAddr6").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("tsMiniToAmt6").value;
        var amount      = v4.trim();
        var msg = "tripleshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
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
function tripleshibe_wallet_balance(multisig, urlName, UCurlName, idx) {
var tt1 = [];
var tt2 = [];
var tempvar = [];
console.info("tripleshibe_wallet_balance. Input Address: " + multisig['address']);
	$.ajax ({
		type: "GET",
		url: "https://chain.so/api/v2/get_address_balance/DOGE/" + multisig['address'],
		dataType: "json",
		error: function(data) {
			tt1[idx] = JSON.stringify(data, null, 4);
			console.error("tripleshibe_wallet_balance fail: %s",tt1[idx]);
		},
		success: function(data) {
			tt1[idx] = JSON.stringify(data, null, 4);
			work_balance[idx] = data.data.confirmed_balance;
			work_unconfirmed_balance[idx] = data.data.unconfirmed_balance;
			console.info("tripleshibe_wallet_balance: " + tt1[idx]);
		},
		complete: function(data, status) {
			tempvar[idx] = "Unconfirmed Balance: " + work_unconfirmed_balance[idx]; // now set unconfirmed if non-0
			if (parseFloat(work_unconfirmed_balance[idx]) > parseFloat("0.00000000") ||
			    parseFloat(work_unconfirmed_balance[idx]) < parseFloat("0.00000000")) {
				if (parseFloat(work_unconfirmed_balance[idx]) > parseFloat("0.00000000")) {
					tt1[idx] = "Confirmed Balance: " + parseFloat(work_balance[idx]);
				} else {
					tt1[idx] = "Confirmed Balance: " + parseFloat((parseFloat(work_balance[idx]) +
									parseFloat(work_unconfirmed_balance[idx])));
				}
				document.getElementById(urlName).innerHTML = tt1[idx];    // display to HTML
				document.getElementById(UCurlName).innerHTML = tempvar[idx]; // display to HTML
				//$("#getWalletUCBalance").removeClass("hidden");
				$(UCurlName).removeClass("hidden");
			} else {
				tt1[idx] = "Confirmed Balance: " + parseFloat(work_balance[idx]);
				document.getElementById(urlName).innerHTML = tt1[idx];    // display to HTML
			}
		}
	});
return true;
}

});   /* EOF */

