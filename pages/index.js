import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PropertyDetailForm from "../components/propertyDetailForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Realmarkably Copy Generator</title>
        <meta name="description" content="rock your jaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ul>
          <Link href="/about">
            <a>about</a>
          </Link>
        </ul>
      </header>

      <main className={styles.main}>
        <h1 className="text-center text-6xl">
          <code className="text-rose-400">Realmarkably</code>
        </h1>

        <PropertyDetailForm></PropertyDetailForm>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
