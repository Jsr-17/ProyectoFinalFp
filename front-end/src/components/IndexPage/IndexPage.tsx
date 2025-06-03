import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router";

export const IndexPage = () => {
  const drawerWidth = 240;
  const navigate = useNavigate();

  const menuItems = [
    { label: "Index", path: "" },
    { label: "Noticias", path: "noticias" },
    { label: "Favoritos", path: "favoritos" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid #ddd",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ marginX: 2 }}>
            Menú
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => navigate(item.path)}
              sx={{
                paddingX: 3,
                [`&:hover`]: { cursor: "pointer" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#fafafa",
          minHeight: "75vh",
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            backgroundColor: "#fafafa",
            minHeight: "75vh",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
