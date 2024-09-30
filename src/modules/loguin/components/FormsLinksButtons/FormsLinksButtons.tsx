// NavButton.tsx
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavButtonProps {
  to: string;
  text: string;
}

const FormsLinksButtons: React.FC<NavButtonProps> = ({ to, text }) => (
  <Button color="inherit">
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography fontWeight={600} fontSize={14} color="black">
        {text}
      </Typography>
    </Link>
  </Button>
);

export default FormsLinksButtons;
