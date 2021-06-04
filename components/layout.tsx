import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Companjen Apps";
export const siteTitle = "Companjen Apps";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="App publisher of entertainment and utility apps."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={utilStyles.container}>
          {home ? (
            <>
              <h1 className={utilStyles.headingMd}>{name}</h1>
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingMd}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={utilStyles.container}>
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
