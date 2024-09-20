import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
    </div>
  );
};

export default Users;
