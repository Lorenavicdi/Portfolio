import { BaseHeader } from "components/BaseHeader/BaseHeader";
import Head from "next/head";
import styles from "./Index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorena Vicente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseHeader />
    </div>
  );
}
