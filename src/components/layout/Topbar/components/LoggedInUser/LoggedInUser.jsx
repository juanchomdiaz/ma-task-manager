import styles from './LoggedInUser.module.scss';

import { useSession } from 'next-auth/client';

const LoggedInUser = () => {

  const [ session ] = useSession();

  return (
    <>
      {session && (
        <div className={styles.loggedInUserWrapper}>
          <span className="d-none d-md-inline-block">{session.user.name}</span>
          <img
            src={session.user.image}
            className="img-thumbnail rounded-circle"
            alt={session.user.name}
          />
        </div>
      )}
    </>
  );
};

export default LoggedInUser;
