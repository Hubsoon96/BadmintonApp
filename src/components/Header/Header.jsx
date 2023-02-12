import React from "react";

import styled from "styled-components";

import Logo from "../../img/badminton-racket-4.svg";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-self: end;
  background-color: #93bfcf;
`;

const StyledLogoImgRight = styled.img`
  transform: rotate(90deg);
  width: 150px;
`;

const StyledLogoImgLeft = styled.img`
  width: 150px;
`;

const StyledLogoText = styled.p`
margin-top: 30px;
  font-size: 32px;
  fontfamily: roboto;
  fontweight: bold;
  color: white;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLogoImgLeft src={Logo} alt="badminton racquet" />
      <StyledLogoText>BadmintonApp</StyledLogoText>
      <StyledLogoImgRight src={Logo} alt="badminton racquet" />
    </StyledDiv>
  );
};

export default Header;
