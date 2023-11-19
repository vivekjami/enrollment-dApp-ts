"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var anchor_1 = require("@project-serum/anchor");
var wba_prereq_1 = require("../programs/wba_prereq");
var wba_wallet_1 = require("./wba-wallet");
var keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(wba_wallet_1.default));
var connection = new web3_js_1.Connection("https://api.devnet.solana.com");
var github = Buffer.from("vivekjami", "utf8");
var provider = new anchor_1.AnchorProvider(connection, new anchor_1.Wallet(keypair), {
    commitment: "confirmed"
});
var program = new anchor_1.Program(wba_prereq_1.IDL, "HC2oqz2p6DEWfrahenqdq2moUcga9c9biqRBcdK3XKU1", provider);
// Create the PDA for our enrollment account
var enrollment_seeds = [Buffer.from("prereq"),
    keypair.publicKey.toBuffer()];
var _a = web3_js_1.PublicKey.findProgramAddressSync(enrollment_seeds, program.programId), enrollment_key = _a[0], _bump = _a[1];
// Execute our enrollment transaction
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var txhash, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, program.methods
                        .complete(github)
                        .accounts({
                        signer: keypair.publicKey,
                        prereq: enrollment_key,
                        systemProgram: web3_js_1.SystemProgram.programId,
                    })
                        .signers([
                        keypair
                    ]).rpc()];
            case 1:
                txhash = _a.sent();
                console.log("Success! Check out your TX here:\n    https://explorer.solana.com/tx/".concat(txhash, "?cluster=devnet"));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.error("Oops, something went wrong: ".concat(e_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();
