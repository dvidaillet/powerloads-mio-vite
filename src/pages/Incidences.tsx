import { useTranslation } from "react-i18next";

const Incidences = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("incidence.title")}</h1>
      <p>{t("incidence.description")}</p>
    </div>
  );
};

export default Incidences;
