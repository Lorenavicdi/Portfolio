import styles from "./BaseHeader.module.scss";

export const BaseHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <p className={`p-5 ${styles.lorena}`}>
          Proximamente Lorena's portfolio
        </p>
      </div>
    </div>
  );
};
