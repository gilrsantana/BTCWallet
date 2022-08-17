# Criação de Wallet BTC


## Passos
0. Pré requisitos: npm e nodejs v.16.16.0
1. Criação do projeto: `npm init`
2. Instalação das dependências: `npm i bip39 bip32@2.0.6 bitcoinjs-lib --save`
3. Executar o arquivo node createWallet.js
4. Download Bitcoin Wallet Electrum: `electrum.org`
5. Buscar no bitcoin.com pelo endereço criado

## Configurando Electrum Wallet
- Utilizar Electrum na testnet
Vá até a pasta Dio e digite o comando

```
./electrum-4.3.0-x86_64.AppImage --testnet
```

## Minha Wallet Dio
```
Carteira gerada
Endereço:  mquEVbNxa6bupM1QYWEDYchcq4GANEe5j1
```

## Operações

- Verificar carteira no Bitcoin Explorer Testnet: 0 Transações

- Adicionar Bitcoin Faucet (https://bitcoinfaucet.uo1.net/)

- Verificar o saldo da carteira novamente no Bitcoin Explorer Testnet

- Abrir o Electrum Wallet utilizando a rede Testnet

- Criar carteira / Importar / Informar a *chave privada* criada pelo meu código

- Será exibida a transação realizada

- Rodar novamente o código createWallet

- Pegar o novo endereço gerado para enviar bitcoins (n3FXo2DF7dbrp4LFMYo6NWvmX43LMVKyP3)