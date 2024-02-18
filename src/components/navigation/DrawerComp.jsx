import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          width: "70%", // Set the width to 100% of the screen
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "70%", // Set the width to 100% of the screen
          },
        }}
      >
        <IconButton
          sx={{ top: "10px", right: "10px" }}
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>

        <Typography
          sx={{ marginLeft: "20px", color: "black" }}
          variant="contained"
        >
          GitHub <i class="fa fa-external-link" aria-hidden="true"></i>
        </Typography>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
