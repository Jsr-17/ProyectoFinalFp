import { TextField } from "@mui/material";
import { Box, Button, Container, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SelectMultivalor from "../formsComponents/SelectMultivalue";
import { userService } from "../../../api/services/userService";

type FormData = {
  nombre: string;
  correo: string;
  contrasenya: string;
  confirmContrasenya: string;
  temasInteres: string[];
};

type registerUser = {
  email: string;
  pass: string;
  name: string;
  preferences: string[];
};

export const RegisterPage = () => {
  const { registerUser } = userService();
  const {
    register,
    formState: { errors },
    watch,
    control,
    handleSubmit,
  } = useForm<FormData>();

  const handleSubmitt = async (data: registerUser) => {
    try {
      const response = await registerUser(data);
      console.log(response);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const dataSend = (data: FormData) => {
    const { contrasenya, correo, nombre, temasInteres } = data;

    const dataRegister: registerUser = {
      email: correo,
      pass: contrasenya,
      name: nombre,
      preferences: temasInteres,
    };
    handleSubmitt(dataRegister);
  };

  const password = watch("contrasenya");

  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        textAlign="center"
        sx={{ my: "40px" }}
      >
        Registro del usuario
      </Typography>
      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit(dataSend)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Nombre"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />
          <TextField
            label="Correo"
            type="email"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Correo no válido",
              },
            })}
            error={!!errors.correo}
            helperText={errors.correo?.message}
          />

          <TextField
            label="Contraseña"
            type="password"
            {...register("contrasenya", {
              required: "La contraseña es obligatoria",
              pattern: {
                value: /^.{9,}$/,
                message: "La contraseña debe tener al menos 9 caracteres",
              },
            })}
            error={!!errors.contrasenya}
            helperText={errors.contrasenya?.message}
          />

          <TextField
            label="Repetir contraseña"
            type="password"
            {...register("confirmContrasenya", {
              required: "Repite la contraseña",
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
            error={!!errors.confirmContrasenya}
            helperText={errors.confirmContrasenya?.message}
          />

          <Controller
            name="temasInteres"
            control={control}
            defaultValue={[]}
            rules={{
              validate: (value) =>
                value.length > 0 || "Selecciona al menos un tema",
            }}
            render={({ field }) => (
              <SelectMultivalor
                opciones={[
                  "Política",
                  "Economía",
                  "Tecnología",
                  "Cultura",
                  "Deportes",
                  "Internacional",
                  "Salud",
                  "Opinión",
                  "Ciencia",
                  "Educación",
                  "Entretenimiento",
                  "Sociedad",
                  "Medio Ambiente",
                  "Viajes",
                  "Moda",
                ]}
                value={field.value}
                onChange={field.onChange}
                error={!!errors.temasInteres}
                helperText={errors.temasInteres?.message}
              />
            )}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </Container>
    </>
  );
};
