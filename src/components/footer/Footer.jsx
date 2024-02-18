import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "none",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7ff",
        height: "40vh",
        padding: "70px",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Docs
            </Typography>
            <Link href="#" color="inherit" display="block">
              Getting Started
            </Link>
            <Link href="#" color="inherit" display="block">
              Building your own Navigator
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Support
            </Typography>

            <List>
              <ListItem disablePadding>
                <ListItemText primary="Chat in our Discord channel" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Get help on Stack Overflow" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Request a feature on Canny" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Report a bug on GitHub" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Social
            </Typography>
            <Link>
              <ListItem disablePadding>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="GitHub" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Twitter" />
                <ListItemIcon>
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </ListItemIcon>
              </ListItem>
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Built with
            </Typography>
            <Link href="#" color="inherit" display="block">
              Docusaurus
            </Link>
            <Link href="#" color="inherit" display="block">
              GitHub Pages
            </Link>
            <Link href="#" color="inherit" display="block">
              Netlify
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
