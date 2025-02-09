import { Button, styled } from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpg";
import { Typography, Grid, Container } from "@mui/material";
import DowloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "80%",
    maxWidth: "300px", // Limita a largura da imagem
    display: "block",
    margin: "0 auto", // Centraliza a imagem
  }));

  return (
    <StyledHero >
      <Container>
        <Grid container spacing={4} >
          {/* Avatar */}
          <Grid item xs={8} sm={4}>
            <StyledImg src={avatar} />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} sm={8}>
            <Typography
              color="primary"
              variant="h1"
              style={{ fontFamily: "Heuvetica Neue" }}
            >
             Guilherme Teodoro
            </Typography>
            <Typography color="primary" variant="h2" >
              I'm a Software Engineer
            </Typography>

            {/* Button Section */}
            <Grid container display={"flex"} justifyContent={"center"} >
              <Grid item xs={12} sm={4} display={"flex"} justifyContent={"center"}>
                <Button variant="contained" color="primary" startIcon={<DowloadIcon />}>
                  Download CV
                </Button>
              </Grid>
              <Grid item xs={12} sm={4} display={"flex"} justifyContent={"center"}>
                <Button variant="contained" color="primary" startIcon={<EmailIcon />}>
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
