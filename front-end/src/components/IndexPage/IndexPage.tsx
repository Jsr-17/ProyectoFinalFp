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

export const IndexPage = () => {
  const drawerWidth = 240;
  const menuItems = ["Inicio", "Noticias", "Opiniones", "Favoritos", "Ajustes"];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Menú lateral */}
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
          {menuItems.map((text, index) => (
            <ListItem button key={index} sx={{ paddingX: 3 }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Bienvenido al Periódico de IA
        </Typography>
        <Typography>
          Aquí aparecerán tus noticias personalizadas, opiniones destacadas y
          más.
        </Typography>
      </Box>
    </Box>
  );
};
