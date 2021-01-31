import { ArticleCard, ImgPosition } from "components/ArticleCard/ArticleCard";
import { BaseHeader } from "components/BaseHeader/BaseHeader";
import { Footer } from "components/Footer/Footer";
import { MainTitle } from "components/MainTitle/MainTitle";
import Head from "next/head";
import styles from "./Index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorena Vicente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.middleLine}></div>
      <BaseHeader />
      <MainTitle />
      <div className={styles.firstArticle}>
        <ArticleCard
          img="./animaloo.png"
          alt="Pareja adopta un nuevo animal"
          imgPosition={ImgPosition.right}
          textHeader="DISEÑO UX/UI - TRABAJO FINAL DE GRADO"
          textTitle="Animaloo"
          textFooter="Una app para fomentar la tenencia responsable de mascotas"
        />
      </div>
      <div className={styles.article}>
        <ArticleCard
          img="./sleepwell.png"
          alt="Noche apacible"
          imgPosition={ImgPosition.left}
          textHeader="DISEÑO UI - PROTECTO PERSONAL"
          textTitle="Sleepwell"
          textFooter="Concepto de interfaz para una app de monitorización del sueño."
        />
      </div>
      <div className={styles.article}>
        <ArticleCard
          img="./synstsia.png"
          alt="Persona usando una app para escuchar musica"
          imgPosition={ImgPosition.right}
          textHeader="DISEÑO UI - PROYECTO PERSONAL"
          textTitle="Synstsia"
          textFooter="Concepto de interfaz para un reproductor digital de música."
        />
      </div>
      <div className={styles.article}>
        <ArticleCard
          img="./miscelanea.png"
          alt="Tablet con lapiz para dibujar"
          imgPosition={ImgPosition.left}
          textHeader="OTROS"
          textTitle="Miscelánea"
          textFooter="Otros proyectos no relacionados con UX/UI"
        />
        <div className={`${styles.article} pt-5 px-0 pb-4`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
