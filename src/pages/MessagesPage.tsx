import PagesHeader from "../components/PagesHeader/PagesHeader";
import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";

const MessagesPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="MessagesPage" subtitle="MessagesPage info" />
      </div>
    </>
  );
};

export default MessagesPage;
