import Head from 'next/head';
import styles from '@assets/css/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>src/pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h3>Vercel &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
        </a>

        <a
          href="https://material-ui.com/"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h3>MUI &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>

        <a
          href="https://www.netlify.com/"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h3>Netlify &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Netlify.
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export default Home;
