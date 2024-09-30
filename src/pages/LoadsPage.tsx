import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import LoadsTableComponent from "../modules/loads/components/LoadsTableComponent/LoadsTableComponent";

const LoadsPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="loads.title" subtitle="loads.description" />
        <LoadsTableComponent />
      </div>
    </>
  );
};

export default LoadsPage;
