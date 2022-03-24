import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Partytown } from "@builder.io/partytown/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Partytown experiment</title>
      </Head>

      <main className={styles.main}>
        <h2>We have two pages</h2>
        <p>
          try running lighthouse test on both link, with party time there
          should not be a message for <i>`unused javascript`</i> related to GTM.
          <br />
          also checkout the console there should be message shown from gtm.
        </p>
        <ul>
          <li>
            <Link href="/with">
              <a style={{ textDecoration: "underline" }}>
                GTM <b>with</b> partytown
              </a>
            </Link>
          </li>
          <br />
          <li>
            <Link href="/without">
              <a style={{ textDecoration: "underline" }}>
                GTM <b>without</b> partytown
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
