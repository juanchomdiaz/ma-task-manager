import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className={styles.sidebarTop}>
          <a href="/" className="d-flex text-white text-decoration-none">
            <img src="images/logo.jpg" className={`${styles.logo} rounded-circle`} />
            <span className={`${styles.brandName} d-none d-sm-inline`}>Mi Águila</span>
          </a>
        </div>
        <div className="sidebarMenu">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house"></i>
                <span className="ms-1 d-none d-sm-inline">Inicio</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table"></i>
                <span className="ms-1 d-none d-sm-inline">Usuarios</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Tareas</span>
              </a>
            </li>
          </ul>

          <ul className="nav nav-pills position-absolute bottom-0 d-flex flex-column">
            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-cog"></i>
                <span className="ms-1 d-none d-sm-inline">Configuración</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


