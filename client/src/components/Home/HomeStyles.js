import styled from "styled-components";
import { Container, Typography, TextField, Divider, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.margin};
`;

export const MainHeader = styled(Typography)`
  font-size: 10rem;
  font-family: ${({ theme }) => theme.boldFontFamily};
  margin-top: ${({ theme }) => theme.margin};
  margin-bottom: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.textColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 7rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.xs}px) {
    font-size: 4rem;
  }
`;

export const StyledBodyText = styled(Typography)`
  font-family: ${({ theme }) => theme.secondaryFont};
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const StyledTextField = styled(TextField)`
  color: ${({ theme }) => theme.textColor};
  border: 1px solid #000;
  border-radius: 10px;
  width: 100%;
  margin-top: ${({ theme }) => theme.margin};
  padding: 15px 17px;

  & .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
    border-bottom: none;
  }
  &:hover {
    outline: none;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const StyledDivider = styled(Divider)`
  &::before,
  &::after {
    border-color: #000;
    border-top: 1px solid #000;
  }
  margin-top: ${({ theme }) => theme.margin};
  margin-bottom: ${({ theme }) => theme.margin};
  width: 100%;
  color: ${({ theme }) => theme.textColor};
`;

export const StyledGrid = styled(Grid)`
  justify-content: center;
  & > * {
    margin: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    justify-content: center;
  }
`;

export const StyledButton = styled(Button)`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 1.5em;
  max-height: 3rem;
  height: 3rem;
  width: 10rem;
  max-width: 20rem;
`;

export const StyledImage = styled.img`
  margin-right: 12px;
  width: 1.2em;
  height: 1.2em;
`;
