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

module.exports = db;
