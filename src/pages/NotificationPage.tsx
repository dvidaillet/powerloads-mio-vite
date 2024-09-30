import PagesHeader from "../components/PagesHeader/PagesHeader";
import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";

const NotificationPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader
          title="NotificationPage"
          subtitle="NotificationPage info"
        />
      </div>
    </>
  );
};

export default NotificationPage;
