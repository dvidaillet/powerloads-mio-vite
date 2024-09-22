// import { useTranslation } from "react-i18next";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import UsersTableComponent from "../modules/users/components/UsersTableComponent/UsersTableComponent";

const UsersPage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <PagesHeader title="users.title" subtitle="users.description" />
      <UsersTableComponent />
    </>
  );
};

export default UsersPage;
