import React from "react";
import {
  MainHeader,
  StyledBodyText,
  StyledContainer,
  StyledTextField,
  StyledSearchIcon,
  StyledDivider,
  StyledGrid,
  StyledButton,
  StyledImage,
} from "./HomeStyles";
import { Grid } from "@mui/material";
import Xbox from "../../images/xbox-logo.png";

const Home = () => {
  return (
    <StyledContainer maxWidth="md">
      <MainHeader variant="h2" align="center">
        Destracker
      </MainHeader>
      <StyledBodyText variant="h5" align="center">
        Type your full bungie name in order to get all your Destiny 2 Stats!
      </StyledBodyText>
      <StyledContainer>
        <StyledTextField
          id="search-bar"
          variant="standard"
          placeholder="Enter your Bungie ID Here"
          InputProps={{
            style: { fontSize: 25 },
            endAdornment: <StyledSearchIcon />,
          }}
        />
      </StyledContainer>
      <StyledContainer>
        <StyledDivider>Or Use</StyledDivider>
      </StyledContainer>
      <StyledGrid container>
        <Grid item>
          <StyledButton sx={{ backgroundColor: "#00a1dd" }} variant="contained">
            BUNGIE
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton sx={{ backgroundColor: "#107c10" }} variant="contained">
            <Grid container alignItems="center">
              <StyledImage src={Xbox} alt="Xbox Button" />
              <span>XBOX</span>
            </Grid>
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton sx={{ backgroundColor: "#5A5A5A" }} variant="contained">
            STEAM
          </StyledButton>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Home;
