import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledNavBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 16px;
  padding: 5px 20px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: white;
  text-decoration: none;
  &:hover {
    color: #537fe7;
`;

const NavBarButton = ({ buttonText, buttonIcon, linkPath }) => {
  return (
    <StyledNavBarButton>
      <StyledLink to={linkPath}>
        <FontAwesomeIcon icon={buttonIcon} />
        {buttonText}
      </StyledLink>
    </StyledNavBarButton>
  );
};

export default NavBarButton;
