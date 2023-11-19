import { Connection, Keypair,LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        const balance = await connection.getBalance(keypair.publicKey);
        console.log(`The account balance is ${balance / LAMPORTS_PER_SOL} SOL`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();