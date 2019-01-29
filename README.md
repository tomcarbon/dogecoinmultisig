This project is a fork of the github project coinb.in (forked in June 2016). Primarily javascript, this project does not utilize PHP or central server. Copy the whole project into a directory on your server and it's ready to go.

*Multiple multisignature wallet designs, decentralized, free, multi-user capable.* The withdraw is broken down into several of the dogecoin network's principal components, allowing the user to verify at each step of the dogecoin-sending process (creating transaction, signing(s), broadcast). If you want to learn how cryptocurrency transactions work, then trying to 'verify' everything you can along the way should prove instructive. This information is also logged in the console (F12 on most browsers).

Here's a Quick Pictorial Guide (ELI5) for basic functionality: https://imgur.com/a/fka37.

The dogecoin blockchain is accessed via API and two vendors: chain.so and blockcypher.com. 

There are three basic wallet designs: The Banking Suite, the TripleShibe, and the QuatroShibe

The first wallet was the Dogecoin Banking Suite. Pressing the 'new' button generates an account, creating two private keys, which the user must safely store themselves. This simple-to-use tool controls 6 dogecoin addresses.

TripleShibe is a functionality requiring 3 public keys, in order to preside over various types of multisigs (1/1, 1/2, 2/2, 1/3, 2/3, 3/3), these are controlled by 3 WIF (Private) Keys. If three people use the account, each controlling their own private key, they will each have their own private dogecoin address, and also shared access to dozens of multisig addresses. 

The TripleShibe Instruction Manual has been translated into ten languages, and can be found in the /docs folder.

Similar to the TripleShibe, the Quatroshibe requires 4 public keys, in turn providing access to various x/4 multisigs, for up to 4 users.

Lastly, there's a tools section with additional features, including dogecoin address and multisig address creation, QR code creation, and the PaySpot, which is a sharable URL used for receiving dogecoin payments (e.g.: https://www.dogecoinmultisig.org/multisigmain/index.html?payspot=9vnaTWu71XWimFCW3hctSxryQgYg7rRZ7y#payspot).


*******************************************************************************************************************

NOTE for sandy or intensely crowdfunded accounts: If it's a large transaction (over 3K or so), you might get a 'Too Big for Browser'-type error. In that case, you'll need to copy/paste the transaction, from verify to verify, from signer to signer, and then lastly copy/paste once more to broadcast. 

Also NOTE, for sandy or intensely crowdfunded accounts: there is a maximum of 99 transactions set for chain.so, and 60 for blockcypher.com. This means that if there are more than 99 transactions to process at one time, you'll need to have more than one transaction block made. You can actually run two transaction blocks at a time: Since chain.so uses FIFA, and blockcypher.com is set up for LIFA, if there's more than 160 total transactions in the address, dogecoinmultisig instances running on chain.so and blockcypher.com can be used concurrently for the same dogecoin address (this ability has been used twice in the 25+ month history of #DogecoinSocksForTheHomeless, which uses the original TripleShibe to this day).

**********************************************************************************************************

Check out the reddit community at https://www.reddit.com/r/dogecoin/



