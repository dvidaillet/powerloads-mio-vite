import { Box, Typography } from "@mui/material";
import RegisterButton from "../RegisterButton/RegisterButton";

type BoxSectionsInfoProps = {
  title: string;
  subtitle: string;
  imgName: string; // Solo pasamos el nombre de la imagen
  imgWidth?: string; // Tamaño opcional de la imagen (por defecto un 100%)
  imgHeight?: string; // Tamaño opcional de la imagen (por defecto 210px)
};

const BoxSectionsInfo = ({
  title,
  subtitle,
  imgName,
  imgWidth = "100%", // Valores por defecto para tamaños
  imgHeight = "210px",
}: BoxSectionsInfoProps) => {
  const baseImagePath = "/images/"; // Base de la ruta para las imágenes

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <img
        src={`${baseImagePath}${imgName}`}
        alt="icon"
        style={{ width: imgWidth, height: imgHeight }}
      />
      <Typography mt={2} variant="body2" color="primary" fontSize={24}>
        {title}
      </Typography>
      <Typography variant="body1" fontSize={22} color="grey" textAlign="center">
        {subtitle}
      </Typography>
      <RegisterButton />
    </Box>
  );
};

export default BoxSectionsInfo;
