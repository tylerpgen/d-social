import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  position: sticky;
  max-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
