import styles from './LoggedInUser.module.scss';

const LoggedInUser = () => {
    return ( 
        <div className={styles.loggedInUserWrapper}>
            <span className="d-none d-md-inline-block">Jones Ferdinand</span>
            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="img-thumbnail rounded-circle" alt="jones ferdinand" />
        </div>
    );
    }
 
export default LoggedInUser;