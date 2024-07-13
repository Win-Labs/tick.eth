import { createWalletClient, custom } from "viem";
import { holesky } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
// import { createSubname } from "@ensdomains/ensjs/wallet";

async function sikim() {
  const wallet = createWalletClient({
    chain: addEnsContracts(holesky),
    transport: custom(window.ethereum),
  });

  console.log(wallet);
}

const a = await sikim();
