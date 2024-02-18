import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import Logo from "../../assets/images/Page-1.png";
import { Button, Typography } from "@mui/material";
import img1 from "../../assets/images/img1.jfif";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.jfif";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.jfif";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.jfif";
import img10 from "../../assets/images/img10.jfif";
import img11 from "../../assets/images/img11.png";
import img12 from "../../assets/images/img12.jfif";
import img13 from "../../assets/images/img13.png";
import img14 from "../../assets/images/img14.jfif";
import img15 from "../../assets/images/img15.jfif";
import img16 from "../../assets/images/img16.jfif";
import img17 from "../../assets/images/img17.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "none",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

const Experts = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#dadaf6",
        // paddingTop: "50px",
        height: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
        //   backgroundColor: "orange",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "16px", textAlign: "center" }}>
          React Navigation is built by <strong>Expo</strong>,{" "}
          <strong>Software Mansion</strong>, and Callstack, with contributions
          from the <strong>community</strong> and <strong>sponsors:</strong>
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "18px",
            padding: "20px",
            marginTop: "15px",
          }}
        >
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img1}
            alt="img1"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img2}
            alt="img2"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img3}
            alt="img3"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img4}
            alt="img4"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img5}
            alt="img5"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img6}
            alt="img6"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img7}
            alt="img7"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img8}
            alt="img8"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img9}
            alt="img9"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img10}
            alt="img10"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img11}
            alt="img11"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img12}
            alt="img12"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img13}
            alt="img13"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img14}
            alt="img14"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img15}
            alt="img15"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img16}
            alt="img16"
          />
          <img
            height="40px"
            style={{ borderRadius: "10%" }}
            src={img17}
            alt="img17"
          />
        </Box>

        <Typography sx={{ fontSize: "16px", textAlign: "center",  marginTop: "15px" }}>
          If React Navigation is helpful to you, consider{" "}
          <strong>supporting the project by sponsoring it 💜</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Experts;
