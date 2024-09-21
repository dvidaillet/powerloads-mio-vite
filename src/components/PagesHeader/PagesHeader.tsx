import { Grid2, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type PagesHeaderProps = {
  title: string;
  subtitle?: string;
};

function PagesHeader({ title, subtitle }: PagesHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <Grid2 textAlign={"center"} marginY={3}>
        <Typography
          color="primary"
          fontWeight={600}
          variant="h4"
          marginBottom={2}
        >
          {t(title)}
        </Typography>
        <Typography variant="body1">{t(subtitle || "")}</Typography>
      </Grid2>
    </>
  );
}

export default PagesHeader;
