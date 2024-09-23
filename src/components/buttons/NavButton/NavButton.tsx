// NavButton.tsx
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavButtonProps {
  to: string;
  text: string;
}

const NavButtonComponent: React.FC<NavButtonProps> = ({ to, text }) => (
  <Button sx={{ padding: "15px 35px" }}>
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="h6" fontSize={14} fontWeight={600} color="grey">
        {text}
      </Typography>
    </Link>
  </Button>
);

export default NavButtonComponent;
