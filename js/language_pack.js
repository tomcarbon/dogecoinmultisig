$(document).ready(function() {

const languages = {
    dutch: {
        "lang": {
            "menuitem": [
{"value":0, "text":"Nederlands"},
{"value":1, "text":"U beheert de Sleutels"},
{"value":2, "text":"Dogecoin Bankiers-Suite"},
{"value":3, "text":"U houdt één stuk informatie veilig. In ruil daarvoor bent u eigenaar van de zes dogecoin adressen welk mathematisch gekoppeld zijn."},
{"value":4, "text":"Klik hier voor instructies!"},
{"value":5, "text":"Stap 1: Klik op de blauwe knop (Make New Suite Keys) om een nieuwe account aan te maken."},
{"value":6, "text":"Stap 2: Save de Private Suite Key (in het blauwe vak) naar een veilige locatie."},
{"value":7, "text":"Stap 3: Bookmark of Save de 'shareable URL'."},
{"value":8, "text":"Hier volgt een korte demonstratie video!"},
{"value":9, "text":"Uw DBS (Dogecoin Bankiers-Suite) account is nu klaar voor gebruik."},
{"value":10,"text":"U mag de Public Suite Key delen, of houd het voor jezelf."},
{"value":11,"text":"Deze statische dogecoin multisignatures kunnen worden berekend op basis van de Private Suite Key."},
{"value":12,"text":"VERLIES NIET uw Private Suite Key. Noteren en opslaan."},
{"value":13,"text":"(Als u met uw Private Key onvoorzichtig omgaat is het gevoelig voor diefstal)"},
{"value":14,"text":"Deze rekeningen zijn voor eenmalig gebruik. U kunt er zoveel maken als je wilt."},
{"value":15,"text":"U kunt een Suite Key doormidden breken, en vervolgens delen met een andere persoon, etc. geekspeak, het zijn gewoon 2 Pub / PrivKeys samen te stellen!"},
{"value":16,"text":"U kunt deze pagina offline uit te voeren."},
{"value":17,"text":"Dit programma zal een identieke multisig waardes creëren ten opzichte van de kern."},
{"value":18,"text":"Maak Nieuwe Suite Keys"},
{"value":19,"text":"of voer de Public Key Suite hieronder (of 2 publieke sleutels) en klik "},
{"value":20,"text":"hier"},
{"value":21,"text":"Voeg een Suite Key of Public Key hier toe"},
{"value":22,"text":"(optioneel:)Voeg nog een Public Key hier toe"},
{"value":23,"text":"Hier is uw deelbaar URL voor deze pagina (het bevat uw Public Key Suite):"},
{"value":24,"text":"Privé 1 (1/1 multisig):"},
{"value":25,"text":"Privé 2 (1/1 multisig):"},
{"value":26,"text":"multisig"},
{"value":27,"text":"Adres:"},
{"value":28,"text":"Besteden"},
{"value":29,"text":"Pay Spot"},
{"value":30,"text":"Verifiëren"},
{"value":31,"text":"Omkooppot (1/2 multisig):"},
{"value":32,"text":"Lopende rekening (1/2 multisig):"},
{"value":33,"text":"Spaarrekening (2/2 multisig):"},
{"value":34,"text":"Goede Doelen Fonds (2/2 multisig):"},
{"value":35,"text":"Hier is uw nieuwe Private Suite Key (SLA DIT DIRECT OP!):"},
{"value":36,"text":"Opsplitsen in twee Private Keys"},
{"value":37,"text":"Hier is uw deelbaar URL voor deze pagina (het bevat uw Public Key Suite):"},
{"value":38,"text":"Bevestigde Balans:"},
{"value":39,"text":"Naar Adres:"},
{"value":40,"text":"Bedrag:"},
{"value":41,"text":"Volgende"},
{"value":42,"text":"(De mining kosten zullen worden toegevoegd bovenop dit bedrag, tenzij totaalbedrag, dan wordt het er afgetrokken!)"},
{"value":43,"text":"Onttrekken van uw Multisig (of uw reguliere Dogecoin Adres)"},
{"value":44,"text":"Reset alles en opnieuw beginnen"},
{"value":45,"text":"Adres om vanaf te betalen:"},
{"value":46,"text":"Onbevestigde Balans:"},
{"value":47,"text":"Adres om betaling te ontvangen:"},
{"value":48,"text":"Uw Private Suite Key of enkele Private Signature (of controleer de doos, zodat u offline kunt aanmelden):"},
{"value":49,"text":"Weergeven"},
{"value":50,"text":"Niet ondertekenen van de transactie (voor offline gebruik)"},
{"value":51,"text":"Wanneer alles is ingevuld, drukt u op deze knop:"},
{"value":52,"text":"Succesvolle Ondertekening"},
{"value":53,"text":"De dogecoin transactie hieronder is één keer getekend."},
{"value":54,"text":"UITZENDEN (online)"},
{"value":55,"text":"MAAK VERIFICATIE URL"},
{"value":56,"text":"De transactie is met succes verzonden naar het dogecoin netwerk!"},
{"value":57,"text":"Het dogecoin transactie-ID (Txid) is uw ontvangstbewijs."},
{"value":58,"text":"U kunt de details voor deze transactie op een plek zoals chain.so bekijken"},
{"value":59,"text":"Wacht een paar minuten voor de bevestiging."},
{"value":60,"text":"De uitzending is mislukt"},
{"value":61,"text":"Sorry. Iets klopt er niet."},
{"value":62,"text":"Hier zijn een paar ideeën om het op te lossen:"},
{"value":63,"text":"Hebt u zich aangemeldt met het juiste wachtwoord van dit account?"},
{"value":64,"text":"Ontbreken er velden in uw formulier? Zijn de velden zoals verwacht?"},
{"value":65,"text":"(Dat wil zeggen: het bedrag niet ingevoerd waar de Naar Adr: zou moeten zijn, etc)"},
{"value":66,"text":"Is er voldoende geld op de rekening om de transactie goed te keuren?"},
{"value":67,"text":"Probeer het opnieuw."},
{"value":68,"text":"Pay Spot dogecoin wordt hier geaccepteerd."},
{"value":69,"text":"Deelbaar URL voor deze pagina"},
{"value":70,"text":"Laad gerelateerde Reddit berichten indien van toepassing"},
{"value":71,"text":"Stort geld hier met behulp van uw Reddit Dogetipbot Account"},
{"value":72,"text":"Je zal nog een handtekening nodig. Geef deze transactie ID aan de volgende persoon, om te ondertekenen."},
{"value":73,"text":"MAAK ONDERTEKENING URL (of opnieuw tekenen)"}
            ]
        }
    },
    english: {
        "lang": {
            "menuitem": [
{"value":0, "text":"English"},
{"value":1, "text":"You Hold The Keys"},
{"value":2, "text":"Dogecoin Bankings Suite"},
{"value":3, "text":"You keep one piece of information safe. In return you own the six dogecoin addresses mathematically associated with it."},
{"value":4, "text":"Help"},
{"value":5, "text":"Step 1: Click the BLUE Button (New) to make a new account."},
{"value":6, "text":"Step 2: Save the Private Suite Key (in the BLUE Box) to a safe, secure location."},
{"value":7, "text":"Step 3: Bookmark or Save the 'shareable URL'."},
{"value":8, "text":"Here's a quick demonstration Video!"},
{"value":9, "text":"Your DBS (Dogecoin Bankings Suite) Account is now ready for use."},
{"value":10,"text":"You may share the Pubilc Suite Key, or keep it to yourself."},
{"value":11,"text":"These static dogecoin multisignatures can be computed from the Private Suite Key."},
{"value":12,"text":"Do NOT lose your Private Suite Key. Record it and save it."},
{"value":13,"text":"(if you bandy your Private Key about it is susceptible to theft)"},
{"value":14,"text":"These accounts are disposable. You may make as many of them as you like."},
{"value":15,"text":"You can break a Suite Key in half, and then share it with another person, etc. Geekspeak, they are just 2Pub/PrivKeys put together!"},
{"value":16,"text":"You can run this page offline."},
{"value":17,"text":"This program will create identical multisig values as compared to the core."},
{"value":18,"text":"New"},
{"value":19,"text":" or enter the Public Suite Key below or 2 public keys and click "},
{"value":20,"text":"here"},
{"value":21,"text":"Insert Suite Key or Public Key here"},
{"value":22,"text":"(optional) Insert another Public Key here"},
{"value":23,"text":"Here is your URL for this page (SAVE THIS. You can share it, too):"},
{"value":24,"text":"Personal 1 (1/1 multisig):"},
{"value":25,"text":"Personal 2 (1/1 multisig):"},
{"value":26,"text":" "},
{"value":27,"text":"Address"},
{"value":28,"text":"Spend"},
{"value":29,"text":"Pay Spot"},
{"value":30,"text":"Verify"},
{"value":31,"text":"Slush Fund (1/2 multisig)"},
{"value":32,"text":"Checking Account (1/2 multisig)"},
{"value":33,"text":"Savings Account (2/2 multisig)"},
{"value":34,"text":"Do Good Fund (2/2 multisig)"},
{"value":35,"text":"Here is your new Private Suite Key (SAVE THIS IMMEDIATELY!):"},
{"value":36,"text":"Split into Two Private Keys"},
{"value":37,"text":"Here is your shareable URL for this page (it contains your Public Suite Key):"},
{"value":38,"text":"Confirmed Balance: "},
{"value":39,"text":"To Address:"},
{"value":40,"text":"Amount:"},
{"value":41,"text":"next"},
{"value":42,"text":"the mining fee will be added on top of this amount, unless full amount, then it's subtracted!)"},
{"value":43,"text":"WITHDRAW from your Multisig (or your regular Dogecoin Address)"},
{"value":44,"text":"Reset Everything and Start Over"},
{"value":45,"text":"Address to pay from:"},
{"value":46,"text":"Unconfirmed Balance:"},
{"value":47,"text":"Destination Address to pay to:"},
{"value":48,"text":"Your Private Suite Key or One Private Signature (or check the box so you can sign offline):"},
{"value":49,"text":"Show"},
{"value":50,"text":"Do not sign the transaction (for offline use)"},
{"value":51,"text":"When all those are filled out, press this button:"},
{"value":52,"text":"Successful Sign"},
{"value":53,"text":"The dogecoin transaction below has been signed one time."},
{"value":54,"text":"BROADCAST (online) "},
{"value":55,"text":"MAKE URL VERIFICATION"},
{"value":56,"text":"This transaction has been successfully sent to the Dogecoin network!"},
{"value":57,"text":"The dogecoin transaction ID (txid) is your receipt."},
{"value":58,"text":"You can view the details of this transaction in a website such as chain.so."},
{"value":59,"text":"Please wait a few minutes for the confirmation."},
{"value":60,"text":"The Broadcast has failed"},
{"value":61,"text":"Sorry. Something is not right."},
{"value":62,"text":"Here's some ideas for what's causing this:"},
{"value":63,"text":"Did you sign with the correct password matching this account?"},
{"value":64,"text":"Are any fields missing from your form? Are the fields as expected?"},
{"value":65,"text":"(ie: Didn't put the amount where the To Addr: should be, etc)"},
{"value":66,"text":"Is there enough money in the account to clear the transaction?"},
{"value":67,"text":"Please try again."},
{"value":68,"text":"Pay Spot. Dogecoin is accepted here."},
{"value":69,"text":"Shareable URL for this page"},
{"value":70,"text":"Load related Reddit Postings if any"},
{"value":71,"text":"Deposit funds here using your Reddit Dogetipbot Account"},
{"value":72,"text":"You will need another signature. Give this Transaction ID to the next person to sign it."},
{"value":73,"text":"MAKE A SIGNING URL (or sign again)"}
            ]
        }
    },
    spanish: {
        "lang": {
            "menuitem": [
{"value":0, "text":"Español"},
{"value":1, "text":"Tu tienes las llaves"},
{"value":2, "text":"Suite Bancaria Dogecoin"},
{"value":3, "text":"Usted guarda una pieza de información en forma segura. A cambio, usted es dueño de seis direcciones Dogecoin que están vinculadas matemáticamente."},
{"value":4, "text":"Haga clic aquí para obtener instrucciones!"},
{"value":5, "text":"Paso 1: Haga clic en el botón azul (Crear un nuevo conjunto o Suite de Llaves) para crear una cuenta nueva."},
{"value":6, "text":"Paso 2: guardar la Llave Suite Privada (en la caja azul) a un lugar seguro."},
{"value":7, "text":"Paso 3: Guarde o agregue a favoritos la 'URL para compartir'."},
{"value":8, "text":"Aquí puede ver un breve video de demostración!"},
{"value":9, "text":"Su cuenta DBS (Suite Bancaria Dogecoin) ya está lista para su uso."},
{"value":10,"text":"Puedes compartir la Llave Suite Pública, o quedártela para tí solo."},
{"value":11,"text":"Estas estáticas cuentas multifirma Dogecoin pueden ser computadas partiendo desde la Llave Suite Privada."},
{"value":12,"text":"NO EXTRAVÍE su Llave Suite Privada. Anótela y guárdela en un lugar seguro."},
{"value":13,"text":"(Si compartes o descuidas tu Llave Suite Privada, quedas propenso a robos)"},
{"value":14,"text":"Estas cuentas son descartables. Puedes crear tantas como quieras."},
{"value":15,"text":"Puedes dividir una Suite de Llaves en dos, y luego compartir una parte con otra persona. O sea, ¡son dos llaves públicas y privadas funcionales puestas juntas!"},
{"value":16,"text":"Puedes utilizar esta página estando desconectado de internet."},
{"value":17,"text":"Este programa creará valores multifirma idénticos con respecto al núcleo."},
{"value":18,"text":"Crear un nuevo conjunto o Suite de Llaves"},
{"value":19,"text":"o ingrese la Llave Suite Pública a continuación (o dos llaves públicas), y luego haga clic"},
{"value":20,"text":"aquí"},
{"value":21,"text":"Añadir serie clave o claves públicas aquí"},
{"value":22,"text":"(Opcional :) Agregar otra clave pública aquí"},
{"value":23,"text":"Aquí es compartible su URL de esta página (que contiene su clave pública Suite):"},
{"value":24,"text":"Privada 1 (1/1 multisig)"},
{"value":25,"text":"Privada 2 (1/1 multisig)"},
{"value":26,"text":" "},
{"value":27,"text":"Dirección:"},
{"value":28,"text":"Gastar"},
{"value":29,"text":"Punto de pago"},
{"value":30,"text":"Verificar"},
{"value":31,"text":"Fondo de reserva (1/2 multisig)"},
{"value":32,"text":"Cuenta Corriente (1/2 multisig)"},
{"value":33,"text":"Cuenta de Ahorros (2/2 multisig)"},
{"value":34,"text":"Fondo de Caridad (2/2 multisig)"},
{"value":35,"text":"Aquí tienes tu nueva Llave Suite Privada (¡GUARDA ESTO INMEDIATAMENTE!):"},
{"value":36,"text":"Dividir en dos llaves privadas"},
{"value":37,"text":"Esta es la 'URL para compartir' de esta página (contiene tu Llave Suite Pública):"},
{"value":38,"text":"Saldo Confirmado:"},
{"value":39,"text":"Dirección:"},
{"value":40,"text":"Monto:"},
{"value":41,"text":"Siguiente"},
{"value":42,"text":"(se añaden los costos de extracción en la parte superior de esa cantidad, a menos que la cantidad total, se restará!)"},
{"value":43,"text":"La extracción de Multisig su (o su dirección dogecoin regular)"},
{"value":44,"text":"Restablecer todo y empezar de nuevo"},
{"value":45,"text":"Dirección a pagar a partir de:"},
{"value":46,"text":"Equilibrio no reclamada:"},
{"value":47,"text":"Dirección para recibir el pago:"},
{"value":48,"text":"Su suite de clave privada de una firma privada (o marcar la casilla, por lo que puede conectarse en línea):"},
{"value":49,"text":"Pantalla"},
{"value":50,"text":"No firme la transacción (para uso sin conexión)"},
{"value":51,"text":"Cuando todo se haya completado, pulse este botón:"},
{"value":52,"text":"exitosa firma"},
{"value":53,"text":"transacción dogecoin se firma una vez más abajo."},
{"value":54,"text":"RADIODIFUSIÓN (en línea)"},
{"value":55,"text":"URL de verificación HAGA"},
{"value":56,"text":"La transacción ha sido enviado correctamente a la red dogecoin!"},
{"value":57,"text":"dogecoin ID de transacción (TxID) es su recibo."},
{"value":58,"text":"Usted puede ver los detalles de esta transacción en un lugar como chain.so"},
{"value":59,"text":"Espere unos minutos para la confirmación."},
{"value":60,"text":"La transmisión falla"},
{"value":61,"text":"Lo sentimos. Algo no está bien."},
{"value":62,"text":"Estas son algunas ideas para resolverlo:"},
{"value":63,"text":"¿Ha sido reportado con la contraseña correcta para esta cuenta?"},
{"value":64,"text":"Ausencia hay campos del formulario? Los campos son como se esperaba?"},
{"value":65,"text":"(Eso no entró, la cantidad a la que el ADR: debe ser, etc)"},
{"value":66,"text":"¿Hay suficiente dinero en la cuenta para aprobar la transacción?"},
{"value":67,"text":"Por favor, inténtelo de nuevo."},
{"value":68,"text":"Pago del punto dogecoin se acepta aquí."},
{"value":69,"text":"URL divisible para esta página"},
{"value":70,"text":"Carga relacionados mensajes Reddit, en su caso"},
{"value":71,"text":"Depósito de dinero aquí usando su cuenta Reddit Dogetipbot"},
{"value":72,"text":"De todos modos tendrá una firma. Dar a este ID de transacción a la siguiente persona para que firme."},
{"value":73,"text":"HAGA URL de firma (o rediseño)"}
            ]
        }
    },
    japanese: {
        "lang": {
            "menuitem": [
{"value":0, "text":"日本語"},
{"value":1, "text":"これらはあなたの鍵です。"},
{"value":2, "text":"Dogecoinバンク"},
{"value":3, "text":"You keep one piece of information safe. In return you own the six dogecoin addresses mathematically associated with it."},
{"value":4, "text":"Help"},
{"value":5, "text":"Step 1: 新しいアカウントを作るために、青ボタン（NEW)をクリック"},
{"value":6, "text":"Step 2: 安全のため'Private Suite key' を保存"},
{"value":7, "text":"Step 3: 'shareable URL' をブックマークか保存する"},
{"value":8, "text":"Video"},
{"value":9, "text":"あなたのDBS (Dogecoin Bankings Suite)のアカウントは利用可能"},
{"value":10,"text":"Public  Suite Keyはシェアもでき、あなたのPublic Suite Keyとしておくこともできます。."},
{"value":11,"text":"これらのstatic dogecoin maltisignateはPrivate Suite Keyから計算することができる。."},
{"value":12,"text":"Private Suite Key をなくさないでください。記録して、保存してください！"},
{"value":13,"text":"盗難されないように、あなたのキーを安全なところに保管してください！"},
{"value":14,"text":"これらのアカウントは使い捨てなので、あなたが作りたいだけアカウントはつくることができます。"},
{"value":15,"text":"Suite Keyは半分に分割でき、それを他の人とシェアすることもできます。 Geekspeak, they are just 2Pub/PrivKeys put together!"},
{"value":16,"text":"このページはオフラインの時でも作業できます。"},
{"value":17,"text":"このプログラムはthe coreを比較するための同一のマルチシグ・バリューを作る。"},
{"value":18,"text":"新規"},
{"value":19,"text":" 又は下のPublic Suite Keyか２個のPublic Keyを入れ、クリック"},
{"value":20,"text":"ここ"},
{"value":21,"text":"SuiteKeyまたはPublic Keyを挿入"},
{"value":22,"text":"（オプショナル）ほかのPublic Keyをここに挿入"},
{"value":23,"text":"このページのためのあなたのURL（これを保存。シェアもできます。）"},
{"value":24,"text":"パーソナル１（1/1 multisig):"},
{"value":25,"text":"パーソナル２（1/1 multisig): "},
{"value":26,"text":" "},
{"value":27,"text":"アドレス"},
{"value":28,"text":"使う"},
{"value":29,"text":"部を使う・支払う"},
{"value":30,"text":"確認"},
{"value":31,"text":"Slush Fund (1/2 multisig)"},
{"value":32,"text":"当座貯金口座i (1/2 multisig)"},
{"value":33,"text":"定期貯金口座(2/2 multisig)"},
{"value":34,"text":"Do Good Fund (2/2 multisig)"},
{"value":35,"text":"あなたの新しい 'Private Suite key'（即、保存！）"},
{"value":36,"text":"プライベートキーを二つに分割"},
{"value":37,"text":"Here is your shareable URL for this page (it contains your Public Suite Key):"},
{"value":38,"text":"Confirmed Balance: 残高照会:　"},
{"value":39,"text":"To Address:"},
{"value":40,"text":"Amount:　額:"},
{"value":41,"text":"next　次"},
{"value":42,"text":"もし、全額支払うのなら、マイニング代金はトータル金額から差し引かれます。マイニング代金は支払った金額に加えられます。"},
{"value":43,"text":"マルチシグ (又はあなたの通常のDogecoinアドレス ）から引き出す"},
{"value":44,"text":"全てリセット＆やり直し"},
{"value":45,"text":"どのアドレスから支払うか"},
{"value":46,"text":"確認待ちの残高"},
{"value":47,"text":"Destination Address to pay to:"},
{"value":48,"text":"あなたのPrivate Suite key か1つのPrivate Signature（またはオフラインでサインできるようにボックスにチェックする。"},
{"value":49,"text":"Show"},
{"value":50,"text":"取引にサインしないでください。（オフライン使用のため）"},
{"value":51,"text":"全て入力が終わりましたら、このボタンを押してください。"},
{"value":52,"text":"サインに成功"},
{"value":53,"text":"下記のDogecoin取引はサインされました。"},
{"value":54,"text":"BROADCAST (online) "},
{"value":55,"text":"MAKE URL VERIFICATION　URL確認をする"},
{"value":56,"text":"この取引は成功しDogecoin Networkに送られました！"},
{"value":57,"text":"Dogecoin取引ID(txid)はレシートです。"},
{"value":58,"text":"この取引の詳細はウェブサイトの中でチェーンのように見ることができます。"},
{"value":59,"text":"確認のためしばらくお待ちください"},
{"value":60,"text":"ブロードキャストは失敗しました。"},
{"value":61,"text":"なにか間違いがあります。"},
{"value":62,"text":"このことが起こったことを解決するためにいくつかIアイディアがあります。"},
{"value":63,"text":"このアカウントにあった正しいパスワードをサインしましたか？"},
{"value":64,"text":"フォームの中に未記入の部分はありませんでしたか？"},
{"value":65,"text":"　例:　金額を　To Addr:の箇所に入力しましたか？"},
{"value":66,"text":"取引が成立するためにアカウントの中に十分なお金はありましたか？"},
{"value":67,"text":"もう一度やり直してください。"},
{"value":68,"text":"スポットを支払う。Dogecoinはここで承認されます。"},
{"value":69,"text":"このページをシェアできるURL"},
{"value":70,"text":"関連のあるReddit Postingを読み込む"},
{"value":71,"text":"Deposit funds here using your Reddit Dogetipbot Account"},
{"value":72,"text":"もう1つサインが必要です。次の人がサインするためにこの取引IDを渡してください。"},
{"value":73,"text":"MAKE A SIGNING URL (or sign again)"}
            ]
        }
    },
    french: {
        "lang": {
            "menuitem": [
{"value":0,"text":"Francais"},
{"value":1,"text":"Vous maintenez les touches"},
{"value":2,"text":"Dogecoin Bankings Suite"},
{"value":3,"text":"Vous gardez une information sûre. En retour, vous possédez les six adresses dogecoin mathématiquement associées à elle."},
{"value":4,"text":"Cliquez ici pour obtenir des instructions!"},
{"value":5,"text":"Étape 1: Cliquez sur le bouton BLEU (Créer de nouvelles clés de suite) pour créer un nouveau compte."},
{"value":6,"text":"Étape 2: Enregistrez la clé Private Suite (dans la BLUE Box) dans un endroit sûr et sécurisé."},
{"value":7,"text":"Étape 3: Marquez ou enregistrez l'URL partageable."},
{"value":8,"text":"Voici une vidéo de démonstration rapide!"},
{"value":9,"text":"Votre compte DBS (Dogecoin Bankings Suite) est maintenant prêt à être utilisé."},
{"value":10,"text":"Vous pouvez partager la clé de la suite Pubilc ou la conserver pour vous."},
{"value":11,"text":"Ces multisignatures static dogecoin peuvent être calculées à partir de la Private Suite Key."},
{"value":12,"text":"Ne perdez PAS votre clé de suite privée, enregistrez-la et enregistrez-la."},
{"value":13,"text":"(si vous vendez votre clé privée à ce sujet est susceptible de vol)"},
{"value":14,"text":"Ces comptes sont jetables. Vous pouvez en faire autant que vous le souhaitez."},
{"value":15,"text":"Vous pouvez briser une clé de suite en deux, puis la partager avec une autre personne, etc. Geekspeak, ils sont juste 2Pub / PrivKeys mis ensemble!"},
{"value":16,"text":"Vous pouvez exécuter cette page hors ligne."},
{"value":17,"text":"Ce programme créera des valeurs multisig identiques par rapport à core."},
{"value":18,"text":"Créer de nouvelles clés de suite"},
{"value":19,"text":"ou entrez la clé publique Suite ci-dessous (ou 2 clés publiques) et cliquez sur"},
{"value":20,"text":"ici"},
{"value":21,"text":"Mettez votre clé ici"},
{"value":22,"text":"(facultatif) Insérez une autre clé publique ici"},
{"value":23,"text":"Voici votre URL partageable pour cette page (elle contient votre Clé de Suite Publique):"},
{"value":24,"text":"Personal 1 (1/1 multisig):"},
{"value":25,"text":"Personal 2 (1/1 multisig):"},
{"value":26,"text":"non"},
{"value":27,"text":"Adresse"},
{"value":28,"text":"Spend"},
{"value":29,"text":"Pay Spot"},
{"value":30,"text":"Compte courant"},
{"value":31,"text":"Slush Fund (1/2 multisig)"},
{"value":32,"text":"Compte de contrôle (1/2 multisig)"},
{"value":33,"text":"Compte d'épargne (2/2 multisig)"},
{"value":34,"text":"Le fonds pour faire le bien (2/2 multisig)"},
{"value":35,"text":"Voici votre nouvelle clé de suite privée (SAUVEGER IMMÉDIATEMENT!):"},
{"value":36,"text":"Split en deux clés privées"},
{"value":37,"text":"Voici votre URL partageable pour cette page (elle contient votre Clé de Suite Publique):"},
{"value":38,"text":"Solde du compte:"},
{"value":39,"text":"To Adresse:"},
{"value":40,"text":"Montant:"},
{"value":41,"text":"suivant"},
{"value":42,"text":"les frais d'exploitation seront ajoutés au-dessus de ce montant, à moins que le montant total, puis il est soustrait!"},
{"value":43,"text":"RETRAIT de votre Multisig (ou votre adresse Dogecoin ordinaire)"},
{"value":44,"text":"Réinitialiser tout et recommencer"},
{"value":45,"text":"Adresse à payer à partir de:"},
{"value":46,"text":"Solde du compte non confirmé:"},
{"value":47,"text":"Adresse de destination à payer à:"},
{"value":48,"text":"Votre clé de suite privée ou une signature privée (ou cochez la case pour vous connecter en mode hors connexion):"},
{"value":49,"text":"Afficher"},
{"value":50,"text":"Ne pas signer la transaction (pour l'utilisation hors connexion)"},
{"value":51,"text":"Lorsque toutes ces informations sont remplies, appuyez sur ce bouton:"}, 
{"value":52,"text":"Signer avec succès"},
{"value":53,"text":"La transaction dogecoin ci-dessous a été signée une seule fois."},
{"value":54,"text":"DIFFUSER (en ligne)"},
{"value":55,"text":"Faire une URL Vérifier"},
{"value":56,"text":"Cette transaction a été envoyée avec succès au réseau Dogecoin!"},
{"value":57,"text":"L'identifiant de la transaction de la pièce (txid) est votre reçu."},
{"value":58,"text":"Vous pouvez afficher les détails de cette transaction à un emplacement tel que chain.so."},
{"value":59,"text":"Veuillez patienter quelques minutes pour la confirmation."},
{"value":60,"text":"La diffusion a échoué"},
{"value":61,"text":"Désolé, quelque chose ne va pas."},
{"value":62,"text":"Voici quelques idées pour corriger ceci:"},
{"value":63,"text":"Avez-vous signé avec le mot de passe correct correspondant à ce compte?"},
{"value":64,"text":"Y a-t-il des champs manquants dans votre formulaire?"},
{"value":65,"text":"(ie: N'a pas mis le montant où le To Addr: devrait être, etc)"},
{"value":66,"text":"Y at-il assez d'argent dans le compte pour effacer la transaction?"},
{"value":67,"text":"Veuillez réessayer."},
{"value":68,"text":"Pay Spot. Dogecoin est accepté ici."},
{"value":69,"text":"URL partageable pour cette page"},
{"value":70,"text":"Charger les Reddit Postings afférents, le cas échéant"},
{"value":71,"text":"Déposez des fonds ici en utilisant votre compte Reddit Dogetipbot"},
{"value":72,"text":"Vous aurez besoin d'une autre signature. Donnez cet ID de transaction à la personne suivante, pour signer."},
{"value":73,"text":"Créer une URL pour la signature (ou signer de nouveau)"}
            ]
        }
    },
    italian: {
        "lang": {
            "menuitem": [
{"value":0, "text":"Italiano"},
{"value":1, "text":"Tu possiedi le chiavi"},
{"value":2, "text":"Dogecoin Bankings Suite"},
{"value":3, "text":"Tu mantieni sicuro un piccolo pezzo di informazione. In cambio possiedi i 6 indirizzi Dogecoin matematicamente associati alla tua chiave."},
{"value":4, "text":"Clicca qua per le istruzioni!"},
{"value":5, "text":"Passo 1: Clicca sul bottone BLE (Genera una nuova Suite Keys) per generare un nuovo account."},
{"value":6, "text":"Passo 2: Salva la Private Suite Key (nel box BLU) in un posto sicuro."},
{"value":7, "text":"Passo 3: Aggiungi ai segnalibri o salva l’'URL condivisibile'."},
{"value":8, "text":"Qui trovi un veloce video dimostrativo!"},
{"value":9, "text":"Il tuo nuovo account DBS (Dogecoin Bankings Suite) è adesso pronto all’uso."},
{"value":10,"text":"Puoi condividere la Public Suite Key  o mantenerla privata."},
{"value":11,"text":"Queste dogecoin multisignatures statiche possono essere ottenute partendo dalla Private Suite Key ."},
{"value":12,"text":"NON perdere la tua Private Suite Key. Registrala e salvala."},
{"value":13,"text":"(se non assicuri la tua chiave privata questa è suscettibile di furto)"},
{"value":14,"text":"Questi account sono monouso. Ne puoi creare quanti ne vuoi."},
{"value":15,"text":"Puoi suddividere una Suite Key in due e condividere la seconda parte con un’altra persona, etc. Geekspeak, queste sono una coppia di chiavi pubblica e privata messe assieme!"},
{"value":16,"text":"Questa pagina può essere usata offline."},
{"value":17,"text":"Questo programma creerà valori multisig identici all’applicazione core."},
{"value":18,"text":"Genera una nuova Suite Keys"},
{"value":19,"text":" o inserisci una (o 2 due) public Suite Key sotto e clicca"},
{"value":20,"text":"qui"},
{"value":21,"text":"Inserisci una Suite Key or Public Key qui"},
{"value":22,"text":"(opzionale) Inserisci un’altra Public Key qui"},
{"value":23,"text":"Questo è il tuo URL condivisibile per questa pagina (questo contiene la tua Public Suite Key):"},
{"value":24,"text":"Personale 1 (1/1 multisig):"},
{"value":25,"text":"Personale 2 (1/1 multisig):"},
{"value":26,"text":" "},
{"value":27,"text":"Indirizzo"},
{"value":28,"text":"Spendi"},
{"value":29,"text":"Punto di Pagamento"},
{"value":30,"text":"Verifica"},
{"value":31,"text":"Fondo di riserva (1/2 multisig)"},
{"value":32,"text":"Verifica Account (1/2 multisig)"},
{"value":33,"text":"Salvataggio Account (2/2 multisig)"},
{"value":34,"text":"Fondo di carità (2/2 multisig)"},
{"value":35,"text":"questa è la tua nuova Private Suite Key (SALVALA IMMEDIATAMENTE!):"},
{"value":36,"text":"Dividi in due Private Keys"},
{"value":37,"text":"Questo è il tuo URL condivisibile per questa pagina (questo contiene la tua Public Suite Key):"},
{"value":38,"text":"Saldo Confermato: "},
{"value":39,"text":"All’indirizzo:"},
{"value":40,"text":"Importo:"},
{"value":41,"text":"avanti"},
{"value":42,"text":"la tassa di mining verrà aggiunta e sommata all’importo, a meno che no si spedisca l’intero saldo, in quel caso le tasse verranno sottratte dal saldo!)"},
{"value":43,"text":"PRELEVA dal tuo Multisig (o dal tuo indirizzo Dogecoin)"},
{"value":44,"text":"Resetta tutto e inizia da capo"},
{"value":45,"text":"Indirizzo da cui prelevare:"},
{"value":46,"text":"Saldo non confermato:"},
{"value":47,"text":"Indirizzo a cui pagare:"},
{"value":48,"text":"La tua Private Suite Key o una Private Signature (o spunta il box per firmarla offline):"},
{"value":49,"text":"Mostra"},
{"value":50,"text":"Non firmare la transazione (per uso offline)"},
{"value":51,"text":"Quando hai riempito tutti i campi, premi questo bottone:"},
{"value":52,"text":"Firma avvenuta con successo"},
{"value":53,"text":"La transazione dogecoin è stata firmata una volta."},
{"value":54,"text":"BROADCAST (online)"},
{"value":55,"text":"GENERA UN URL DI VERIFICA"},
{"value":56,"text":"Questa transazione è stato spedita con successo sulla rete Dogecoin!"},
{"value":57,"text":"ID (txid) della transazione dogecoin, è la tua ricevuta."},
{"value":58,"text":"Puoi vedere dettagli della tua transazione in siti come chain.so."},
{"value":59,"text":"Per favore attendi pochi minuti per la conferma della transazione."},
{"value":60,"text":"il Broadcast è fallito"},
{"value":61,"text":"Scusa. Qualcosa è andato storto."},
{"value":62,"text":"Qui qualche idea per cercare di risolvere il problema:"},
{"value":63,"text":"Hai firmato con la password corretta che corrisponde a questo account?"},
{"value":64,"text":"Hai compilato tutti i campi? Sono stati compilati correttamente?"},
{"value":65,"text":"(ie: Non mettere l’importo dove è richiesto l’indirizzo, etc)"},
{"value":66,"text":"Hai abbastanza denato nell’account per completare la transazione?"},
{"value":67,"text":"Per favore ritenta."},
{"value":68,"text":"Punto di pagamento. Dogecoin sono accettati qui."},
{"value":69,"text":"URL condivisibile per questa pagina"},
{"value":70,"text":"Carica i post di Reddit correlati se esistono"},
{"value":71,"text":"Deposita fondi qui usando il tuo reddit Dogetipbot Account"},
{"value":72,"text":"Necessiti di un ulteriore firma. Dai l’ID di questa transazione alla prossima persona, per farlo firmare."},
{"value":73,"text":"GENERA UN URL PER LA FIRMA  (or firma nuovamente)"}
            ]
        }
    },
    russian: {
        "lang": {
            "menuitem": [
{"value":0, "text":"Русский"},
{"value":1, "text":"Ключи в ваших руках"},
{"value":2, "text":"Банковский Набор Догикойнов"},
{"value":3, "text":"Вы храните один фрагмент информации в безопасности. И в замен получаете шесть собственных Догикойн адресов математически связанных с ним."},
{"value":4, "text":"Нажмите здесь для инструкций!"},
{"value":5, "text":"Шаг 1-й: Нажмите на СИНИЮ кнопку (Сделать новый набор ключей) чтобы создать новый счет."},
{"value":6, "text":"Шаг 2-й: Сохраните личный наборный ключ (В СИНЕМ квадрате) в безопасном месте."},
{"value":7, "text":"Шаг 3-й: Создайте закладку или сохраните 'Совместную ссылку'."},
{"value":8, "text":"Вот короткое демонстративное видео!"},
{"value":9, "text":"Ваш БНД (Банковский Набор Догикойнов) Счет готов к использыванию."},
{"value":10,"text":"Вы можете поделится совместным наборным ключом, или держать его при себе."},
{"value":11,"text":"Эти неподвижные Догикойн Много-Сигнатурные Адреса Могут быть вычислены через Личного Наборного ключа."},
{"value":12,"text":"НЕ Потеряйте ваш Личный Наборный ключ. Запишите его."},
{"value":13,"text":"(Если вы подозреваете и хотите предотвратить кражу вашего личного ключа)"},
{"value":14,"text":"Эти счета одноразовые. Вы можете создать их сколько угодно."},
{"value":15,"text":"Вы можете разбить ключ на две части, и передать другому человку. Это просто два фрагмента которые стоит совместить и получится одно целое!"},
{"value":16,"text":"Вы можете запустить эту страницу вне сети."},
{"value":17,"text":"Эта программа создаст похожую много-сигнатурную ценность сравнительную с основной программой."},
{"value":18,"text":"Создать новый набор ключей"},
{"value":19,"text":" или введите внизу совместный наборный ключ (или два) и нажмите"},
{"value":20,"text":"Здесь"},
{"value":21,"text":"Введите наборный или совместный ключ здесь"},
{"value":22,"text":"(Не обезательно) Введите очередной совместный ключ здесь"},
{"value":23,"text":"Здесь ваша совместная ссылка на эту страницу (Она содержит ваш совместный наборный ключ):"},
{"value":24,"text":"Личный 1 (1/1 Много-Сигнатурность):"},
{"value":25,"text":"Личный 2 (1/1 Много-Сигнатурность):"},
{"value":26,"text":" "},
{"value":27,"text":"Адрес"},
{"value":28,"text":"Потратить"},
{"value":29,"text":"Место Оплаты"},
{"value":30,"text":"Подтвердить"},
{"value":31,"text":"Подкупной фонд (1/2 Много-Сигнатурность)"},
{"value":32,"text":"Чековый Счет(1/2 Много-Сигнатурность)"},
{"value":33,"text":"Сберегательный Счет (2/2 Много-Сигнатурность)"},
{"value":34,"text":"Благотворительный фонд (2/2 Много-Сигнатурность)"},
{"value":35,"text":"Здесь ваш новый Личный наборный ключ (ЗАПЕШИТЕ ЕГО СРАЗУ!):"},
{"value":36,"text":"Разбить на два Личных ключа"},
{"value":37,"text":"Здесь ваша совместная ссылка на эту страницу (Она содержит ваш совместный наборный ключ):"},
{"value":38,"text":"Подтвержденный баланс: "},
{"value":39,"text":"На Адрес:"},
{"value":40,"text":"Сумма:"},
{"value":41,"text":"Далее"},
{"value":42,"text":"Взнос за 'Майнинг' будет включен поверх этой транзакции, но если она состоит из всего что есть на счету, то взнос снимается с самой транзакции!)"},
{"value":43,"text":"ИЗВЛЕЧЬ из вашего Много-Сигнатурного Счета (Или вашего обычного Догикойн Адреса)"},
{"value":44,"text":"Сбросить и начать заного"},
{"value":45,"text":"Ваш Адрес для извлечения:"},
{"value":46,"text":"Неподтвержденный баланс:"},
{"value":47,"text":"Адрес Назначения:"},
{"value":48,"text":"Ваш личный Наборный ключ или Одна личная подпись (Или поставьте галочку для подписки вне сети):"},
{"value":49,"text":"Показать"},
{"value":50,"text":"Не подписывать транзакцию (Для использывание вне сети)"},
{"value":51,"text":"Когда все заполнино, нажмите на эту кнопку:"},
{"value":52,"text":"Успешная подпись"},
{"value":53,"text":"Догикойн Транзакция указанная внизу была подписана всего один раз."},
{"value":54,"text":"ПЕРЕДАЧА (В сети)"},
{"value":55,"text":"ПОДТВЕРДИТЬ ССЫЛКУ"},
{"value":56,"text":"Транзакция была успешно передана в сеть Догикойн!"},
{"value":57,"text":"Номер Догикойн транзакции (txid) есть ваша квитанция."},
{"value":58,"text":"Вы можете увидеть детали этой транзакции на сайте как chain.so."},
{"value":59,"text":"Пожалуйста подождите несколько минут для подтверждения."},
{"value":60,"text":"Передача прошла безуспешно"},
{"value":61,"text":"Извините. Что-то пошло не так."},
{"value":62,"text":"Вот несколько предположений что могло помешать:"},
{"value":63,"text":"Ввели-ли вы правильный пароль этого счета во время подписки?"},
{"value":64,"text":"Нехватает ли чего небуть в бланке? Ввели-ли вы все правильно?"},
{"value":65,"text":"(Например: Не ввели сумму догикойнов для перевода или адрес для отправки, и т.д)"},
{"value":66,"text":"Достаточно-ли денег на счету для совершения этой транзакции?"},
{"value":67,"text":"Пожалуйста попробуйте еще раз."},
{"value":68,"text":"Место Оплаты. Здесь принимаются Догикойны."},
{"value":69,"text":"Совместная Ссылка на эту страницу"},
{"value":70,"text":"Загрузить связанные посты на 'Редит' Если есть"},
{"value":71,"text":"Внести фонд изпользуя ваш Редит 'DogeTipBot' счет"},
{"value":72,"text":"Вам нужна очередная подпись. Передайте номер этой транзакции следуйщему человеку для подписи."},
{"value":73,"text":"СОЗДАТЬ ССЫЛКУ ДЛЯ ПОДПИСИ (или подписать еще раз)"}
            ]
        }
    },
    german: {
        "lang": {
            "menuitem": [
{"value":0, "text":"Deutsch"},
{"value":1, "text":"Du hältst die Schlüssel in Deiner Hand!"},
{"value":2, "text":"Dogecoin Banking Suite"},
{"value":3, "text":"Du kannst mit nur einem Schlüssel bis zu sechs Dogecoin Adressen kontrollieren. Bewahre ihn gut auf!."},
{"value":4, "text":"Klick hier für die Anleitung!"},
{"value":5, "text":"Schritt 1: Klick auf den BLAUEN Button (Erstelle neue Schlüssel) um ein neues Konto zu erstellen,"},
{"value":6, "text":"Schritt 2: Speichere den privaten Schlüssel (in der BLAUEN Box) an einem sicheren Ort."},
{"value":7, "text":"Schritt 3: Erstelle ein Lesezeichen oder speichere 'gemeinsam benutzbare URL'."},
{"value":8, "text":"Hier ein kurzes Einführungsvideo!"},
{"value":9, "text":"Dein Dogecoin Bankings Suite Konto ist zur Nutzung bereit."},
{"value":10,"text":"Du kannst den öffentlichen Schlüssel mit anderen teilen."},
{"value":11,"text":"Diese statischen Dogecoin Signaturen könne durch den privaten Schlüssel errechnet werden."},
{"value":12,"text":"Verlieren NIEMALS den privaten Schlüssel. Speichere ihn ab und verwahre ihn an einem sicheren Ort."},
{"value":13,"text":"Wenn Du Dein privaten Schlüssel jemandem zeigst kann Dein Konto geplündert werden!"},
{"value":14,"text":"Diese Konten können auch nur Einmalig benutzt werden. Du kannst soviel erstellen Konten wie Du magst."},
{"value":15,"text":"Du kannst den Schlüssel in zwei Teile zerlegen, und den einen Schlüsselteil einer Person Deines Vertrauens anvertrauen!"},
{"value":16,"text":"Du kannst diese Seite offline benutzen."},
{"value":17,"text":"Dieses Programm arbeitet genauso wie der Dogecoin Core Client und generiert Schlüssel nach dem selben Muster."},
{"value":18,"text":"Erstelle neue Schlüssel"},
{"value":19,"text":" oder gib den öffentlichen Schlüssel unten ein (oder 2 öffentliche Schlüssel) und Klick"},
{"value":20,"text":"hier"},
{"value":21,"text":"Gib den Suite Schlüssel oder den öffentlichen Schlüssel hier ein"},
{"value":22,"text":"(optional) gib einen anderen öffentlichen Schlüssel hier ein"},
{"value":23,"text":"Hier ist Deine gemeinsam benutzbare URL für diese Seite (sie enthält die öffentlichen Schlüssel der Banking Suite):"},
{"value":24,"text":"Persönliches Konto 1 (1/1 multisig):"},
{"value":25,"text":"Persönliches Konto 2 (1/1 multisig):"},
{"value":26,"text":" "},
{"value":27,"text":"Adresse"},
{"value":28,"text":"Ausgeben"},
{"value":29,"text":"Bezahlen"},
{"value":30,"text":"Verifizieren"},
{"value":31,"text":"Schmiergeld Konto (1/2 multisig)"},
{"value":32,"text":"Girokonto (1/2 multisig)"},
{"value":33,"text":"Sparkonto (2/2 multisig)"},
{"value":34,"text":"Spendenkonto (2/2 multisig)"},
{"value":35,"text":"Hier ist Dein neue privater Schlüssel (SPEICHERE IHN SOFORT AB!):"},
{"value":36,"text":"Zerlege in zwei private Schlüssel"},
{"value":37,"text":"Hier ist Deine gemeinsam benutzbare URL für diese Seite (sie enthält Deine öffentlichen Schlüssel):"},
{"value":38,"text":"Bestätigtes Guthaben: "},
{"value":39,"text":"An Adresse:"},
{"value":40,"text":"Betrag:"},
{"value":41,"text":"Weiter"},
{"value":42,"text":"Die Netzwerkgebühr wird auf den Betrag aufgeschlagen, es sei denn du willst alles abheben, dann wird die Gebühr abgezogen!)"},
{"value":43,"text":"ABHEBEN von Deinem Dogecoin Konto (Multisig) oder von der regulären Dogecoin Adresse)"},
{"value":44,"text":"Setze alles zurück und starte von vorn"},
{"value":45,"text":"Von dieser Adresse bezahlen:"},
{"value":46,"text":"Unbestätigtes Guthaben:"},
{"value":47,"text":"Empfängeradresse:"},
{"value":48,"text":"Dein privater Schlüssel oder Deine private Signatur (klick die Box an um die Transaktion offline zu signieren):"},
{"value":49,"text":"Anzeigen"},
{"value":50,"text":"Signiere die Transaktion nicht (zum offline Gebrauch)"},
{"value":51,"text":"Wenn Du alles ausgefüllt hast, betätige diesen Knopf:"},
{"value":52,"text":"Erfolgreich signiert"},
{"value":53,"text":"Die folgende Dogecoin Transaktion wurde rechtzeitig signiert."},
{"value":54,"text":"SENDE (online) "},
{"value":55,"text":"ERSTELLE  VERIFIZIERUNGS URL"},
{"value":56,"text":"Diese Transaktion wurde erfolgreich in das Dogecoin Netzwerk gesendet!"},
{"value":57,"text":"Die Dogecoin Transaktions ID (TXID) ist Dein Beleg."},
{"value":58,"text":"Du kannst die Details der Transaktion bei chain.so oder anderen Dogecoin Blockexplorern einsehen."},
{"value":59,"text":"Bitte warte einige Minuten auf die Bestätigung."},
{"value":60,"text":"Die Transaktion war nicht erfolgreich"},
{"value":61,"text":"Sorry. Irgendwas stimmt nicht."},
{"value":62,"text":"Hier einige Anregungen um den Fehler zu beheben:"},
{"value":63,"text":"Hast Du mit dem richtigen Passwort für dieses Konto signiert?"},
{"value":64,"text":"Hast Du vielleicht vergessen einige Felder in dem Formular auszufüllen? Sind die Felder korrekt ausgefüllt?"},
{"value":65,"text":"(z.B.: Ist der Betrag in dem Feld für die Adresse eingetragen oder Ähnliches)"},
{"value":66,"text":"Ist das Guthaben auf dem Konto hoch genug um die Transaktion durchzuführen?"},
{"value":67,"text":"Versuche es bitte nochmal."},
{"value":68,"text":"Bezahlen. Dogecoin wird hier akzeptiert."},
{"value":69,"text":"Gemeinsam benutzbare URL für diese Seite"},
{"value":70,"text":"Lade relevante Reddit Beiträge"},
{"value":71,"text":"Deponiere einen Betrag mit Deinem Reddit Dogetipbot Konto"},
{"value":72,"text":"Du brauchst noch eine weitere Signatur. Gib diese Transaktions ID zum signieren einer weiteren der Person Deines Vertrauens."},
{"value":73,"text":"ERSTELLE EINE SIGNIERUNGS URL(oder signiere nochmal)"}
            ]
        }
    },
    hungarian: {
        "lang": {
            "menuitem": [
 {"value":0, "text":"Magyar"},
 {"value":1, "text":"Te birtoklod a kulcsokat"},
 {"value":2, "text":"Dogecoin Bank Csomag"},
 {"value":3, "text":"Az információ kis részét biztonságba helyezed. Ezért a hat Dogecoin címet matematikailag hozzárendelve megkapod."},
 {"value":4, "text":"Kattints ide a tudnivalókért!"},
 {"value":5, "text":"1. lépés: Kattints a kék gombra (Új csomag kulcsok létrehozása) hogy új fiókot csinálj.."},
 {"value":6, "text":"2. lépés: Mentsd el a privát csomag kulcsot (a kék mezőben) egy biztonságos, titkos helyre."},
 {"value":7, "text":"3. lépés: Könyvjelzőzd, vagy mentsd el a ,,Megosztható link''-et"},
 {"value":8, "text":"Itt egy gyors bemutató videó!!"},
 {"value":9, "text":"A te DBCS (Dogecoin Bank Csomag) fiókod használatra készen áll.."},
 {"value":10,"text":"Megoszthatod a publikus csomag kulcsot, vagy megtarthatod magadnak."},
 {"value":11,"text":"Ezeket a statikus dogecoin aláírásokat a privát csomagkulcsból lehet kiszámítani."},
 {"value":12,"text":"NE veszítsd el a privát csomagkulcsodat. Mentsd el.."},
 {"value":13,"text":"(ha a privát kulcsodról menőzöl, el fogják lopni)"},
 {"value":14,"text":"Ezek a fiókok egyszer használatosak, annyit csinálhatsz belőle, amennyit akarsz."},
 {"value":15,"text":"Félbevághatod a csomagkulcsodat, és másik személlyel megoszthatod. Informatikusan szólva: ez csak 2Pub/PrivKey kulcsok együttese."},
 {"value":16,"text":"Ezt az oldalt hálózati elérés nélkül is használhatod."},
 {"value":17,"text":"A program megegyező többaláírásos értékeket fog készíteni, amelyek a maggal megegyeznek."},
 {"value":18,"text":"Új csomagkulcsok létrehozása"},
 {"value":19,"text":" vagy írd be a publikus csomagkulcsot ide (vagy 2 publikus kulcsot), és kattints"},
 {"value":20,"text":"ide"},
 {"value":21,"text":"A csomagkulcsot vagy a publikus kulcsot szúrd be ide"},
 {"value":22,"text":"(opcionális) Ide szőrd a másik publikus kulcsot"},
 {"value":23,"text":"Itt van a megosztható link ehhez az oldalhoz (tartalmazza a publikus csomagkulcsot):"},
 {"value":24,"text":"Személyes 1 (1/1 többkaláírásos):"},
 {"value":25,"text":"Személyes 2 (1/1 többkaláírásos):"},
 {"value":26,"text":" "},
 {"value":27,"text":"Cím"},
 {"value":28,"text":"Elköltés"},
 {"value":29,"text":"Fizetési pont"},
 {"value":30,"text":"Ellenőrzés"},
 {"value":31,"text":"Közös kassza (1/2 többkaláírásos)"},
 {"value":32,"text":"Folyószámla (1/2 többkaláírásos)"},
 {"value":33,"text":"Takarékszámla (2/2 többkaláírásos)"},
 {"value":34,"text":"Jótétemény-alap (2/2 multisig)"},
 {"value":35,"text":"Itt van az új privát csomagkulcsod (AZONNAL MENTSD EL!):"},
 {"value":36,"text":"Törd két privát kulccsá"},
 {"value":37,"text":"Itt van a megosztható link ehhez az oldalhoz (tartalmazza a publikus csomagkulcsot):"},
 {"value":38,"text":"Hiteles egyenleg: "},
 {"value":39,"text":"Erre a címre:"},
 {"value":40,"text":"Mennyiség:"},
 {"value":41,"text":"következő"},
 {"value":42,"text":"A bányász-költség az összeghez hozzáadásra kerül. Kivéve akkor, ha ez a teljes mennyiség, mert akkor kivonódik."},
 {"value":43,"text":"Felvétel a többaláírásos címről (vagy a normál Dogecoin címedről)"},
 {"value":44,"text":"Minden törlése, és újrakezdés"},
 {"value":45,"text":"Cím, ahonnét fizetsz:"},
 {"value":46,"text":"Nem megerősített egyenleg:"},
 {"value":47,"text":"Cél cím, ahová fizetsz:"},
 {"value":48,"text":"A privát csomagkulcsod, vagy egy privát aláírás (vagy pipáld be ezt a mezőt, ha offinline):"},
 {"value":49,"text":"Mutasd"},
 {"value":50,"text":"Ne legyen az átutalás aláírva (offline használathoz)"},
 {"value":51,"text":"Amikor minden mezöt kitöltöttél, kattints erre a gombra:"},
 {"value":52,"text":"Sikeres aláírás"},
 {"value":53,"text":"Az alant lévő dogecoin tranzakció alá lett írva egyszer."},
 {"value":54,"text":"Közvetítés (online) "},
 {"value":55,"text":"CSINÁLJ LINK HITELESÍTÉST"},
 {"value":56,"text":"Ez az átutalás sikersen be lett küldve a Dogecoin hálózatba!"},
 {"value":57,"text":"A dogecoin tranzakciós ID (txid) a fogadód."},
 {"value":58,"text":"A tranzakció részletei publikus weboldalon - pl chain.so - is megtekinthető."},
 {"value":59,"text":"Várj pár percet a hitelesítésig."},
 {"value":60,"text":"A közvetítés hibába futott."},
 {"value":61,"text":"Valami nem stimmel."},
 {"value":62,"text":"Itt van néhány ötlet, hogy mi okozhatta:"},
 {"value":63,"text":"A megfelelő számlához tartozó jelszóval írtál alá?"},
 {"value":64,"text":"Valamelyik mezőt elfelejtetted kitölteni? Minden mezőt elfogadott a program?"},
 {"value":65,"text":"(tehát ne írd a fogadócímbe az összeget véletlenül, vagy ilyesmi)"},
 {"value":66,"text":"Van elég pénz a számlán, hogy a tranzakció teljesíthető legyen?"},
 {"value":67,"text":"Próbáld újra."},
 {"value":68,"text":"Elfogadó pont. A Dogecoinokat elfogadják itt."},
 {"value":69,"text":"Megosztható link az oldalhoz"},
 {"value":70,"text":"Kapcsolódó Reddit posztok betöltése, ha vannak"},
 {"value":71,"text":"Egyenleg átküldése ide a reddites Dogetipbotról"},
 {"value":72,"text":"További aláírás kell. Add ezt a tranzakciós ID-t a következő személynek, hogy aláírja."},
 {"value":73,"text":"Egy aláíró-link készítése (vagy következő aláírás)"} 
			]
        }
    }
};

/******************************************************************
* wow
* https://docs.google.com/document/d/1CRKfbI7XBvb7yxrNYSbk3Zlqw9YU5xYTko5XP6eLP3U/edit?usp=sharing
******************************************************************/

//var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

/***********************************************
* The Language Buttons on the Pay Spot Screens 
************************************************/
$("#PSdutchbutton").click(function(){
	displayContents(languages.dutch)
});

$("#PSspanishbutton").click(function(){
	displayContents(languages.spanish)
});

$("#PSjapanesebutton").click(function(){
	displayContents(languages.japanese)
});

$("#PSenglishbutton").click(function(){
	displayContents(languages.english)
});

$("#PSfrenchbutton").click(function(){
	displayContents(languages.french)
});

$("#PSitalianbutton").click(function(){
	displayContents(languages.italian)
});

$("#PSrussianbutton").click(function(){
	displayContents(languages.russian)
});

$("#PSgermanbutton").click(function(){
	displayContents(languages.german)
});

$("#PShungarianbutton").click(function(){
	displayContents(languages.hungarian)
});

/***********************************************
* The Language Buttons on the Withdrawl Screens 
************************************************/
$("#Wdutchbutton").click(function(){
	displayContents(languages.dutch)
});

$("#Wspanishbutton").click(function(){
	displayContents(languages.spanish)
});

$("#Wjapanesebutton").click(function(){
	displayContents(languages.japanese)
});

$("#Wenglishbutton").click(function(){
	displayContents(languages.english)
});

$("#Wfrenchbutton").click(function(){
	displayContents(languages.french)
});

$("#Witalianbutton").click(function(){
	displayContents(languages.italian)
});

$("#Wrussianbutton").click(function(){
	displayContents(languages.russian)
});

$("#Wgermanbutton").click(function(){
	displayContents(languages.german)
});

$("#Whungarianbutton").click(function(){
	displayContents(languages.hungarian)
});

/***********************************************
* The Language Buttons on the DBS Screens 
************************************************/
$("#DBSdutchbutton").click(function(){
	displayContents(languages.dutch)
});

$("#DBSspanishbutton").click(function(){
	displayContents(languages.spanish)
});

$("#DBSjapanesebutton").click(function(){
	displayContents(languages.japanese)
});

$("#DBSenglishbutton").click(function(){
	displayContents(languages.english)
});

$("#DBSfrenchbutton").click(function(){
	displayContents(languages.french)
});

$("#DBSitalianbutton").click(function(){
	displayContents(languages.italian)
});

$("#DBSrussianbutton").click(function(){
	displayContents(languages.russian)
});

$("#DBSgermanbutton").click(function(){
	displayContents(languages.german)
});

$("#DBShungarianbutton").click(function(){
	displayContents(languages.hungarian)
});
/***********************************************
* The Language Buttons on the TripleShibe Screens 
************************************************/
$("#TSdutchbutton").click(function(){
	displayContents(languages.dutch)
});

$("#TSspanishbutton").click(function(){
	displayContents(languages.spanish)
});

$("#TSjapanesebutton").click(function(){
	displayContents(languages.japanese)
});

$("#TSenglishbutton").click(function(){
	displayContents(languages.english)
});

$("#TSfrenchbutton").click(function(){
	displayContents(languages.french)
});

$("#TSitalianbutton").click(function(){
	displayContents(languages.italian)
});

$("#TSrussianbutton").click(function(){
	displayContents(languages.russian)
});

$("#TSgermanbutton").click(function(){
	displayContents(languages.german)
});

$("#TShungarianbutton").click(function(){
	displayContents(languages.hungarian)
});





function displayContents(a) {
    if(1) {
//	var foo = JSON.parse(reader.responseText);
	var foo = a
	console.log(a)

	


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

