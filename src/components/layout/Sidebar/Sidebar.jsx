import Link from "next/link";
import { useRouter } from "next/router";

import HomeIcon from "@svgs/icons/HomeIcon.svg";
import UsersIcon from "@svgs/icons/UsersIcon.svg";
import TasksIcon from "@svgs/icons/TasksIcon.svg";
import SettingsIcon from "@svgs/icons/SettingsIcon.svg";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className={styles.sidebarTop}>
          <Link href="/">
            <a className="d-flex text-white text-decoration-none">
              <img
                src="images/logo.jpg"
                className={`${styles.logo} rounded-circle`}
              />
              <span className={`${styles.brandName} d-none d-sm-inline`}>
                Mi Águila
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.sidebarMenu}> 
          <ul className="nav d-flex flex-column align-items-center align-items-sm-start">
            <li className={`nav-link ${asPath === "/" ? styles.active : ""}`}>
              <Link href="/"> 
                <a>
                  <HomeIcon />
                  <span className="d-none d-sm-inline">Inicio</span>
                </a>
              </Link>
            </li>
            <li
              className={`nav-link ${asPath === "/usuarios" ? styles.active : ""}`}
            >
              <Link href="/usuarios">
                <a>
                  <UsersIcon />
                  <span className="d-none d-sm-inline">Usuarios</span>
                </a>
              </Link>
            </li>
            <li className={`nav-link ${asPath === "/tareas" ? styles.active : ""}`}>
              <Link href="/tareas">
                <a>
                  <TasksIcon />
                  <span className="d-none d-sm-inline">Tareas</span>
                </a>
              </Link>
            </li>
            <li
              className={`nav-link ${
                asPath === "/configuracion" ? styles.active : ""
              }`}
            >
              <Link href="/configuracion">
                <a>
                  <SettingsIcon />
                  <span className="d-none d-sm-inline">Configuración</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
