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
`;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
`;

const Entry = styled.div`
  background: #6fa8dcff;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 2px solid #fff;
`;

const EntrySpan = styled.span`
  color: #fff;
`;

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 15px 20px;
  background: transparent;
  color: #6fa8dcff;
  font-weight: 600;
  border-bottom: 2px solid #6fa8dcff;
  cursor: pointer;
`;

const Table = () => {
  const [tab, setTab] = useState("Apply");
  const handleTab = () => {
    setTab();
  };

  return (
    <Main>
      <TableTitle>Applications Manager</TableTitle>
      <Content>
        <Tabs>
          <Tab>Apply</Tab>
          <Tab>Participants</Tab>
          <Tab>Requests</Tab>
          <Tab>Events</Tab>
        </Tabs>
        <Entries>
          <Entry>
            <EntrySpan>orkhan.teams.brussels.global.eth</EntrySpan>
          </Entry>
          <Entry>
            <EntrySpan>gylman.teams.brussels.global.eth</EntrySpan>
          </Entry>
          <Entry>
            <EntrySpan>ricardo.teams.brussels.global.eth</EntrySpan>
          </Entry>
        </Entries>
      </Content>
    </Main>
  );
};

export default Table;
