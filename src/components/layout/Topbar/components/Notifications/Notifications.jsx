import NotificationsIcon from "@svgs/icons/NotificationsIcon.svg";

import styles from './Notifications.module.scss';

const Notifications = () => {
  return (
      <div className={styles.notificationsWrapper}>
          <div className={styles.countBadge}>2</div>
          <NotificationsIcon />
      </div>
  ) 
};

export default Notifications;
