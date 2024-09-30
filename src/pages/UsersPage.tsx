import HomeHorizontalPanel from "../components/HomeHorizontalPanel/HomeHorizontalPanel";
import PagesHeader from "../components/PagesHeader/PagesHeader";
import UsersTableComponent from "../modules/users/components/UsersTableComponent/UsersTableComponent";

const UsersPage = () => {
  return (
    <>
      <HomeHorizontalPanel />
      <div className="app-container">
        <PagesHeader title="users.title" subtitle="users.description" />
        <UsersTableComponent />
      </div>
    </>
  );
};

export default UsersPage;
