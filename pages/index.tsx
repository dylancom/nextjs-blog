import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    image: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    contentHtml: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="bg-gray-500 py-32">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-4xl font-bold">
            App publisher of entertainment and utility apps.
          </p>
        </div>
      </section>
      <section id="apps" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-8">Our Apps</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allPostsData.map(
              ({
                id,
                title,
                image,
                appStoreUrl,
                playStoreUrl,
                contentHtml,
              }) => (
                <li className="p-8 text-center rounded-2xl bg-gray-50" key={id}>
                  <Image
                    className="rounded-2xl"
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                  />
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <div
                    className="text-lg text-gray-500"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                  />
                  <div className="mt-5 space-x-4">
                    {appStoreUrl && (
                      <a href={appStoreUrl} target="_blank">
                        <Image
                          src="/images/badge-example-preferred_2x.png"
                          alt="Download on the App Store"
                          width={128}
                          height={43}
                        />
                      </a>
                    )}
                    {playStoreUrl && (
                      <a href={playStoreUrl} target="_blank">
                        <Image
                          src="/images/en_badge_web_generic.png"
                          alt="Get it on Google Play"
                          width={142}
                          height={43}
                        />
                      </a>
                    )}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
