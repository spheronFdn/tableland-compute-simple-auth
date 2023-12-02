const env = require("dotenv").config();
require("dotenv").config();

const ethers = require("ethers");
const tableland = require("@tableland/sdk");

// Set up the provider and wallet using your private key.
let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
let privateKey = process.env.PRIVATE_KEY; // Your private key
let wallet = new ethers.Wallet(privateKey, provider);

// Connect the wallet to the provider.
let signer = wallet.connect(provider);

// Create the Tableland database instance using the signer.
const db = new tableland.Database({ signer });

// This is the table's `prefix`--a custom table value prefixed as part of the table's name
async function tableCreaetionFunction(){
    const prefix = "my_table_new";
const { meta: create } = await db
    .prepare(`CREATE TABLE ${prefix} (id INTEGER PRIMARY KEY, username TEXT, email TEXT, password TEXT);`)
    .run();
  
// The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
const tableName = create.txn?.name ?? ""; // e.g., my_table_31337_2
console.log(tableName)
await create.txn?.wait();
}

tableCreaetionFunction();