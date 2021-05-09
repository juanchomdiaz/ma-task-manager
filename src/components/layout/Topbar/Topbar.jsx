import Search from "./components/Search";
import Notifications from "./components/Notifications";
import LoggedInUser from "./components/LoggedInUser";

import styles from "./Topbar.module.scss";

const Topbar = ({ pageTitle }) => {
  return (
    <div className={`${styles.topbarWrapper} d-flex`}>
      <div className="p-2 flex-grow-1">
        <h1>{pageTitle}</h1>
      </div>
      <div className="p-2">
        <Search />
      </div>
      <div className="p-2">
        <Notifications />
      </div>
      <div className="p-2">
        <LoggedInUser />
      </div>
    </div>
  );
};

export default Topbar;
