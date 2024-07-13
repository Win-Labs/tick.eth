# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

### Install

`npm install --save-dev hardhat`

### Create project

`npx hardhat`

### Compile

`npx hardhat compile`

### Run local ethereum node

`npx hardhat node`

### Deploy

`npx hardhat run scripts/deploy.js --network localhost`

### Use contract address and name in interact.js

### Interact

`npx hardhat run scripts/interact.js --network localhost`
