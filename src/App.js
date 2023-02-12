import "./App.css";
import { BrowserRouter} from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const StyledAppWrapper = styled.div`
  justify-self: center;
  background-color: #bdcdd6;
`;
function App() {
  return (
    <BrowserRouter>
      <StyledAppWrapper>
        <Header />
        <NavBar />
        <Content></Content>
        <Footer />
      </StyledAppWrapper>
    </BrowserRouter>
  );
}

export default App;
