import { Box, Container, Typography } from "@mui/material";

export const FooterComponent = () => {
  const footerHeight = 64; // puedes ajustar este valor si cambias el tamaño

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: `${footerHeight}px`,
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        textAlign: "center",
        zIndex: 1301, 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} IANotices. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
