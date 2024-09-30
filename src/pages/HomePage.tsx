import PagesHeader from "../components/PagesHeader/PagesHeader";
import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";

const HomePage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <PagesHeader title="home.title" subtitle="home.description" />
    </>
  );
};

export default HomePage;
