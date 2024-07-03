import Arweave from "arweave";
import fs from "fs";

(async () => {
  // Configuration
  const config = {
    host: "arweave.net",
    port: 443,
    protocol: "https",
  };

  // Initialization
  const arweave = Arweave.init(config);
  const currentWallet = JSON.parse(fs.readFileSync("./wallet.json").toString());

  const transaction = await arweave.createTransaction(
    { data: "Hello word" },
    currentWallet
  );

  // Sign the key
  await arweave.transactions.sign(transaction, currentWallet);

  // Post the data
  try {
    await arweave.transactions.post(transaction);
    console.log(`https://arweave.net/${transaction.id}`);
  } catch (e) {
    console.log(e);
  }
})();
