import {  styled } from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpg";
import { Typography, Grid, Container } from "@mui/material";
import DowloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../componentes/styledButton/styledButton";


const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",


  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "70%",
    border: "0.5px solid white",

  }));

  return (
    <StyledHero >
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          {/* Avatar */}
          <Grid item xs={12} md={4}>

              <StyledImg src={avatar} />
            
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={8}>
            <Typography
              color="primary.contrastText"variant="h1"  style={{ fontFamily: "Heuvetica Neue" }} pb={1}>
             Guilherme Teodoro
            </Typography>
            <Typography color="primary.contrastText" variant="h2" style={{ marginBottom: "10px" }} pb={2}>
              I'm a Software Engineer
            </Typography>

            {/* Button Section */}
            <Grid container display={"flex"} justifyContent={"center"}  spacing={4}>
              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"} >
                <StyledButton  >
                  <DowloadIcon style={{marginRight: "2px" }}   />
                  Download CV
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                <StyledButton>
                  <EmailIcon style={{marginRight: "10px" }}  />
                  Contact me
                </StyledButton>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
