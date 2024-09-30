import PagesHeader from "../components/PagesHeader/PagesHeader";
import LoadsTableComponent from "../modules/loads/components/LoadsTableComponent/LoadsTableComponent";

const LoadsPage = () => {
  return (
    <>
      <PagesHeader title="loads.title" subtitle="loads.description" />
      <LoadsTableComponent />
    </>
  );
};

export default LoadsPage;
