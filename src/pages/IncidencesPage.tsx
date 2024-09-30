import PagesHeader from "../components/PagesHeader/PagesHeader";
import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";

const IncidencesPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="incidence.title" subtitle="incidence.description" />
      </div>
    </>
  );
};

export default IncidencesPage;
