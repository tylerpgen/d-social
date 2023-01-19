import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledContainer } from "./styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import GlobalStyle from "./globalStyles";
import "./App.css";
import theme from "./theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <StyledContainer>
            <Navbar />
            <Home />
          </StyledContainer>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
