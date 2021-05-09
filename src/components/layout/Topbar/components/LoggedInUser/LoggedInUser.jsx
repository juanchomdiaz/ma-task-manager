import styles from './LoggedInUser.module.scss';

import { signIn, signOut, useSession } from 'next-auth/client';

const LoggedInUser = () => {

  const [ session, loading ] = useSession()

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
      {!session && <button onClick={(e) => {e.preventDefault(); signIn();}}>Login</button>}
    </>
  );
};

export default LoggedInUser;
