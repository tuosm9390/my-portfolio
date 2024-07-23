import About from "@/components/contents/about/about";
import Archive from "@/components/contents/archive/archive";
import Project from "@/components/contents/project/project";
import Skills from "@/components/contents/skills/skills";
import Layout from "@/components/layout/Layout";
import { useScrollContext } from "@/components/ScrollContext";
import styles from "@/styles/Home.module.css";
import { useRef, type ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const { aboutRef, skillsRef, archiveRef, projectRef } = useScrollContext();

  return (
    <main className={styles.main}>
      <article
        ref={aboutRef}
        id="aboutSection"
      >
        <About />
      </article>
      <article
        ref={skillsRef}
        id="skillsSection"
      >
        <Skills />
      </article>
      <article
        ref={archiveRef}
        id="archiveSection"
      >
        <Archive />
      </article>
      <article
        ref={projectRef}
        id="projectSection"
      >
        <Project />
      </article>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
