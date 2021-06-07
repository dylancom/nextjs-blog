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
              <ul className="flex space-x-6 text-gray-200">
                {[
                  ["Apps", "#apps"],
                  ["Contact", "#contact"],
                ].map(([title, url]) => (
                  <li>
                    <a
                      className="text-base font-medium transition-colors duration-200 hover:text-white"
                      href={url}
                    >
                      {title}
                    </a>
                  </li>
                ))}
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
      <footer id="contact" className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-3">
            <a href="mailto:info@companjenapps.com">info@companjenapps.com</a>
          </p>
          <p className="text-gray-500">
            <small>© {new Date().getFullYear()} Companjen Apps B.V.</small>
          </p>
        </div>
      </footer>
    </div>
  );
}
