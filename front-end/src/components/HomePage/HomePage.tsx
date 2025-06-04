import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="3.5rem"
      width="100%"
      flexDirection={"column"}
    >
      <Box textAlign="center">
        <Typography
          component="h1"
          variant="h4"
          fontWeight="bold"
          color="primary"
          bgcolor="#f5f5f5"
          padding="3rem"
          borderRadius="12px"
          boxShadow={3}
        >
          Bienvenido al periódico de IA que mejor se adapta a tus preferencias
        </Typography>

        <Box mt={10} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              border: "2px solid black",
              paddingX: "2rem",
              paddingY: "0.75rem",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={() => navigate("/index")}
          >
            Empezar ahora
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} marginTop={"105px"}>
        <Card sx={{ minWidth: 305 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="/src/assets/paso1.png"
              alt="paso 1"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
                marginY={"10px"}
              >
                Paso 1
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "18px" }}
                textAlign={"center"}
              >
                Te registras y eliges tus intereses
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ minWidth: 305, marginInline: "34px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="/src/assets/paso2.png"
              alt="Paso 2"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
                marginY={"10px"}
              >
                Paso 2
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "18px" }}
                textAlign={"center"}
              >
                Nuestro motor de IA selecciona las noticias para ti
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ minWidth: 305 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="/src/assets/paso3.png"
              alt="Paso 3"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
                marginY={"10px"}
              >
                Paso 3
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "18px" }}
                textAlign={"center"}
              >
                Recibes varias noticias
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
