import { Box, Typography } from "@mui/material";

type AboutUsListItemProps = {
  text: string;
  iconSrc?: string; // Permite pasar un ícono personalizado si lo deseas
};

const AboutUsListItem = ({ text, iconSrc = "/images/icons/item.svg" }: AboutUsListItemProps) => {
  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2, // Material UI spacing (puedes usar un valor menor para mejor consistencia)
        listStyleType: "none", // Ocultar el punto de la lista
        mb: 3, // Margin bottom para separar los items
      }}
    >
      <img src={iconSrc} alt="icon" width={24} height={24} />
      <Typography color="white" fontSize={24} fontWeight={300}> {/* Hacer el texto más fino */}
        {text}
      </Typography>
    </Box>
  );
};

export default AboutUsListItem;
