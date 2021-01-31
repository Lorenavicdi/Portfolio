import styles from "./MainTitle.module.scss";

export const MainTitle = () => {
  return (
    <header className={`${styles.mainTitleContainer} container`}>
      <div className="row">
        <div className={`col text-center`}>
          <h1 className={`${styles.header} px-5`}>¡Hola!</h1>
        </div>
      </div>
      <div className="row m-auto w-75 px-5">
        <div className="col text-center pt-4">
          <p className={styles.mainText}>
            Soy una diseñadora UX/UI y psicóloga en continuo desarrollo dedicada
            a la búsqueda de mejorar nuestras vidas a través de productos
            digitales.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center pt-4">
          <p className={styles.containerFooter}>
            ECHA UN VISTAZO A MIS PROYECTOS :)
          </p>
        </div>
      </div>
    </header>
  );
};
