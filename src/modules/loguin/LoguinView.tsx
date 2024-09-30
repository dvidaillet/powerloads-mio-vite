import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const LoguinView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: "auto",
        mt: 10,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Correo electrónico"
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Contraseña"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Iniciar sesión
        </Button>
      </form>
    </Box>
  );
};

export default LoguinView;
