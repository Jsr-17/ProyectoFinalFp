import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

export const HeaderComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Login", path: "auth/login" },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: theme.zIndex.drawer + 2 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              fontWeight: 600,
            }}
          >
            IANotices
          </Typography>

          {isMobile ? (
            <Box>
              <Button color="inherit" onClick={() => handleMenuClick("/")}>
                Inicio
              </Button>
            </Box>
          ) : (
            <Box>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => handleMenuClick(item.path)}
                  sx={{ ml: index === 0 ? 0 : 2 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  );
};
