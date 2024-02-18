import React, { useState } from "react";
import LightMode from "../../assets/images/light-mode.png";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Ctrl from "../../assets/images/icons8-ctrl-48.png";
import K from "../../assets/images/Group 2 (3).png";
import arrow1 from "../../assets/images/arrow (1).png";
import algoliaImage from "../../assets/images/Algolia_logo_full_blue.svg";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./DrawerComp";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Light } from "@mui/icons-material";

const NavigationBar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const StyledToolbar = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffff",
  }));
  const pages = ["Docs", "Blog", "Help", "6.x"];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#f5f6f7",

    boxShadow: 24,

    // p: 4,
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "grey",
    // height: "400",
    textAlign: "center",
    padding: "20px",
  }));

  const CustomStyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#ffff",
    marginTop: "20px",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Stack direction="row" alignItems="center" gap={1}>
            <img src={Logo} alt="Logo" height={35} />
            <Typography fontWeight={600} color="black">
              React Navigation
            </Typography>

            <List component="nav" sx={{ display: "flex", color: "black" }}>
              {pages.map((page, index) => (
                <ListItem key={index}>
                  <ListItemText
                    color="black"
                    primary={page}
                    sx={{ fontWeight: 700 }}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>

          <Stack direction="row" alignItems="center" gap={2}>
            <Typography
              marginLeft="auto"
              color="black"
              variant="contained"
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              GitHub <i class="fa fa-external-link" aria-hidden="true"></i>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <img src={LightMode} alt="LightMode" width="25px" />
            </Box>

            <TextField
              onClick={(e) => setSearchBar(true)}
              size="small"
              placeholder="search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={Ctrl} alt="ctrlIcon" height={30} />
                    <img src={K} alt="ctrlIcon" height={30} />
                  </InputAdornment>
                ),
              }}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                width: "200px",
              }}
            />
          </Stack>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              color: "black",
            }}
          >
            <SearchIcon color="black" />
          </Box>
        </StyledToolbar>
      </AppBar>

      <Modal
        open={searchBar}
        onClose={(e) => setSearchBar(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ marginTop: "20px", width: "450px", marginLeft: "25px" }}
            placeholder="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <StyledBox>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No search Result
            </Typography>
          </StyledBox>
          <CustomStyledBox>
            <Stack direction="row">
              <img src={arrow1} alt="arrow 1" />
              <Typography id="modal-modal-description" variant="p">
                to select
              </Typography>
              <img src={arrow1} alt="arrow 1" />
              <img src={arrow1} alt="arrow 1" />

              <Typography id="modal-modal-description" variant="p">
                to navigate
              </Typography>
              <img src={arrow1} alt="arrow 1" />

              <Typography id="modal-modal-description" variant="p">
                to close
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography id="modal-modal-description" variant="p">
                search by
              </Typography>
              <img src={algoliaImage} alt="algolia Image" height={19} />
            </Stack>
          </CustomStyledBox>
        </Box>
      </Modal>
    </>
  );
};
export default NavigationBar;
