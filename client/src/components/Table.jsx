import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 30px;
`;

const TableTitle = styled.p`
  color: #6fa8dcff;
  display: flex;
  font-size: 27px;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  gap: 2px;
`;

const Entry = styled.div`
  background: #6fa8dcff;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 2px solid #fff;
  border-radius: 8px;
  gap: 20px;
`;

const EntrySpan = styled.span`
  color: #fff;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 20px;
  background: transparent;
  color: #6fa8dcff;
  font-weight: 600;
  border-bottom: ${(props) =>
    (props.active && "2px solid #6fa8dcff") || "undefined"};
  cursor: pointer;
`;

const BaseButton = styled.button`
  padding: 10px 20px;
  background: #93c47dff;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

const Generate = styled(BaseButton)``;

const Sell = styled(BaseButton)`
  background: #f6b26bff;
`;

const Modal = styled.div`
  display: flex;
  border: 1px solid #9fc5e8ff;
  padding: 30px 20px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  gap: 20px;
`;

const SellInput = styled.input`
  padding: 5px;
  border: 1px solid #9fc5e8ff;
  border-radius: 5px;
  color: #6fa8dcff;
`;

const Table = () => {
  const [tab, setTab] = useState("My Tickets");
  const handleTab = (tab) => {
    setTab(tab);
  };

  const [showSell, setShowSell] = useState(false);
  const handleShowSell = () => {
    setShowSell((prevState) => !prevState);
  };

  const handleFinalSell = () => {
    handleShowSell();
  };

  return (
    <Main>
      <TableTitle>Applications Manager</TableTitle>
      <Content>
        <Tabs>
          <Tab
            active={tab === "My Tickets"}
            onClick={(e) => handleTab(e.target.textContent)}
          >
            My Tickets
          </Tab>
          <Tab
            active={tab === "Sell Tickets"}
            onClick={(e) => handleTab(e.target.textContent)}
          >
            Sell Tickets
          </Tab>
          {/* <Tab>Requests</Tab>
          <Tab>Events</Tab> */}
        </Tabs>
        {tab === "Sell Tickets" && (
          <Entries>
            <Entry>
              <EntrySpan>ticket0.movie0.eth</EntrySpan>{" "}
              <Sell onClick={handleShowSell}>Sell</Sell>
            </Entry>
            <Entry>
              <EntrySpan>ticket1.movie0.eth</EntrySpan>{" "}
              <Sell onClick={handleShowSell}>Sell</Sell>
            </Entry>
            <Entry>
              <EntrySpan>ticket2.movie0.eth</EntrySpan>{" "}
              <Sell onClick={handleShowSell}>Sell</Sell>
            </Entry>
            <Generate onClick={handleShowSell}>Generate Ticket</Generate>
          </Entries>
        )}
        {tab === "My Tickets" && (
          <Entries>
            <Entry>
              <EntrySpan>ticket0.movie0.eth</EntrySpan>
            </Entry>
            <Entry>
              <EntrySpan>ticket1.movie0.eth</EntrySpan>
            </Entry>
            <Entry>
              <EntrySpan>ticket2.movie0.eth</EntrySpan>
            </Entry>
            <Generate onClick={handleShowSell}>Buy Ticket</Generate>
          </Entries>
        )}
        {showSell && (
          <Modal>
            <SellInput />
            <Sell onClick={handleFinalSell}>Confirm </Sell>
          </Modal>
        )}
      </Content>
    </Main>
  );
};

export default Table;
