import React from "react";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../Home/Home";
import PlayersTable from "../PlayersTable/PlayersTable";

const StyledContent = styled.main`
  height: calc(100vh - 150px - 62px - 40px);
  padding: 10px 20px;
`;

const Content = () => {
  return (
    <StyledContent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<PlayersTable />} />
      </Routes>
    </StyledContent>
  );
};

export default Content;
