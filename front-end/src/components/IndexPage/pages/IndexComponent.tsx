import { Box, Button, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const IndexComponent = () => {
  const user = useSelector((state) => state.user.user || { name: "Usuario" });
  const { name } = user;
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#e8eaf6",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          bgcolor: "background.paper",
          boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="700"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
            },
          }}
        >
          {name}, ¡Bienvenido a tu espacio informativo personalizado!
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
            },
            lineHeight: 1.6,
          }}
        >
          Aquí encontrarás las noticias más relevantes, opiniones destacadas y
          contenidos adaptados a tus intereses. Explora, infórmate y mantente
          siempre al día con lo que realmente importa para ti.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#3f51b5",
            color: "#3f51b5",
            fontWeight: "600",
            px: 5,
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#3f51b5",
              color: "white",
              borderColor: "#3f51b5",
            },
          }}
          onClick={() => navigate("/index/noticias")}
        >
          Ir a las noticias
        </Button>
      </Box>
    </Box>
  );
};
