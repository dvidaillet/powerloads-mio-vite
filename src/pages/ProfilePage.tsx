import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";
import PagesHeader from "../components/PagesHeader/PagesHeader";

const ProfilePage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="ProfilePage" subtitle="Profile info" />
      </div>
    </>
  );
};

export default ProfilePage;
