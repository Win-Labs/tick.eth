import { useState } from "react";
import "./App.css";
import ConnectButton from "./components/ConnectButton";
import { useAccount, useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";
import { normalize } from "viem/ens";
import { formatAddress } from "@ens-tools/format";

function App() {
  const name = normalize("luc.eth");
  const { data: avatar } = useEnsAvatar({ name });
  const { data: ethereum } = useEnsAddress({ name, coinType: 60 });

  return (
    <>
      <div>
        {ethereum && formatAddress(ethereum)}
        <br />
        {avatar && <img src={avatar} />}
      </div>
      <ConnectButton />
    </>
  );
}

export default App;
