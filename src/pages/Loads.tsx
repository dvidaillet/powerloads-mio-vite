import { useTranslation } from "react-i18next";

const Loads = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("loads.title")}</h1>
      <p>{t("loads.description")}</p>
    </div>
  );
};

export default Loads;
