import React from "react";
import { IconButton } from "@mui/material";
import { StyledAppBar, StyledMenuIcon, StyledNavButton, StyledToolBar } from "./NavbarStyles";

const Navbar = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolBar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <StyledMenuIcon />
        </IconButton>
        <StyledNavButton href="/" variant="text">
          News
        </StyledNavButton>
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default Navbar;
