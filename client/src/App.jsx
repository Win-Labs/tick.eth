import { useState } from "react";
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
import Table from "./components/Table";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const name = normalize("ethbrussels.eth");
  const { data: avatar } = useEnsAvatar({ name: name, chainId: 17000 });
  const { data: ethereum } = useEnsAddress({ name, coinType: 60 });

  const { data } = useEnsText({
    name: normalize("luc.eth"),
    key: "com.twitter",
  });

  return (
    <Main>
      {/* <Test /> */}
      {/* <div>
        {ethereum && formatAddress(ethereum)}
        <br />
        {avatar && <img src={avatar} />}
        <div>
          <span>Twitter: </span>
          <span>{data}</span>
        </div>
      </div> */}
      <Table />
      {/* <ConnectButton /> */}
    </Main>
  );
}

export default App;
