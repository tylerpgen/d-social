import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import SocialPage from "Pages/socialPage";
import LoginPage from "Pages/loginPage";
import ProfilePage from "Pages/profilePage";
// import { ThemeProvider } from "styled-components";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
// import Home from "./Pages/Home/Home.js";
// import GlobalStyle from "./globalStyles";
// import theme from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              {/* <Route path="/social" element={<SocialPage />} /> */}
              {/* <Route path="/login" element={<LoginPage />} /> */}
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </StyledEngineProvider>
    </>
  );
}

export default App;
