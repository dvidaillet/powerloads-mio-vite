import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterButton = () => (
  <Button
    variant="contained"
    color="primary"
    size="large"
    sx={{ paddingX: 7, paddingY: "10px" }}
  >
    <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
      Registrarce
    </Link>
  </Button>
);

export default RegisterButton;
