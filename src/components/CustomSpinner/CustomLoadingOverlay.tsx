// CustomLoadingOverlay.tsx
import { GridOverlay } from "@mui/x-data-grid";
import { CircularProgress, Box } from "@mui/material";

const CustomLoadingOverlay = () => {
  return (
    <GridOverlay>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </GridOverlay>
  );
};

export default CustomLoadingOverlay;
