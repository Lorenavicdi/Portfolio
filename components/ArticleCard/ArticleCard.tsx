import styles from "./ArticleCard.module.scss";

export enum ImgPosition {
  left,
  right,
}

interface Props {
  img: string;
  alt: string;
  imgPosition: ImgPosition;
  textHeader: string;
  textTitle: string;
  textFooter: string;
}

export const ArticleCard = ({
  img,
  alt,
  imgPosition,
  textHeader,
  textTitle,
  textFooter,
}: Props) => {
  if (imgPosition === ImgPosition.right) {
    return (
      <article className={`${styles.articleCardContainer} container`}>
        <div className="row align-items-center">
          <div className="col">
            <div className="row pt-5">
              <p className={`${styles.header} border-bottom pt-5 p-0`}>
                {textHeader}
              </p>
            </div>
            <div className="row">
              <h1 className={`${styles.title} p-0 mt-0`}>{textTitle}</h1>
            </div>
            <div className="row">
              <p className={`${styles.footer} p-0`}>{textFooter}</p>
            </div>
          </div>
          <div className="col text-end">
            <img src={img} alt={alt} />
          </div>
        </div>
      </article>
    );
  }
  if (imgPosition === ImgPosition.left) {
    return (
      <article className={`${styles.articleCardContainer} container `}>
        <div className="row align-items-center ">
          <div className="col">
            <img src={img} alt={alt} />
          </div>
          <div className="col text-end">
            <div className="row pt-5 ">
              <p className={`${styles.header} border-bottom pt-5 p-0`}>
                {textHeader}
              </p>
            </div>
            <div className="row">
              <h1 className={`${styles.title} p-0 mt-0`}>{textTitle}</h1>
            </div>
            <div className="row">
              <p className={`${styles.footer} p-0`}>{textFooter}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
};
