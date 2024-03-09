import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ROUTES } from "../../Utilities/routeList";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 780);
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar color="primary" style={{ padding: "1rem 3rem" }} position="fixed">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* todo: college name or logo */}
          <Typography variant="h6">College Pharma</Typography>
          {/* menu items */}
          {isSmallScreen ? (
            <IconButton onClick={() => setSideBarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {ROUTES.map(({ title, url, id }) => (
                <Button
                  key={id}
                  variant="text"
                  onClick={() => {
                    navigate(url);
                  }}
                  color="inherit"
                >
                  {title}
                </Button>
              ))}
            </div>
          )}
        </div>
      </AppBar>
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={() => setSideBarOpen(!isSidebarOpen)}
        ModalProps={{
          style: {
            width: "50%",
            margin: 0,
          },
        }}
      >
        <IconButton onClick={() => setSideBarOpen(!isSidebarOpen)}>
          <Close />
        </IconButton>
        <List>
          {ROUTES.map(({ title, url, id }) => (
            <ListItem key={id} onClick={() => navigate(url)}>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
