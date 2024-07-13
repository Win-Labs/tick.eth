import "dotenv/config";
import { createWalletClient, custom, http } from "viem";
import { holesky } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
import { createSubname } from "@ensdomains/ensjs/wallet";
import { privateKeyToAccount } from "viem/accounts";

// const wallet = createWalletClien
// import pkg from "hardhat";
// const { ethers } = pkg;

async function main() {
  const privateKey = "0x" + process.env.PRIVATE_KEY; // Assuming PRIVATE_KEY is a secure environment variable

  // Use the factory function to create a signer
  // const signer = ethers.Signer.fromMnemonic(privateKey, ethers.provider); // Or use another signing method like ethers.Wallet

  // Connect the signer to your chain provider
  // const wallet = signer.connect(
  //   "https://eth-holesky.g.alchemy.com/v2/rnkOdVMptMv2Rlz10XSOrXF7EygEPsk2"
  // ); // Replace with your chain provider

  const wallet = createWalletClient({
    account: privateKeyToAccount(privateKey),
    chain: addEnsContracts(holesky),
    transport: http(
      "https://eth-holesky.g.alchemy.com/v2/rnkOdVMptMv2Rlz10XSOrXF7EygEPsk2"
    ),
  });

  // const ens = addEnsContracts(holesky); // Assuming holesky represents your chain configuration

  const hash = await createSubname(wallet, {
    name: "sub.ethbrussels.eth",
    owner: "0xEFfeB83B07d69A4a46C13ADb435F493EB9562797",
    contract: "nameWrapper", // Or your desired ENS contract address
  });

  return hash;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
