import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("users.title")}</h1>
      <p>{t("users.description")}</p>
    </div>
  );
};

export default Users;
