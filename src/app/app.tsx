import { RESUME_SECTIONS } from "../data/section";
import { Navbar, ResumeSection } from "../components";
import { v4 as uuid } from "uuid";
import styles from "./app.module.css";
import { PdfPage } from "./PdfPage";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className={styles.split}>
        <section className={styles["filler-section"]}>
          {RESUME_SECTIONS.map((section) => {
            const id = uuid();
            return (
              <ResumeSection
                text={section.name}
                id={id}
                key={id}
                child={section.component}
              />
            );
          })}
        </section>
        <PdfPage />
      </main>
    </>
  );
};

export default App;
