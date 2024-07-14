import React, { useEffect, useState } from "react";
import { createWalletClient, custom, getContract } from "viem";
import { holesky } from "viem/chains";
import { addEnsContracts } from "@ensdomains/ensjs";
import { createSubname } from "@ensdomains/ensjs/wallet";
import { privateKeyToAccount, privateKeyToAddress } from "viem/accounts";

async function caller() {
  const wallet = createWalletClient({
    account: privateKeyToAddress(
      "0xb5d453f45e2be6fadb6cfbc60f7906f58788a38dc54576f03a5bac1eed08beee"
    ),
    chain: addEnsContracts(holesky),
    transport: custom(window.ethereum),
  });
  console.log("HELFJSKHJFKLSDFHSKJFSDFHJK");

  const contract = getContract({
    address: "0x26A9899b747b6f1601F3a27Aa689D2EdCC0FC7ee",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        name: "addMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getMessage",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "messages",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    // 1a. Insert a single client
    client: wallet,
  });
  console.log("is there any contract", contract);

  await contract.addMessage(
    "0xDaFD7e67664A118Fb2F7F130AE6E58A7588798cA",
    "Hello World"
  );

  // const hash = await createSubname(wallet, {
  //   name: "gylman.now.test.ethbrussels.eth",
  //   owner: "0xEFfeB83B07d69A4a46C13ADb435F493EB9562797",
  //   contract: "nameWrapper",
  // });

  console.log(newMessage);
}

function Test() {
  useEffect(() => {
    caller();
  }, []);
  return <div>sfs</div>;
}

export default Test;
