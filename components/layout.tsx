import Head from "next/head";
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
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            {home ? (
              <>
                <h1 className="text-xl font-bold">{name}</h1>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">
                  <Link href="/">
                    <a className="">{name}</a>
                  </Link>
                </h2>
              </>
            )}
            <nav>
              <ul className="flex space-x-3">
                <li>
                  <a href="/#apps">Apps</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="container mx-auto px-4">
          <div className="">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </div>
      )}
      <footer className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <p>
            <a href="mailto:info@companjenapps.com">info@companjenapps.com</a>
          </p>
          <p>
            <small>© 2021 Companjen Apps B.V.</small>
          </p>
        </div>
      </footer>
    </div>
  );
}
