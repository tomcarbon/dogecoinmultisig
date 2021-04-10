async function get_the_transactions(address) {
        let hasMoreFlag = false;
        console.info("top of get_the_transactions(" + address + ").");
        try {
                work_txs = [];
                cum_total = parseFloat("0.0");
                const url_stg = "https://api.blockcypher.com/v1/doge/main/addrs/" + address + "/full?limit=50";
                console.info("url_stg = " + url_stg + ".");
                const data = await $.ajax ({
                                type: "GET",
                                url: url_stg,
                                dataType: "json"
                });

        //      alert(JSON.stringify(data, null, 4));
                let tt1 = JSON.stringify(data, null, 4);
                console.info("Here's data.txs:");
                console.log(data.txs);

                for (let i=0;i<data.txs.length;i++) {
                        const OUTPUT_LIMIT_SIZE = 20;
                        if (data.txs[i].vout_sz > OUTPUT_LIMIT_SIZE) {          // if there are many outputs, load them all here
                                let a = data.txs[i].vout_sz - OUTPUT_LIMIT_SIZE;
                                let url = data.txs[i].next_outputs;
                                while (a > 0) {
                                        console.info("very outputs! special handling is needed here:" + url + ".");
                                        const res = await get_more_blockcypher_outputs(url);
                                        console.log(res.outputmore_transactionss);
                                        data.txs[i].outputs.push(...res.outputs);
                                        a-=OUTPUT_LIMIT_SIZE;
                                        url = res.next_outputs;
                                }
                        }
                        for (let z=0;z<data.txs[i].vout_sz;z++) {               // find the right output
                                if (data.txs[i].outputs[z].addresses == address) {
                                        if(data.txs[i].outputs[z].hasOwnProperty('spent_by')) {
                                                        // ignore this tx, it's already been spent!
                                                console.info("ignoring transaction # " + i + '.');
                                        }
                                        else {          // otherwise, put it on the queue!
                                                const obj = {
                                                        txid: data.txs[i].hash,
                                                        output_no: z,
                                                        value: data.txs[i].outputs[z].value/100000000,
                                                        script_hex: data.txs[i].outputs[z].script,
                                                        rel: []
                                                }
                                                work_txs.push(obj);
                                                cum_total = cum_total + (data.txs[i].outputs[z].value/100000000);
                                        }
                                }
                        }
//                      console.info("TCCDEBUG: we are now on transaction #" + i);              // 20210410: this goes up to 49
                }

                console.info("Here are the txs so far:");
                for (let i=0;i<work_txs.length;i++) {
                        console.info( "blockcypher:TX(" + i + "): " + work_txs[i].txid + ", output_no: " +
                                                                                work_txs[i].output_no + ", value: " + work_txs[i].value);
                }

                if (data.hasMore == true) {             // we can do more work here...
                        work = parseInt(data.txs[data.txs.length-1].block_height);      // save this  last block to pass it to 30779
                        work_last_count = work_txs.length;      // e.g. 50
                        console.info("30778: hasMore == true, calling 30779 to read in more transactions before block = " + work);
                        hasMoreFlag = true;
                }

                if (hasMoreFlag == true && data.txs[data.txs.length-1].block_index != -1) {              // we can do more work here...
                                get_the_next_transactions(address);
                }
        } catch (e) {
                console.log(e);
        }
}


/* blockcypher, part II */
async function get_the_next_transactions(address) {
        console.info("top of get_the_next_transactions");
        try {
                var hasMoreFlag = false;
                var ttemp = 0;
                /***************************************************************
                * loop through more than once to pick up to max transactions
                ***************************************************************/
                const url_stg = "https://api.blockcypher.com/v1/doge/main/addrs/" + address + "/full?before=" + work;       // new
                console.info("url_stg = " + url_stg + ".");
                let data = await $.ajax ({
                        type: "GET",
                        url: url_stg,
                        dataType: "json",
                });

                let tt1 = JSON.stringify(data, null, 4);
                console.info("get_the_next_transactions: number of transactions to load: " + data.txs.length);
                console.info("Here's data.txs:");
                console.log(data);

                for (let i=0;i<data.txs.length;i++) {
                        const OUTPUT_LIMIT_SIZE = 20;
                        if (data.txs[i].vout_sz > OUTPUT_LIMIT_SIZE) {          // if there are many outputs, load them all here
                                let a = data.txs[i].vout_sz - OUTPUT_LIMIT_SIZE;
                                let url = data.txs[i].next_outputs;
                                while (a > 0) {
                                        console.info("very outputs! special handling is needed here:" + url + ".");
                                        const res = await get_more_blockcypher_outputs(url);
                                        console.log(res.outputs);
                                        data.txs[i].outputs.push(...res.outputs);
                                        a-=OUTPUT_LIMIT_SIZE;
                                        url = res.next_outputs;
                                }
                        }
                        for (let z=0;z<data.txs[i].vout_sz;z++) {               // find the right output
                                if (data.txs[i].outputs[z].addresses == address) {
                                        if(data.txs[i].outputs[z].hasOwnProperty('spent_by')) {
                                                        // ignore this tx, it's already been spent!
                                        }
                                        else {          // otherwise, put it on the queue!
                                                const obj = {
                                                        txid: data.txs[i].hash,
                                                        output_no: z,
                                                        value: data.txs[i].outputs[z].value/100000000,
                                                        script_hex: data.txs[i].outputs[z].script,
                                                        rel: []
                                                }
                                                work_txs.push(obj);
                                                cum_total = cum_total + (data.txs[i].outputs[z].value/100000000);
                                        }
                                }
//                              console.info("TCCDEBUG: we are now on output #" + z);
                        }
                }

                for (var i=work_last_count;i<work_txs.length;i++)
                {
                        console.info(
                                "blockcypher:TX(" + i + "): " + work_txs[i].txid +
                                ", output_no: " + work_txs[i].output_no +
                                ", value: " + work_txs[i].value);
                }

                console.info(`data.hasMore=${data.hasMore}, work_txs.length=${work_txs.length}`);
                if (data.hasMore == true && data.txs[data.txs.length-1].block_index != -1) {
                        work = parseInt(data.txs[data.txs.length-1].block_height);     // save this  last block to pass it to 30779
                        console.info("hasmore: work=" + work);
                        console.info("  con't(before): work_last_count = " +work_last_count+" and work_txs.length="+work_txs.length);
                        work_last_count = work_txs.length;      // e.g. 60
                        console.info("  con't(after): work_last_count = "+work_last_count+" and work_txs.length="+work_txs.length);
                        get_the_next_transactions(address);     // async recursion
                }

                console.info("Cumulative Total = " + cum_total);
        } catch (e) {
                console.info("ERROR! get_the_next_transactions");
                console.log(e);
        }

}

async function get_more_blockcypher_outputs(url) {
        try {
                const data = await $.ajax ({
                                type: "GET",
                                url: url,
                                dataType: "json"
                });
                return data;
        } catch (err) {
                console.log(err);
                return;
        }
}

