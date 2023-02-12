import React from "react";
import styled from "styled-components";

import BadmintonField from "../../img/badmintonField.svg";

const StyledFieldImg = styled.img`
  display: flex;
  height: 400px;
  transform: rotate(90deg);
  border: transparent;
`;

const StyledHomeText = styled.p`
text-align: justify;
font-size: 16px;
font-family:arial`
const Home = () => {
  return (
    <div>
      <StyledHomeText>
        Badminton (kometka, wolant) - gra 2- lub 4-osobowa, polegająca na
        przebijaniu nad siatką lotki za pomocą rakietki; gra rozgrywana jest na
        punkty na polu o długości 13,4 m i szerokości 6,1 m. Siatka o szerokości
        76 cm zawieszona jest na wysokości 1,524 m; lotka o wadze od 4,74 g do
        5,50 g wykonana jest z 16 piórek (naturalnych lub syntetycznych).
      </StyledHomeText>
      <div>
        <StyledFieldImg src={BadmintonField} alt="Badminton Field" />
      </div>
    </div>
  );
};
export default Home;
