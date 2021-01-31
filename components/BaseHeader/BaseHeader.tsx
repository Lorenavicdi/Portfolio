import styles from "./BaseHeader.module.scss";

export const BaseHeader = () => {
  return (
    <nav
      className={`container-fluid position-fixed ${styles.baseHeaderContainer}`}
    >
      <div className="row pt-4 ">
        <div className="col mx-5 px-2">
          <p className={`${styles.title} px-5`}>Lorena Vicente</p>
        </div>
        <div className="col-auto mx-5 px-4">
          <div className={` navbar-expand ${styles.navbar} `}>
            <ul className="navbar-nav ">
              <li className="nav-item mx-2 px-4">
                <a className=" nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item  mx-2 px-4">
                <a className="nav-link" href="#">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item  mx-2 px-4">
                <a className=" nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
