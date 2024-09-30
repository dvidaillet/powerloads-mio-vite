// import { useTranslation } from "react-i18next";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import LoadsTableComponent from "../modules/loads/components/LoadsTableComponent/LoadsTableComponent";

const LoginPage = () => {

  return (
    <>
      <PagesHeader title="loads.title" subtitle="loads.description" />
      <LoadsTableComponent />
    </>
  );
};

export default LoginPage;
