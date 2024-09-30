import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";
import PagesHeader from "../components/PagesHeader/PagesHeader";

const DashboardPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="panel.title" subtitle="panel.description" />
      </div>
    </>
  );
};

export default DashboardPage;
