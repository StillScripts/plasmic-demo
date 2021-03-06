import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData,
  extractPlasmicQueryData,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../utils/plasmic-init";

// Statically fetch the data needed to render Plasmic pages or components.
export const getStaticProps: GetStaticProps = async () => {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData("Hero");
  if (!plasmicData) {
    throw new Error("No Plasmic design found");
  }

  // Cache the necessary data fetched for the page
  // *extractPlasmicQueryData was not imported in this...
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].displayName} />
    </PlasmicRootProvider>
  );
  return {
    props: {
      plasmicData,
      queryCache,
      // ...
    },

    // Using incremental static regeneration, will invalidate this page
    // after 300s (no deploy webhooks needed)
    revalidate: 300,
  };
};

export interface PlasmicPageProps {
  plasmicData: ComponentRenderData;
  queryCache?: Record<string, any>;
}

const Home: NextPage<PlasmicPageProps> = (props: {
  plasmicData: ComponentRenderData;
  queryCache?: Record<string, any>;
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plasmic Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Plasmic demo!</h1>

        <p className={styles.description}>
          Below is an example of a Hero section component inspired by Apple,
          created using Plasmic. You can view a full page demo{" "}
          <Link href="/plasmic">
            <a>here</a>
          </Link>
          .
        </p>
        <div className={styles.divider}></div>

        <div className={styles.plasmic}>
          <PlasmicRootProvider
            loader={PLASMIC}
            prefetchedData={props.plasmicData}
            prefetchedQueryData={props.queryCache}
          >
            <PlasmicComponent component="Hero" />
          </PlasmicRootProvider>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/StillScripts/plasmic-demo"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default Home;
