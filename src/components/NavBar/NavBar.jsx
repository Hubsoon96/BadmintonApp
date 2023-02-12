import React from "react";

import styled from "styled-components";

import NavBarButton from "../NavBarButton/NavBarButton";
import {
  faHouse,
  faUserPen,
  faTableList,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const StyledNavBar = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  background-color: #86a3b8;
  border-radius: 15px;
  width: 98vw;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const NavBar = () => {
  return (
    <StyledNavWrapper>
      <StyledNavBar>
        <NavBarButton buttonText="Home" buttonIcon={faHouse} linkPath="/"></NavBarButton>
        <NavBarButton
          buttonText="Tabela"
          buttonIcon={faTableList}
          linkPath="/table"
        ></NavBarButton>
        <NavBarButton
          buttonText="Dodaj zawodnika"
          buttonIcon={faUserPen}
          linkPath="/addPlayer"
        ></NavBarButton>
        <NavBarButton buttonText="Mecz" buttonIcon={faUserGroup} linkPath="/game"></NavBarButton>
      </StyledNavBar>
    </StyledNavWrapper>
  );
};

export default NavBar;
