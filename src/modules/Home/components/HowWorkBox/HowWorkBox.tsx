import { Box, Typography } from "@mui/material";

type HowWorkBoxProps = {
  text: string;
  imgName: string; // Solo pasamos el nombre de la imagen
  imgWidth?: string; // Tamaño opcional de la imagen (por defecto un 100%)
  imgHeight?: string; // Tamaño opcional de la imagen (por defecto 210px)
};

const HowWorkBox = ({
  text,
  imgName,
  imgWidth = "100%", // Valores por defecto para tamaños
  imgHeight = "125px",
}: HowWorkBoxProps) => {
  const baseImagePath = "/images/"; // Base de la ruta para las imágenes

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap={3}
      marginBottom={4}
    >
      <img
        src={`${baseImagePath}${imgName}`}
        alt="icon"
        style={{ width: imgWidth, height: imgHeight }}
      />
      <Typography fontSize={22} textAlign="center">
        {text}
      </Typography>
    </Box>
  );
};

export default HowWorkBox;
