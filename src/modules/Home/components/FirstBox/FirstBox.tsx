import { Box, CardMedia, Typography } from "@mui/material";

const FirstBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "500px",
        marginBottom: 1,
        marginTop: "-5px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image="../../../public/images/fondo_home_2.jpg"
        alt="icon"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          padding: "20px",
          color: "white",
          textAlign: "left",
          width: {
            xs: "100%", // Ocupa el 100% del ancho en pantallas pequeñas
            md: "50%", // Ocupa el 50% en pantallas medianas y grandes
          },
          left: {
            xs: 0, // Sin margen en pantallas pequeñas
            md: "20%", // Margen del 5% en pantallas grandes
          },
          top: "50%", // Centrar verticalmente el texto
          transform: "translateY(-50%)", // Ajustar para centrar el texto verticalmente
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Regístrate y comienza a trabajar hoy.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px" }}>
          Encuentra cargas, localiza gasolineras y recibe pagos en 24 horas,
          todo mientras gestionas tus operaciones con facilidad.
        </Typography>
      </Box>
    </Box>
  );
};

export default FirstBox;
