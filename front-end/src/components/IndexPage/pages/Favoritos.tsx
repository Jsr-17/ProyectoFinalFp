import { Box, Typography } from "@mui/material";

export const Favoritos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          p: "10px",
          borderRadius: "15px",
          bgcolor: "#f0f0f0",
          boxShadow: "10px 7px 9px gray",
        }}
      >
        <Typography variant="h4">
          Aquí se almacenarán tus noticias preferidas
        </Typography>
      </Box>
    </Box>
  );
};
