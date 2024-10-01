import { Box, Typography } from "@mui/material";
import RegisterButton from "../RegisterButton/RegisterButton";

type BoxSectionsInfoProps = {
  title: string;
  subtitle: string;
  urlImg: string;
};

const BoxSectionsInfo = ({ title, subtitle, urlImg }: BoxSectionsInfoProps) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap={3}
  >
    <img src={urlImg} alt="icon" style={{ width: "210%", height: "210px" }} />
    <Typography mt={2} variant="body2" color="primary" fontSize={24}>
      {title}
    </Typography>
    <Typography variant="body1" fontSize={22} color="grey" textAlign="center">
      {subtitle}
    </Typography>
    <RegisterButton />
  </Box>
);

export default BoxSectionsInfo;
