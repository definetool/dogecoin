
import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Factory, } from 'bip32';
import { generateMnemonic, mnemonicToSeed, } from 'bip39';
import eccObj from './utils/ecc.js';
import defaults from './defaults.js';

bitcoin.initEccLib(eccObj);

const bip32Obj = BIP32Factory(eccObj);



async function generate(messagePrefix) {
    let { path, network, } = defaults;

    if (messagePrefix !== undefined) {
        network = { messagePrefix, ...network, };
    }

    
    let mnemonic = generateMnemonic(); //助记词。
    let seed = await mnemonicToSeed(mnemonic);
    let master = bip32Obj.fromSeed(seed, network);
    let keypair = master.derivePath(path);

    let doge_data = bitcoin.payments.p2pkh({
        'pubkey': keypair.publicKey,
        'network': network,
    });

    let address = doge_data.address;
    let privateKey = keypair.toWIF();
   

    return {
        address,
        privateKey,
        mnemonic,
    };
}


export default generate;