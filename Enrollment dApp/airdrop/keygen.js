"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var kp = web3_js_1.Keypair.generate();
console.log("You've generated a new Solana wallet:\n".concat(kp.publicKey.toBase58(), "[").concat(kp.secretKey, "]"));
var bs58 = require("bs58");
var readlineSync = require("readline-sync");
var dev_wallet_1 = require("./dev-wallet");
function base58ToWallet() {
    console.log("Enter your Base58 string:");
    var base58 = readlineSync.prompt();
    try {
        var wallet_1 = bs58.decode(base58);
        console.log(wallet_1.toString());
    }
    catch (error) {
        console.error('Error decoding Base58 string:', error.message);
    }
}
function walletToBase58() {
    var base58 = bs58.encode(Buffer.from(dev_wallet_1.default));
    console.log(base58.toString());
}
// Example usage
base58ToWallet();
walletToBase58();
