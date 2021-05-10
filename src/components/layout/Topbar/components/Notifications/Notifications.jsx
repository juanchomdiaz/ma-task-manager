import { useContext } from 'react';

import TasksContext from '@context/tasks/TasksContext';

import NotificationsIcon from '@svgs/icons/NotificationsIcon.svg';

import styles from './Notifications.module.scss';

const Notifications = () => {
  const { tasksCount } = useContext(TasksContext);

  return (
    <div className={styles.notificationsWrapper}>
      <div className={styles.countBadge}>{tasksCount}</div>
      <NotificationsIcon />
    </div>
  );
};

export default Notifications;
