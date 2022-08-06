import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PropertyDetailForm from "../components/propertyDetailForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Realmarkably Copy Generator</title>
        <meta name="description" content="rock your jaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}

      <h1 className="pt-64 text-6xl text-center">
        <code className="text-rose-400">Realmarkably</code>
      </h1>

      <div className="container mx-auto w-1/2" id="propertyform">
        <PropertyDetailForm></PropertyDetailForm>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
