import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import Logo from "../../assets/images/Page-1.png";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

const Hero = () => {
  return (
    <Box
      sx={{
        // marginTop: "65px",
        backgroundColor: "#f4f4fe",
        paddingTop: "50px",
        height: "115vh",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: "70px",
          //  backgroundColor: "orange"
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <Grid item xs={3}>
            <img src={mockup1} alt="mockup1" width="95%" />
          </Grid>
          <Grid
            item
            xs={5.5}
            sx={{
              backgroundColor: "#f7f7ff",
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "8px solid #414360",
              borderRadius: "15px",
              height: "340px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                maxWidth: "99%",
                maxHeight: "100%",
                // backgroundColor: "orange",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "900",
                  color: "#414360",
                }}
              >
                React Navigation
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#414360",
                  marginTop: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                Routing and navigation for Expo and React Native apps.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Button
                  sx={{
                    width: "150px",
                    height: "60px",
                    border: "3px solid #414360 ",
                    color: "#414360",
                    fontWeight: "700",
                    fontSize: "17px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#7a88d3",
                      border: "none",
                      transition:
                        "background-color, color, border 0.2s ease-in-out 0.2s",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Read Docs
                </Button>
                &nbsp;
                <Button
                  sx={{
                    width: "150px",
                    height: "60px",
                    border: "3px solid #414360 ",
                    backgroundColor: "#414360",
                    fontSize: "17px",
                    color: "white",
                    fontWeight: "700",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#7a88d3",
                      border: "none",
                      transition:
                        "background-color, color, border 0.2s ease-in-out 0.2s",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Try It
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <img src={mockup2} alt="mockup1" width="95%" />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item>
              <Box sx={{ padding: "20px" }}>
                <Typography>
                  💡 Coming from an older version? Check out our{" "}
                  <strong>migration guides.</strong>
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
