import { IconButton, Badge } from "@mui/material";
import { Link } from "react-router-dom";

interface NavIconButtonProps {
  to: string;
  IconComponent: React.ElementType; // Opción para ícono
  notification?: string; // Opción para imagen
  text: string;
}

const NavIconButton = ({
  to,
  text,
  notification,
  IconComponent,
}: NavIconButtonProps) => (
  <IconButton
    title={text}
    sx={{
      borderRadius: "8px",
      marginX: "3px",
      height: "38px",
      width: "38px",
      backgroundColor: "#f5e4e4", // Rosado claro
      boxShadow: "0 2px 4px rgba(224, 75, 100, 0.808)",
      "&:hover": {
        backgroundColor: "#F8BBD0", // Un tono más oscuro en hover
        boxShadow: "0 0px 0px rgba(206, 33, 62, 0.808)",
      },
    }}
  >
    <Badge badgeContent={notification} color="error">
      <Link to={to}>
        <IconComponent
          color="primary"
          sx={{ width: "24px", height: "24px", marginTop: "5px" }}
        />
      </Link>
    </Badge>
  </IconButton>
);

export default NavIconButton;
