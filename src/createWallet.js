// importando as dependêcias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// definir a rede
// bitcoin - rede principal - mainnet
// testnet - rede de teste - testnet
const network = bitcoin.networks.testnet

// dericação de carteiras HD - carteira determinística
const path = `m/49'/1'/0'/0` 

// // criação da seed - mnemonico - palavas de senha
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// criação da raiz da carteira determinística
let root = bip32.fromSeed(seed, network)

// criando a conta - par pvt-pub keys
let account = root.derivePath(path)

// Nó a partir da raiz
let node = account.derive(0).derive(0)

// criando o endereço
let btcAddress = bitcoin.payments.p2pkh({
	pubkey: node.publicKey,
	network: network
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed: ", mnemonic)
