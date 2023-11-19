import { Keypair } from "@solana/web3.js";
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet:
${kp.publicKey.toBase58()}[${kp.secretKey}]`)
import * as bs58 from 'bs58';
import * as readlineSync from 'readline-sync';
import wallet from "./dev-wallet";

function base58ToWallet() {
  console.log("Enter your Base58 string:");
  const base58 = readlineSync.prompt();

  try {
    const wallet = bs58.decode(base58);
    console.log(wallet.toString());
  } catch (error) {
    console.error('Error decoding Base58 string:', error.message);
  }
}

function walletToBase58() {
  const base58 = bs58.encode(Buffer.from(wallet));
  console.log(base58.toString());
}

// Example usage
base58ToWallet();
walletToBase58();