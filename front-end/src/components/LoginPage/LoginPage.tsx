import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { userService } from "../../api/services/userService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { obtainUser } from "../../store/userStore/thunk";

export const LoginPage = () => {
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const { login } = userService();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dataForm = { email, pass };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email === "" || pass === "") return;

    try {
      setLoad(true);
      const response = await login(dataForm);
      const {
        data: { user },
      } = response;
      await dispatch(obtainUser(user));
      navigate("/index");
    } catch (error) {
      setMessage(error?.response?.data.message);
    } finally {
      setLoad(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
      component="form"
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            width: "100%",
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            position: "relative",
          }}
        >
          {load ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Typography marginTop={"15px"} textAlign={"center"} color={"red"}>
                {message}
              </Typography>

              <Typography variant="h4" gutterBottom textAlign="center">
                Iniciar Sesión
              </Typography>

              <TextField
                fullWidth
                label="Correo Electrónico"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                margin="normal"
                variant="outlined"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <Button
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleLogin}
              >
                Iniciar Sesión
              </Button>

              <Typography gutterBottom textAlign="center" sx={{ mt: 2 }}>
                No tienes una cuenta, regístrate{" "}
                <Link to={"/auth/register"}>aquí</Link>
              </Typography>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};
