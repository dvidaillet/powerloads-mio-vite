// import { useTranslation } from "react-i18next";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import LoadsTableComponent from "../modules/loads/components/LoadsTableComponent/LoadsTableComponent";

const LoadsPage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <PagesHeader title="loads.title" subtitle="loads.description" />
      <LoadsTableComponent />
    </>
  );
};

export default LoadsPage;
