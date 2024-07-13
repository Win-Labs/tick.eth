import { useState } from "react";
import "./App.css";
import ConnectButton from "./components/ConnectButton";
import {
  useAccount,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsText,
} from "wagmi";
import { normalize } from "viem/ens";
import { formatAddress } from "@ens-tools/format";
import Test from "./components/Test";

function App() {
  const name = normalize("ethbrussels.eth");
  const { data: avatar } = useEnsAvatar({ name: name, chainId: 17000 });
  const { data: ethereum } = useEnsAddress({ name, coinType: 60 });

  const { data } = useEnsText({
    name: normalize("luc.eth"),
    key: "com.twitter",
  });

  return (
    <>
      <Test />
      <div>
        {ethereum && formatAddress(ethereum)}
        <br />
        {avatar && <img src={avatar} />}
        <div>
          <span>Twitter: </span>
          <span>{data}</span>
        </div>
      </div>
      <ConnectButton />
    </>
  );
}

export default App;
