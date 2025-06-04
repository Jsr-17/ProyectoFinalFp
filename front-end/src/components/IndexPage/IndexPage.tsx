import {
  Box,
  CssBaseline,
  Drawer,
  Fab,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

export const IndexPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Index", path: "" },
    { label: "Noticias", path: "noticias" },
    { label: "Favoritos", path: "favoritos" },
  ];

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Menú
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              navigate(item.path);
              if (isMobile) setMobileOpen(false);
            }}
            sx={{
              paddingX: 3,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", width: "100%", overflowX: "hidden" }}>
      <CssBaseline />

      {isMobile && (
        <Fab
          color="primary"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            bottom: 80,
            left: 16,
            zIndex: theme.zIndex.drawer + 2,
          }}
        >
          <HomeIcon />
        </Fab>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid #ddd",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: "100%",
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
