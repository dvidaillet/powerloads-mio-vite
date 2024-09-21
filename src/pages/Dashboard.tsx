import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("panel.title")}</h1>
      <p>{t("panel.description")}</p>
    </div>
  );
};

export default Dashboard;
