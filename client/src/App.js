import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import SocialPage from "Pages/socialPage";
import LoginPage from "Pages/loginPage";
import ProfilePage from "Pages/profilePage";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./Pages/Home/Home.js";
import GlobalStyle from "./globalStyles";
import theme from "./theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
