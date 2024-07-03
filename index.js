import Arweave from "arweave";

(async () => {
  // Configuration
  const config = {
    host: "arweave.net",
    port: 443,
    protocol: "https",
  };

  // Initialization
  const arweave = Arweave.init(config);

  //Generate wallet
  const wallet = await arweave.wallets.generate();

  // Generate Transaction
  const transaction = await arweave.createTransaction(
    { data: "Hello world" },
    wallet
  );

  // sign the transaction
  await arweave.transactions.sign(transaction, wallet);

  // send the data to the arweave
  try {
    const result = await arweave.transactions.post(transaction);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
