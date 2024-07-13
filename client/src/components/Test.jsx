import React, { useEffect, useState } from "react";
import { createWalletClient, custom } from "viem";
import { holesky } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
import { createSubname } from "@ensdomains/ensjs/wallet";
import { privateKeyToAddress } from "viem/accounts";

async function caller() {
  const wallet = createWalletClient({
    account: privateKeyToAddress(
      "0xb5d453f45e2be6fadb6cfbc60f7906f58788a38dc54576f03a5bac1eed08beee"
    ),
    chain: addEnsContracts(holesky),
    transport: custom(window.ethereum),
  });
  console.log("HELFJSKHJFKLSDFHSKJFSDFHJK");

  const hash = await createSubname(wallet, {
    name: "sub1.ethbrussels.eth",
    owner: "0xEFfeB83B07d69A4a46C13ADb435F493EB9562797",
    contract: "registry",
  });
  console.log(hash);
}

function Test() {
  useEffect(() => {
    caller();
  }, []);
  return <div>sfs</div>;
}

export default Test;
