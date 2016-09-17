
Hello, Shibes

This site is a wrapper for Dogecoin Multisigs. You can use this site to:

Create Dogecoin Addresses

Create Dogecoin Multisignature Addresses

Spend From Dogecoin Multisig Addresses

and much more.

New is the so-called "DOGECOIN BANKINGS SUITE". It regards the following relationship regarding multisigs: that if you take any two public keys, and you squeeze them hard enough, you end up with the following things:

1/1 multisig (Public Key 1 by itself)

1/1 multisig (Public Key 2 by itself)

1/2 multisig (PK1, PK2)

1/2 multisig (PK2, PK1) 

2/2 multisig (PK1, PK2)

2/2 multisig (PK2, PK1)


And this is consistent because multisigs aren't random; they are generated based on public keys.

Restated:  “put two public keys together as one, then derive the six multikeys that the combination of the two public keys provide, and then provide as a package to the end user and also as a development tool for shibes/devsquads to start making some really kick ass stuff.”



Here's some things you can currently do with the Dogecoin Bankings Suite page:

USAGE EXAMPLE #1 -- Single user controls the Private Suite Key 

Personal Bank Account with six sub-accounts (including Checking, Savings, etc)

Bank account trainer for kid.



USAGE EXAMPLE #2 -- Two person use. There is no Private Suite Key, only two private keys (each party provided a PubKey and kept/keeps their own PrivKeys)
Six Addresses:

Personal 1: A (determined by alphabetical PubKey order)

Personal 2: B (determined by alphabetical PubKey order)

Slush Fund: A or B (either can spend from)

Checking: A or B  (either can spend from)

Savings: A and B (both need to sign)

Do Good Fund: A and B (both need to sign)


Regarding the “Personal” addresses, if you had one of these accounts on facebook, everyone connected to you could see your very public “Personal”  address. Might have to be renamed. Can be developed further.

You can do a lot of cool things with a tool like this. Take a copy of this and tweak index.html, moist.js, and banksuite.js.


















