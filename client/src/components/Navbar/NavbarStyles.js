import styled from "styled-components";
import { AppBar, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const StyledAppBar = styled(AppBar)`
  background-color: #000;
  width: 100%;
  position: sticky;
`;

export const StyledToolBar = styled(Toolbar)``;

export const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 2rem;
`;

export const StyledNavButton = styled(Button)`
  font-family: ${({ theme }) => theme.secondaryFont};
  color: white;
  margin-left: 8px;
  font-size: 1.3em;
  max-height: 3rem;
  max-width: 20rem;

  &:hover {
    background-color: transparent;
  }
`;
