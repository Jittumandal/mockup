import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorModeIconDropdown from ".././theme/ColorModeIconDropdown";
import Sitemark from "./SitemarkIcon";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 0px)`,
  backdropFilter: "blur(24px)",
  borderBottom: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",        
      }}
    >
      <Container maxWidth={false} disableGutters>
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Link to="/">
              <Sitemark />
            </Link>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/BrowseAll">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                                    
                  sx={{ minWidth: 0, }}
                >
                  Browse All
                </Button>
              </Link>
              
              <Link to="/Components">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0,}}
                >
                  Components
                </Button>
              </Link>

               <Link to="/UiKits">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0,}}
                >
                 Ui Kits
                </Button>
              </Link>

               <Link to="/Templates">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0,}}
                >
                Templates
                </Button>
              </Link>

                 <Link to="/Pricing">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0,}}
                >
                Pricing
                </Button>
              </Link>

                 <Link to="/Blog">
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0}}
                >
                Blog
                </Button>
              </Link>


            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                 <Link to="/BrowseAll"><MenuItem>Browse All</MenuItem></Link>
                <Link to="/Components"><MenuItem>Components</MenuItem></Link>
                <Link to="/UiKits"><MenuItem>Ui Kits</MenuItem></Link>
                <Link to="/Templates"><MenuItem>Templates</MenuItem></Link>
                <Link to="/Pricing"><MenuItem>Pricing</MenuItem></Link>
                <Link to="/Blog"><MenuItem>Blog</MenuItem></Link>

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
