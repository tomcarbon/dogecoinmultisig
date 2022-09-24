async function get_the_transactions_blockcypher_update(address) {
        let hasMoreFlag = false;
        console.info("top of get_the_transactions(" + address + ") in blockcypher(update).");
        try {
                work_txs = [];
                cum_total = parseFloat("0.0");
                const url_stg = "https://api.blockcypher.com/v1/doge/main/addrs/" + address + "?includeScript=true&unspentOnly=true";
                console.info("url_stg = " + url_stg + ".");
                const data = await $.ajax ({
                                type: "GET",
                                url: url_stg,
                                dataType: "json"
                });

        //      alert(JSON.stringify(data, null, 4));
                console.info("Here's data.txs. Number in array: " + data.txrefs.length + '.');
                console.log(data.txrefs);

                for (let i=0; i < data.txrefs.length; i++)
                {
                        const obj = {
                                txid: data.txrefs[i].tx_hash,
                                output_no: data.txrefs[i].tx_output_n,
                                value: data.txrefs[i].value/100000000,
                                script_hex: data.txrefs[i].script,
                                rel: []
                        }
                        work_txs.push(obj);
                        cum_total = cum_total + (data.txrefs[i].value/100000000);
                }

                console.info("Here are the txs so far:");
                for (let i=0;i<work_txs.length;i++) {
                        console.info( "blockcypher:TX(" + i + "): " + work_txs[i].txid + ", output_no: " + work_txs[i].output_no + ", value: " + work_txs[i].value);
                }

                if (data.hasMore == true) {             // we can do more work here, put out warning for now.
                        alert("data.hasMore = true in get_the_transactions_blockcypher_update! This is a sandy account. Cumulative total = " + cum_total);
                }

                console.info("Cumulative Totals from transactions: "  + cum_total);
		return work_txs;

        } catch (e) {
                console.log(e);
        }
}