$(document).ready(function() {
/******************************************************************
        var v1  = document.getElementById("qsAddress").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
* 20170111 tcc
* 4
******************************************************************/
//window.alert("Hello from the initialization portion of quatroshibe.js. ");
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

$("#qsNewScreen01"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsPayBox"   	).toggle("fast","swing");	// hide this at initialization time

$("#qsMiniPayBox1"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox2"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox3"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox4"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox5"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox6"   	).toggle("fast","swing");	// hide this at initialization time
$("#qsMiniPayBox7"   	).toggle("fast","swing");	// hide this at initialization time



var _getVerify = _get("quatroshibe");
if(_getVerify[0]){
var tt0 = _getVerify[0];

        console.info("total length = " + _getVerify[0].length);  // 172 = 130 + 42
        console.info("_getVerify[0] = " + _getVerify[0]);
                    var work_pubkey1 = tt0.slice(0,130);         // first key
                    var work_pubkey2 = tt0.slice(130,260);       // second key
                    var work_pubkey3 = tt0.slice(260,390);       // third key
                    var work_pubkey4 = tt0.slice(390);           // fourth key

               $("#qsPubKey1").val(work_pubkey1);
               $("#qsPubKey2").val(work_pubkey2);
               $("#qsPubKey3").val(work_pubkey3);
               $("#qsPubKey4").val(work_pubkey4);

	document.getElementById("qsc1").checked = false;		// we don't want to sort
	$("#qsmultisigPubKeys").addClass("hidden");
	makeQuatroShibe();		// it'll have NO sorting to preserve unsorted intent by the users.

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
$("#qsTogBtn1").click(function(){       // SPEND
        $("#qsPayBox").toggle();
});
/* user presses the Spend button for Slush #1 */
$("#qsMiniTogBtn1").click(function(){       // SPEND
        $("#qsMiniPayBox1").toggle();
});
/* user presses the Spend button for Slush #2 */
$("#qsMiniTogBtn2").click(function(){       // SPEND
        $("#qsMiniPayBox2").toggle();
});
/* user presses the Spend button for Slush #3 */
$("#qsMiniTogBtn3").click(function(){       // SPEND
        $("#qsMiniPayBox3").toggle();
});
/* user presses the Spend button for personal A #4 */
$("#qsMiniTogBtn4").click(function(){       // SPEND
        $("#qsMiniPayBox4").toggle();
});
/* user presses the Spend button for personal B #5 */
$("#qsMiniTogBtn5").click(function(){       // SPEND
        $("#qsMiniPayBox5").toggle();
});
/* user presses the Spend button for personal C #6 */
$("#qsMiniTogBtn6").click(function(){       // SPEND
        $("#qsMiniPayBox6").toggle();
});
/* user presses the Spend button for personal D #7 */
$("#qsMiniTogBtn7").click(function(){       // SPEND
        $("#qsMiniPayBox7").toggle();
});


/* user clicks on PaySpot */
/* user clicks on PaySpot */
/* user clicks on PaySpot */
$("#qsPaySpotBtn").click(function(){
        var v1  = document.getElementById("qsAddress").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});
/* user click PaySpot for Slush Fund #1 */
$("#qsMiniPaySpotBtn1").click(function(){
        var v1  = document.getElementById("qsMiniAddress1").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Slush Fund #2 */
$("#qsMiniPaySpotBtn2").click(function(){
        var v1  = document.getElementById("qsMiniAddress2").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Slush Fund #3 */
$("#qsMiniPaySpotBtn3").click(function(){
        var v1  = document.getElementById("qsMiniAddress3").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual A */
$("#qsMiniPaySpotBtn4").click(function(){
        var v1  = document.getElementById("qsMiniAddress4").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual B */
$("#qsMiniPaySpotBtn5").click(function(){
        var v1  = document.getElementById("qsMiniAddress5").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click PaySpot for Individual C */
$("#qsMiniPaySpotBtn6").click(function(){
        var v1  = document.getElementById("qsMiniAddress6").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});


/* user click PaySpot for Individual D */
$("#qsMiniPaySpotBtn7").click(function(){
        var v1  = document.getElementById("qsMiniAddress7").value;
        var v2 = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?payspot='+v2+'#payspot';
	window.open(tt0);
});

/* user click to Go to DBS #1 */
$("#qsMiniGotoDBSBtn1").click(function(){
        var v1  = document.getElementById("qsDBS_URL_AB").value;
	window.open(v1);
});


/* user click to Go to DBS #2 */
$("#qsMiniGotoDBSBtn2").click(function(){
        var v1  = document.getElementById("qsDBS_URL_AC").value;
	window.open(v1);
});

/* user click to Go to DBS #3 */
$("#qsMiniGotoDBSBtn3").click(function(){
        var v1  = document.getElementById("qsDBS_URL_BC").value;
	window.open(v1);
});

/* user clicks on Verify */
/* user clicks on Verify */
/* user clicks on Verify */
$("#qsVerifyBtn").click(function(){
        var v1  = document.getElementById("qsRedeemScript").value;
        var redeem_script = v1.trim();
	var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
	window.open(tt0);
});
/* user clicks on Verify Slush Fund 1*/
$("#qsMiniVerifyBtn1").click(function(){
        var v1  = document.getElementById("qsMiniRedeem1").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify Slush Fund 2*/
$("#qsMiniVerifyBtn2").click(function(){
        var v1  = document.getElementById("qsMiniRedeem2").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify Slush Fund 3*/
$("#qsMiniVerifyBtn3").click(function(){
        var v1  = document.getElementById("qsMiniRedeem3").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify A */
$("#qsMiniVerifyBtn4").click(function(){
        var v1  = document.getElementById("qsMiniRedeem4").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify B */
$("#qsMiniVerifyBtn5").click(function(){
        var v1  = document.getElementById("qsMiniRedeem5").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify C */
$("#qsMiniVerifyBtn6").click(function(){
        var v1  = document.getElementById("qsMiniRedeem6").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});
/* user clicks on Verify D */
$("#qsMiniVerifyBtn7").click(function(){
        var v1  = document.getElementById("qsMiniRedeem7").value;
        var redeem_script = v1.trim();
        var tt0 = document.location.origin+''+document.location.pathname+'?verify='+redeem_script+'#verify';
        window.open(tt0);
});





/* user clicks on Reddit Link */
/*
$("#qsRedditBtn").click(function(){
var v1  = document.getElementById("qsRedeemScript").value;
var bs_pubKey1 = document.getElementById("qsPubKey1").value;             // retrieve the pubkeys from the html
var bs_pubKey2 = document.getElementById("qsPubKey2").value;             // retrieve the pubkeys from the html
var bs_pubKey3 = document.getElementById("qsPubKey3").value;             // retrieve the pubkeys from the html
var bs_pubKey4 = document.getElementById("qsPubKey4").value;             // retrieve the pubkeys from the html
        var redeem_script = v1.trim();
	var tt0 = 'https://www.reddit.com/search?q=%22' + document.location.origin+''+document.location.pathname+  '?quatroshibe='+bs_pubKey1+bs_pubKey2+bs_pubKey3+bs_pubKey4+'#quatroshibe' + '%22';
	window.open(tt0);
});
removed 20170113 */


/* user clicks on more to get the additional Quatroshibe functionality */
$("#qsMoreBtn").click(function(){
        $("#qsMoreBox").removeClass("hidden");       // release the flying monkeys! Fly my pretties! FLY
        $("#qsMoreBtn").addClass("hidden");          // hide the button now that we've used it.
	
});

/* user clicks on Next for generating the multisig */
$("#newqsMultiSigAddress").click(function(){
	$("#qsmultisigPubKeys").addClass("hidden");
	makeQuatroShibe();		// it'll have sorting 
});

/*************************************************
**************************************************/
function makeQuatroShibe() {
var bs_pubKey1 = document.getElementById("qsPubKey1").value;             // retrieve the pubkeys from the html
var bs_pubKey2 = document.getElementById("qsPubKey2").value;             // retrieve the pubkeys from the html
var bs_pubKey3 = document.getElementById("qsPubKey3").value;             // retrieve the pubkeys from the html
var bs_pubKey4 = document.getElementById("qsPubKey4").value;             // retrieve the pubkeys from the html
var keys = [];
var bs_multiPersonal1;
var bs_multiPersonal2;
var bs_multiSlush;
var bs_multiChecking;
var bs_multiSavings;
var bs_multiDoGoodFund;
var doSort;


       if($("#qsc1").is(":checked")){
		doSort = 1;		
	} else {
		doSort = 0;
	}
	
//        $("#bankSuiteNewScreen02").removeClass("hidden");       // show the URL with the Public Key in it.

//       $("#bankSuiteLoadBtnWrap").addClass("hidden");  // hide the go/refresh button for seconds       

        if (bs_pubKey1.length == 130 && bs_pubKey2.length == 130 && bs_pubKey3.length == 130 && bs_pubKey4.length == 130) {
                console.info("A single public key has been brought into port 1:");
                keys.push(bs_pubKey1);
                keys.push(bs_pubKey2); 
                keys.push(bs_pubKey3); 
                keys.push(bs_pubKey4); 
		if (doSort) {
	                keys.sort();    // order the keys alphabetically
			console.info("Keys have been sorted alphabetically.");
			bs_pubKey1 = keys[0];
			bs_pubKey2 = keys[1];
			bs_pubKey3 = keys[2];
			bs_pubKey4 = keys[3];
		} else {
			console.info("Keys have NOT been sorted alphabetically.");
		}
                $("#qsPubKey1").val(bs_pubKey1);		// display them re-ordered...
                $("#qsPubKey2").val(bs_pubKey2);		// "
                $("#qsPubKey3").val(bs_pubKey3);		// "
                $("#qsPubKey4").val(bs_pubKey4);		// "
	//	alert("QuatroShibe. so far so good.");
	} else {
		var tt1 = "ERROR: Not all four pubkeys are the expected size:\n" + 
			"Key 1 = "   + bs_pubKey1.length +  " (expected: 130)" +
			"\nKey 2 = " + bs_pubKey2.length +  " (expected: 130)" +
			"\nKey 3 = " + bs_pubKey3.length +  " (expected: 130)" +
			"\nKey 4 = " + bs_pubKey4.length +  " (expected: 130)" +
			"\nPlease revise and try again.";
		$("#qsmultisigPubKeys").removeClass("hidden");
		console.error(tt1);
		alert(tt1);
		return false;
	}

	$("#qsmultiSigData").removeClass("hidden");			// HAPPY PATH!
//	$("#qsmultisigPubKeysAfter").removeClass("hidden");			// HAPPY PATH! but keep it hidden because we need it in the back.
	$("#qsPubKeyAfter1").val(bs_pubKey1);		// these 4 display the readonly pubkeys..
	$("#qsPubKeyAfter2").val(bs_pubKey2);	
	$("#qsPubKeyAfter3").val(bs_pubKey3);		
	$("#qsPubKeyAfter4").val(bs_pubKey4);		

        /***************************************
	* Create the multisig, redeem etc here:
        ****************************************/
        var multisig =  coinjs.pubkeys2MultisigAddress(keys, 3);
                        $("#qsAddress").val(multisig['address']);
                        $("#qsRedeemScript").val(multisig['redeemScript']);
                        $("#qsRedeemScriptURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig['redeemScript']+'#verify');

	/* here's the URL for this page. */
	$("#qsPageURL").val(document.location.origin+''+document.location.pathname+  '?quatroshibe='+bs_pubKey1+bs_pubKey2+bs_pubKey3+bs_pubKey4+'#quatroshibe');
	
	/*****************************************
	* Get and display the balance
	*****************************************/
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig,"qsBalance","qsUCBalance",0);
	}, 750);



        /* Assemble and display the URLs for the Three DBSes */
        $("#qsDBS_URL_AB").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey1+bs_pubKey2+'#bankSuite');
        $("#qsDBS_URL_AC").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey1+bs_pubKey3+'#bankSuite');
        $("#qsDBS_URL_BC").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey2+bs_pubKey3+'#bankSuite');

	/*  Item #1: 1/4 multisig */
	var keys = [];
        keys.push(bs_pubKey1); // A
        keys.push(bs_pubKey2); // B
        keys.push(bs_pubKey3); // C
        keys.push(bs_pubKey4); // D 
        var multisig1 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#qsMiniAddress1").val(multisig1['address']);
	$("#qsMiniRedeem1").val(multisig1['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig1,"qsMiniBalance1","qsMiniUCBalance1",1);
	}, 3500);

	/*  Item #2: 2/4 multisig (BONUS, order ACB) */
	var keys = [];
        keys.push(bs_pubKey1); // A
        keys.push(bs_pubKey2); // C
        keys.push(bs_pubKey3); // B
        keys.push(bs_pubKey4); // D
        var multisig2 =  coinjs.pubkeys2MultisigAddress(keys, 2);
	$("#qsMiniAddress2").val(multisig2['address']);
	$("#qsMiniRedeem2").val(multisig2['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig2,"qsMiniBalance2","qsMiniUCBalance2",2);
	}, 4500);

	/* Item #3: 3/4 multisig */
	var keys = [];
        keys.push(bs_pubKey1);	// A
        keys.push(bs_pubKey2);  // B
        keys.push(bs_pubKey4);  // D
        keys.push(bs_pubKey3);  // C   note that this order is purposefully done so as to not dupe the main acct.
        var multisig3 =  coinjs.pubkeys2MultisigAddress(keys, 3);
	$("#qsMiniAddress3").val(multisig3['address']);
	$("#qsMiniRedeem3").val(multisig3['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig3,"qsMiniBalance3","qsMiniUCBalance3",3);
	}, 5500);

	/* Item #4: 1/1 personal A */
	var keys = [];
        keys.push(bs_pubKey1);	// A
        var multisig4 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#qsMiniAddress4").val(multisig4['address']);
	$("#qsMiniRedeem4").val(multisig4['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig4,"qsMiniBalance4","qsMiniUCBalance4",4);
	}, 500);

	/* Item #5: 1/1 personal B */
	var keys = [];
        keys.push(bs_pubKey2);	// B
        var multisig5 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#qsMiniAddress5").val(multisig5['address']);
	$("#qsMiniRedeem5").val(multisig5['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig5,"qsMiniBalance5","qsMiniUCBalance5",5);
	}, 1500);

	/* Item #6: 1/1 personal C */
	var keys = [];
        keys.push(bs_pubKey3);	// C
        var multisig6 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#qsMiniAddress6").val(multisig6['address']);
	$("#qsMiniRedeem6").val(multisig6['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig6,"qsMiniBalance6","qsMiniUCBalance6",6);
	}, 2500);

	/* Item #6: 1/1 personal D */
	var keys = [];
        keys.push(bs_pubKey4);	// D
        var multisig7 =  coinjs.pubkeys2MultisigAddress(keys, 1);
	$("#qsMiniAddress7").val(multisig7['address']);
	$("#qsMiniRedeem7").val(multisig7['redeemScript']);
	setTimeout(function () {
		quatroshibe_wallet_balance(multisig7,"qsMiniBalance7","qsMiniUCBalance7",7);
	}, 2500);

}


/******************************************************
* button to go to the WITHDRAW screen.
******************************************************/
$("#qsPayBtn").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsRedeemScript").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsAddress").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsToAddr").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsToAmt").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #1
******************************************************/
$("#qsMiniPayBtn1").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem1").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress1").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr1").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt1").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #2
******************************************************/
$("#qsMiniPayBtn2").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem2").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress2").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr2").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt2").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to the WITHDRAW screen. for SLUSH #3
******************************************************/
$("#qsMiniPayBtn3").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem3").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress3").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr3").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt3").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw A
******************************************************/
$("#qsMiniPayBtn4").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem4").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress4").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr4").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt4").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw B
******************************************************/
$("#qsMiniPayBtn5").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem5").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress5").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr5").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt5").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw C
******************************************************/
$("#qsMiniPayBtn6").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem6").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress6").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr6").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt6").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/******************************************************
* button to go to WithDraw D
******************************************************/
$("#qsMiniPayBtn7").click(function(){   // NEXT (to go to withdrawl screen
        var v1  = document.getElementById("qsMiniRedeem7").value;
        var redeem_script = v1.trim();
        var v2  = document.getElementById("qsMiniAddress7").value;
        var address     = v2.trim();
        var v3  = document.getElementById("qsMiniToAddr7").value;
        var to_address  = v3.trim();
        var v4  = document.getElementById("qsMiniToAmt7").value;
        var amount      = v4.trim();
        var msg = "quatroshibe";
        /* just separate the fields by . */
        var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
                        msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
        //console.info("Value is " + tt1);
        window.open(tt1);
});

/* user clicks on the 'Quick Instructions' */
$("#qsQuickInstructions").click(function(){
        $("#qsNewScreen01").toggle();
});

/* copy address */
var copyTextareaBtn1 = document.querySelector('.js-qstextareacopybtn1');
copyTextareaBtn1.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-qscopytextarea1');
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
var copyTextareaBtn2 = document.querySelector('.js-qstextareacopybtn2');
copyTextareaBtn2.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-qscopytextarea2');
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
function quatroshibe_wallet_balance(multisig, urlName, UCurlName, idx) {
var tt1 = [];
var tt2 = [];
var tempvar = [];
console.info("quatroshibe_wallet_balance. Input Address: " + multisig['address']);
	$.ajax ({
		type: "GET",
		url: "https://chain.so/api/v2/get_address_balance/DOGE/" + multisig['address'],
		dataType: "json",
		error: function(data) {
			tt1[idx] = JSON.stringify(data, null, 4);
			console.error("quatroshibe_wallet_balance fail: %s",tt1[idx]);
		},
		success: function(data) {
			tt1[idx] = JSON.stringify(data, null, 4);
			work_balance[idx] = data.data.confirmed_balance;
			work_unconfirmed_balance[idx] = data.data.unconfirmed_balance;
			console.info("quatroshibe_wallet_balance: " + tt1[idx]);
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

