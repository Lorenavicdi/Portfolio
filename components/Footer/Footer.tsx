import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.footerContainer} container-fluid border-top`}>
      <div className="row text-end align-items-end mx-5">
        <div className="col">
          <h2 className={`${styles.header} pt-5 mt-5`}>¿Hablamos?</h2>
          <nav className={`${styles.navbar} navbar-expand row`}>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item ps-5 pb-3">
                <a href="">LINKEDIN</a>
              </li>
              <li className="nav-item ps-5 pb-3">
                <a href="">BEHANCE</a>
              </li>
              <li className="nav-item ps-5 pb-3">
                <a href="">INSTAGRAM</a>
              </li>
              <li className="nav-item ps-5 pb-3">
                <a href="">TWITTER</a>
              </li>
              <li className="nav-item ps-5 pb-3">
                <a href="">EMAIL</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`col`}>
          <p className={`${styles.developer} px-5`}>
            DESARROLLO WEB:{" "}
            <a className={`${styles.navbar}`} href="">
              ROBERTO ÁLVAREZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
