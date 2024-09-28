import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type HeaderNameCellProps = {
  title: string;
  subtitle?: string;
};

function HeaderNameCell({ title }: HeaderNameCellProps) {
  const { t } = useTranslation();
  return (
    <Typography color="white" fontWeight={500} variant="body2">
      {t(title)}
    </Typography>
  );
}

export default HeaderNameCell;
