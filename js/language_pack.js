$(document).ready(function() {
/******************************************************************
* wow
* https://docs.google.com/document/d/1CRKfbI7XBvb7yxrNYSbk3Zlqw9YU5xYTko5XP6eLP3U/edit?usp=sharing
******************************************************************/

var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

/***********************************************
* The Language Buttons on the Pay Spot Screens 
************************************************/
$("#PSdutchbutton").click(function(){
    reader.open('get','docs/dutch.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSspanishbutton").click(function(){
    reader.open('get','docs/spanish.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSenglishbutton").click(function(){
    reader.open('get','docs/english.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSfrenchbutton").click(function(){
    reader.open('get','docs/french.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSitalianbutton").click(function(){
    reader.open('get','docs/italian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSrussianbutton").click(function(){
    reader.open('get','docs/russian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PSgermanbutton").click(function(){
    reader.open('get','docs/german.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#PShungarianbutton").click(function(){
    reader.open('get','docs/hungarian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

/***********************************************
* The Language Buttons on the Withdrawl Screens 
************************************************/
$("#Wdutchbutton").click(function(){
    reader.open('get','docs/dutch.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Wspanishbutton").click(function(){
    reader.open('get','docs/spanish.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Wenglishbutton").click(function(){
    reader.open('get','docs/english.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Wfrenchbutton").click(function(){
    reader.open('get','docs/french.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Witalianbutton").click(function(){
    reader.open('get','docs/italian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Wrussianbutton").click(function(){
    reader.open('get','docs/russian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Wgermanbutton").click(function(){
    reader.open('get','docs/german.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#Whungarianbutton").click(function(){
    reader.open('get','docs/hungarian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

/***********************************************
* The Language Buttons on the DBS Screens 
************************************************/
$("#DBSdutchbutton").click(function(){
    reader.open('get','docs/dutch.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSspanishbutton").click(function(){
    reader.open('get','docs/spanish.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSenglishbutton").click(function(){
    reader.open('get','docs/english.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSfrenchbutton").click(function(){
    reader.open('get','docs/french.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSitalianbutton").click(function(){
    reader.open('get','docs/italian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSrussianbutton").click(function(){
    reader.open('get','docs/russian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBSgermanbutton").click(function(){
    reader.open('get','docs/german.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#DBShungarianbutton").click(function(){
    reader.open('get','docs/hungarian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

/***********************************************
* The Language Buttons on the TripleShibe Screens 
************************************************/
$("#TSdutchbutton").click(function(){
    reader.open('get','docs/dutch.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TSspanishbutton").click(function(){
    reader.open('get','docs/spanish.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TSenglishbutton").click(function(){
    reader.open('get','docs/english.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});


$("#TSfrenchbutton").click(function(){
    reader.open('get','docs/french.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TSitalianbutton").click(function(){
    reader.open('get','docs/italian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TSrussianbutton").click(function(){
    reader.open('get','docs/russian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TSgermanbutton").click(function(){
    reader.open('get','docs/german.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

$("#TShungarianbutton").click(function(){
    reader.open('get','docs/hungarian.json', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
});

function displayContents() {
    if(reader.readyState==4) {
	var foo = JSON.parse(reader.responseText);


	var el = [];
	var ts = [];

	/*********************************************************************************
	*  Index 0: first take care of the 'language' text below the language buttons... 
	**********************************************************************************/
	var e0_0 = document.getElementById('langdisp00a');	// on the withdrawl screen
	e0_0.innerHTML = foo.lang.menuitem[0].text;	
	var e0_1 = document.getElementById('langdisp00b');	// on the DBS screen
	e0_1.innerHTML = foo.lang.menuitem[0].text;	
	var e0_2 = document.getElementById('langdisp00c');	// on the TS screen
	e0_2.innerHTML = foo.lang.menuitem[0].text;	
	var e0_3 = document.getElementById('langdisp00d');	// on the Pay Spot screen
	e0_3.innerHTML = foo.lang.menuitem[0].text;	

	/**********************************************
	* Index 1 : DBS: You Hold the Keys
	* Index 2 : DBS: Dogecoin Bankings Suite
	* Index 3 : DBS: (you keep one piece...)
	* (skip 4 here it's a button)
	* Index 5 : DBS: Step 1... 
	* Index 6 : DBS: Step 2...
	* Index 7 : DBS: Step 3...
	* Index 8 : DBS: Here's a quick demo....video
	* Index 9 : DBS: Your DBS is now ready 4 use
	* Index 10: DBS: You may share the Public Suite Key, or keep it to yourself.
	* Index 11: DBS: These static dogecoin multisignatures can be computed from the Private Suite Key.
	* Index 12: DBS: Do NOT lose your Private Suite Key. Record it and save it.
	* Index 13: DBS: (if you bandy your Private Key about it is susceptible to theft)
	* Index 14: DBS: These accounts are disposable. You may make as many of them as you like. 
	* Index 15: DBS: You can break a Suite Key in half, and then share it with another person, etc. Geekspeak, they are just 2 Pub/PrivKeys put together!
	* Index 16: DBS: You can run this page offline.
	* Index 17: DBS: This program will create identical multisig values as compared to core.
	* (skip 18 here it's a button)
	* Index 19: DBS: or enter the public suite key below or..
	* (skip 20 here it's a button)
	* (skip 21 here it's a textarea)
	* (skip 22 here it's a textarea)
	* Index 23: DBS: Here is your shareable URL for this page..
	* Index 24: DBS: Personal 1 1/1 multisig
	* Index 25: DBS: Personal 2 1/1 multisig
	* (skip 26)
	**********************************************/
	for (var i=1;i<=26;i++) {
		if (i == 4 || i == 18 || (i >= 20 && i <= 22) || i == 26)  {
			// do nothing 
		} else {
			ts[i] = 'langdisp' + pad(i);
//			console.info("Trying " + ts[i]);
			el[i] = document.getElementById(ts[i]);
			el[i].innerHTML = foo.lang.menuitem[i].text;	
		}
	}

	/*******************************************************************
	* Do some textarea stuff here:
	* Index 04: DBS: Click Here for Instructions (button) (multiple)
	* Index 18: DBS: Click Here to make new DBS..(button)
	* Index 20: DBS: here (button)
	* (skip for now) Index 21: DBS: Insert Public Key Here (textarea)
	* (skip for now) Index 22: DBS: (optional) insert another public key (textarea)
	*******************************************************************/
	document.getElementById("bankSuiteQuickInstructions").value = foo.lang.menuitem[4].text;
	document.getElementById("tsQuickInstructions").value = foo.lang.menuitem[4].text;
	document.getElementById("bankSuiteNewKeys").value 	= foo.lang.menuitem[18].text;
	document.getElementById("bankSuiteLoad").value 		= foo.lang.menuitem[20].text;
	//document.getElementById("bankSuitePubKey1").value = foo.lang.menuitem[21].text;
	//document.getElementById("bankSuitePubKey2").value = foo.lang.menuitem[22].text;

	/*******************************************************************
	* Index 27: various: Address (multiple)
	*******************************************************************/
	var f0_0 = document.getElementById('langdisp27a');	// DBS Personal 1
	f0_0.innerHTML = foo.lang.menuitem[27].text;	
	var f0_1 = document.getElementById('langdisp27b');	// DBS Personal 2
	f0_1.innerHTML = foo.lang.menuitem[27].text;	
	var f0_2 = document.getElementById('langdisp27c');	// DBS Slush Fund
	f0_2.innerHTML = foo.lang.menuitem[27].text;
	var f0_3 = document.getElementById('langdisp27d');	// DBS Checking Account
	f0_3.innerHTML = foo.lang.menuitem[27].text;
	var f0_4 = document.getElementById('langdisp27e');	// DBS Saving Account
	f0_4.innerHTML = foo.lang.menuitem[27].text;
	var f0_5 = document.getElementById('langdisp27f');	// DBS Do Good Fund
	f0_5.innerHTML = foo.lang.menuitem[27].text;
	var f0_6 = document.getElementById('langdisp27g');	// Pay Spot
	f0_6.innerHTML = foo.lang.menuitem[27].text;

	/*******************************************************************
	* Index 28: (various) Spend Button
	* Index 29: (various) Pay Spot Button
	* Index 30: (various) Verify Button
	*******************************************************************/
	document.getElementById("bsTogBtn1").value	= foo.lang.menuitem[28].text;	// DBS Spend Personal 1
	document.getElementById("bsTogBtn2").value	= foo.lang.menuitem[28].text;	// DBS Spend Personal 2
	document.getElementById("bsTogBtn3").value	= foo.lang.menuitem[28].text;	// DBS Spend Slush Fund
	document.getElementById("bsTogBtn4").value	= foo.lang.menuitem[28].text;	// DBS Spend Checking Account
	document.getElementById("bsTogBtn5").value	= foo.lang.menuitem[28].text;	// DBS Spend Saving Account
	document.getElementById("bsTogBtn6").value	= foo.lang.menuitem[28].text;	// DBS Spend Do Good Fund
	document.getElementById("bsPaySpotBtn1").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Personal 1
	document.getElementById("bsPaySpotBtn2").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Personal 2
	document.getElementById("bsPaySpotBtn3").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Slush Fund
	document.getElementById("bsPaySpotBtn4").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Checking
	document.getElementById("bsPaySpotBtn5").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Savings
	document.getElementById("bsPaySpotBtn6").value	= foo.lang.menuitem[29].text;	// DBS Pay Spot Do Good Fund
	document.getElementById("bsVerifyBtn1").value	= foo.lang.menuitem[30].text;	// DBS Verify Personal 1 
	document.getElementById("bsVerifyBtn2").value	= foo.lang.menuitem[30].text;	// DBS Verify Personal 2
	document.getElementById("bsVerifyBtn3").value	= foo.lang.menuitem[30].text;	// DBS Verify Slush
	document.getElementById("bsVerifyBtn4").value	= foo.lang.menuitem[30].text;	// DBS Verify Checking
	document.getElementById("bsVerifyBtn5").value	= foo.lang.menuitem[30].text;	// DBS Verify Savings
	document.getElementById("bsVerifyBtn6").value	= foo.lang.menuitem[30].text;	// DBS Verfiy Do Good Fund

	/**********************************************
	* (if this looks familiar it's the same style loop as above)
	* Index 31: DBS: Slush Fund 1/2 multisig
	* Index 32: DBS: Checking 1/2 multisig
	* Index 33: DBS: Savings 2/2 multisig
	* Index 34: DBS: Do Good Fund 2/2 multisig
	* Index 35: DBS: This is your Private Suite key SAVE IT
	* (skip 36 here it's a button)
	* (skip 37 it's a dupe of 24!)
	* (skip 38 confirmed balance)
	**********************************************/
	for (var i=31;i<=38;i++) {
		if (i == 36 || i == 37 || i == 38) {
			// do nothing 
		} else {
			ts[i] = 'langdisp' + pad(i);
//			console.info("Trying " + ts[i]);
			el[i] = document.getElementById(ts[i]);
			el[i].innerHTML = foo.lang.menuitem[i].text;	
		}
	}

	/*******************************************************************
	* Index 36: Split into 2 Keys (button)
	*******************************************************************/
	document.getElementById("bankSuiteSplitPrivate").value	= foo.lang.menuitem[36].text;


	/*******************************************************************
	* Index 39: various: To Address: (multiple)
	* Index 40: various: Amount: (multiple)
	* (skip 41 buttons it's below)
	* Index 42: various: (the mining fee is added... (multiple)
	*******************************************************************/
	var g0_0 = document.getElementById('langdisp39a');	// DBS To Address: Personal 1
	g0_0.innerHTML = foo.lang.menuitem[39].text;	
	var g0_1 = document.getElementById('langdisp39b');	// DBS To Address: Personal 2
	g0_1.innerHTML = foo.lang.menuitem[39].text;	
	var g0_2 = document.getElementById('langdisp39c');	// DBS To Address: Slush
	g0_2.innerHTML = foo.lang.menuitem[39].text;	
	var g0_3 = document.getElementById('langdisp39d');	// DBS To Address: Checking
	g0_3.innerHTML = foo.lang.menuitem[39].text;	
	var g0_4 = document.getElementById('langdisp39e');	// DBS To Address: Savings
	g0_4.innerHTML = foo.lang.menuitem[39].text;	
	var g0_5 = document.getElementById('langdisp39f');	// DBS To Address: Do Good Fund
	g0_5.innerHTML = foo.lang.menuitem[39].text;	
	var h0_0 = document.getElementById('langdisp40a');	// DBS Amount: Personal 1
	h0_0.innerHTML = foo.lang.menuitem[40].text;	
	var h0_1 = document.getElementById('langdisp40b');	// DBS Amount: Personal 2
	h0_1.innerHTML = foo.lang.menuitem[40].text;	
	var h0_2 = document.getElementById('langdisp40c');	// DBS Amount: Slush
	h0_2.innerHTML = foo.lang.menuitem[40].text;	
	var h0_3 = document.getElementById('langdisp40d');	// DBS Amount: Checking
	h0_3.innerHTML = foo.lang.menuitem[40].text;	
	var h0_4 = document.getElementById('langdisp40e');	// DBS Amount: Savings
	h0_4.innerHTML = foo.lang.menuitem[40].text;	
	var h0_5 = document.getElementById('langdisp40f');	// DBS Amount: Do Good Fund
	h0_5.innerHTML = foo.lang.menuitem[40].text;	
	var h0_6 = document.getElementById('langdisp40g');	// WITHDRAWL: Amount:
	h0_6.innerHTML = foo.lang.menuitem[40].text;	
	var i0_0 = document.getElementById('langdisp42a');	// DBS mining text: Personal 1
	i0_0.innerHTML = foo.lang.menuitem[42].text;	
	var i0_1 = document.getElementById('langdisp42b');	// DBS mining text: Personal 2
	i0_1.innerHTML = foo.lang.menuitem[42].text;	
	var i0_2 = document.getElementById('langdisp42c');	// DBS mining text: Slush
	i0_2.innerHTML = foo.lang.menuitem[42].text;	
	var i0_3 = document.getElementById('langdisp42d');	// DBS mining text: Checking
	i0_3.innerHTML = foo.lang.menuitem[42].text;	
	var i0_4 = document.getElementById('langdisp42e');	// DBS mining text: Savings
	i0_4.innerHTML = foo.lang.menuitem[42].text;	
	var i0_5 = document.getElementById('langdisp42f');	// DBS mining text: Do Good Fund
	i0_5.innerHTML = foo.lang.menuitem[42].text;	
	var i0_6 = document.getElementById('langdisp42g');	// Withdraw mining text
	i0_6.innerHTML = foo.lang.menuitem[42].text;	


	/*******************************************************************
	* Index 41: next button  (multiple)
	*******************************************************************/
	document.getElementById("bankSuitePay1").value	= foo.lang.menuitem[41].text;	// DBS next Personal 1
	document.getElementById("bankSuitePay2").value	= foo.lang.menuitem[41].text;	// DBS next Personal 2
	document.getElementById("bankSuitePay3").value	= foo.lang.menuitem[41].text;	// DBS next Slush Fund
	document.getElementById("bankSuitePay4").value	= foo.lang.menuitem[41].text;	// DBS next Checking Account
	document.getElementById("bankSuitePay5").value	= foo.lang.menuitem[41].text;	// DBS next Saving Account
	document.getElementById("bankSuitePay6").value	= foo.lang.menuitem[41].text;	// DBS next Do Good Fund
	document.getElementById("redeemit").value	= foo.lang.menuitem[41].text;	// WITHDRAW next button

	/**********************************************
	* Index 43: WITHDRAWL: Withdraw from your multisig or reg. dogecoin addr
	* (skip 44 it's a button handled below)
	* Index 45: WITHDRAWL: Address to pay from:
	* (skip 46 confirmed balance: it's out of scope right now)
	* Index 47: WITHDRAWL: Destination addr to pay to:
	* Index 48: WITHDRAWL: Your Private Suite Key or Signature...
	* (skip 49 it's a button below)
	* Index 50: WITHDRAWL: Do not sign (for offline use)
	* Index 51: WITHDRAWL: When all those are filled out, press this button..
	* Index 52: WITHDRAWL: Successful Sign
	* Index 53: WITHDRAWL: the dogecoin address has been signed one time
	* (skip 54, button)
	* (skip 55, button)
	* Index 56: WITHDRAWL: This transaction successfully sent to D network! 
	* Index 57: WITHDRAWL: The txid is your receipt
	* Index 58: WITHDRAWL: You can view details at chain.so
	* Index 59: WITHDRAWL: Please wait few mins for confirmation
	* Index 60: WITHDRAWL: The Broadcast has failed. 
	* Index 61: WITHDRAWL: Sorry. Something is not right.
	* Index 62: WITHDRAWL: Here's some ideas for fixing this.
	* Index 63: WITHDRAWL: Did you sign with the correct password matching this account?
	* Index 64: WITHDRAWL: Are any fields missing from your form? Are the fields as expected?
	* Index 65: WITHDRAWL: (ie: didn't put the amount where the addr should be )
	* Index 66: WITHDRAWL: Is there enough money in the acct to clear the transactin?
	* Index 67: WITHDRAWL: Please try again
	* Index 68: PAY SPOT: Pay Spot: Dogecoin is accepted here 
	* Index 69: PAY SPOT: Shareable URL for this page
	* (skip 70, button)
	* (skip 71, button)
	* (skip 72, out of scope )
	**********************************************/
	for (var i=43;i<=72;i++) {
		if (i == 44 || i == 46 || i == 49 || i == 54 || i == 55 || i == 70 || i == 71 || i == 72) {
			// do nothing 
		} else {
			ts[i] = 'langdisp' + pad(i);
//			console.info("Trying " + ts[i]);
			el[i] = document.getElementById(ts[i]);
			el[i].innerHTML = foo.lang.menuitem[i].text;	
		}
	}

	/*******************************************************************
	* Index 44: WITHDRAWL: Reset Everything and Start Over (button)
	* Index 54: WITHDRAWL: BROADCAST (onine)    (button)
	* Index 55: WITHDRAWL: MAKE VERIFY URL      (button)
	* Index 70: PaySpot Load related reddit postings if any
	* Index 71: PaySpot Deposit funds using dogetipbot
	* Index 73: MAKE SIGN URL (or sign again) button (multiple)
	*******************************************************************/
	document.getElementById("redeemVerifyReset").value	= foo.lang.menuitem[44].text;	
	document.getElementById("redeemVerifyBtn1x").value	= foo.lang.menuitem[54].text;	// Broadcast
	document.getElementById("redeemVerifyBtn3x").value	= foo.lang.menuitem[54].text;	// Broadcast
	document.getElementById("redeemVerifyBtn4x").value	= foo.lang.menuitem[55].text;	
	document.getElementById("psRedditBtn").value		= foo.lang.menuitem[70].text;	
	//document.getElementById("psRedditLoadBtn").value	= foo.lang.menuitem[71].text;	// this is the dogetipbot button, removed 20170510
	document.getElementById("redeemVerifyBtn2x").value	= foo.lang.menuitem[73].text;	// SIGN
	document.getElementById("redeemVerifyBtn5x").value	= foo.lang.menuitem[73].text;	// SIGN
	document.getElementById("redeemVerifyBtn6x").value	= foo.lang.menuitem[73].text;	// SIGN


	console.info("display contents language mapping complete");
    }
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

$("#Wenglishbutton").click();  // default to English for the Initialization - load the English Set.
});

