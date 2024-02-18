import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import Logo from "../../assets/images/Page-1.png";
import { Button, Typography } from "@mui/material";
import smile from "../../assets/images/react.svg";
import mobile from "../../assets/images/home_devices.svg";
import home from "../../assets/images/home_extend.svg";
import stars from "../../assets/images/home_star.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "none",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

const CallStack = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#25292e",
        paddingTop: "50px",
        height: "115vh",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: "70px",
          // backgroundColor: "orange",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "#25292e", padding: "20px" }}>
              <img height="40px" src={smile} alt="smile face image" />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white", marginTop: "25px" }}
                graphy
                var
              >
                Easy to Use
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", marginTop: "15px" }}
              >
                Start quickly with built-in navigators that deliver a seamless
                out-of-the-box experience.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "#25292e", padding: "20px" }}>
              <img height="60px" src={mobile} alt="smile face image" />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white", marginTop: "20px" }}
                graphy
                var
              >
                Components built for iOS and Android
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", marginTop: "15px" }}
              >
                Platform-specific look-and-feel with smooth animations and
                gestures.
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "#25292e", padding: "20px" }}>
              <img src={stars} height="40px" alt="smile face image" />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white", marginTop: "25px" }}
                graphy
                var
              >
                Completely customizable
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", marginTop: "15px" }}
              >
                If you know how to write apps using JavaScript you can customize
                any part of React Navigation.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "#25292e", padding: "20px" }}>
              <img src={home} height="40px" alt="smile face image" />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white", marginTop: "25px" }}
                graphy
                var
              >
                Extensible platform
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "white", marginTop: "15px" }}
              >
                React Navigation is extensible at every layer— you can write
                your own navigators or even replace the user-facing API.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CallStack;
