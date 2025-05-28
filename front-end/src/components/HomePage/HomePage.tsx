import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const HomePage = () => {
  const [opiniones, setOpiniones] = useState([
    "Excelente periódico, siempre me recomienda lo que me gusta.",
    "Me encanta cómo adapta las noticias a mis intereses.",
    "Podrían mejorar la sección de deportes, pero en general es genial.",
  ]);
  const [comentario, setComentario] = useState("");

  const enviarOpinion = () => {
    if (comentario.trim()) {
      setOpiniones([comentario, ...opiniones]);
      setComentario("");
    }
  };

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
              height="100"
              image="/src/assets/react.svg"
              alt="green iguana"
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
              height="100"
              image="/src/assets/react.svg"
              alt="green iguana"
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
              height="100"
              image="/src/assets/react.svg"
              alt="green iguana"
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
      <Box marginTop={"8px"} marginBottom={"75px"} minWidth={"85%"}>
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: "#f9f9f9",
            borderRadius: "16px",
            boxShadow: 3,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign={"center"}
            marginBottom={"25px"}
          >
            Opiniones de nuestros lectores
          </Typography>

          <TextField
            label="Deja tu opinión"
            multiline
            fullWidth
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Box display={"flex"} justifyContent={"end"}>
            <Button variant="contained" onClick={enviarOpinion}>
              Enviar
            </Button>
          </Box>

          <List sx={{ mt: 4 }}>
            {opiniones.map((op, idx) => (
              <React.Fragment key={idx}>
                <ListItem sx={{ py: 1, my: 2, textAlign: "center" }}>
                  {op}
                </ListItem>
                {idx < opiniones.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
