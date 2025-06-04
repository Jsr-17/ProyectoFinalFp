import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router";

export const HeaderComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Login", path: "/login" },
  ];

  // Toggle drawer open/close
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Manejar click en item: navega y cierra drawer
  const handleMenuClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* AppBar fijo */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: theme.zIndex.drawer + 2 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            IANotices
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  variant="outlined"
                  sx={{ mx: 1 }}
                  onClick={() => handleMenuClick(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (menú móvil) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          "& .MuiDrawer-paper": { width: 250 },
        }}
      >
        <Box role="presentation" sx={{ width: 250 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleMenuClick(item.path)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Espacio para que el contenido no quede debajo del header fijo */}
      <Toolbar />

      {/* Aquí va tu contenido principal, por ejemplo: */}
      <Box sx={{ p: 3 }}>
        <Typography variant="body1">
          Aquí va el contenido principal. ¡Ya no estará pegado al header!
        </Typography>
      </Box>
    </>
  );
};
