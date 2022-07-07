import { RESUME_SECTIONS } from "../data/section";
import { ResumeSection } from "../components";
import { v4 as uuid } from "uuid";
import styles from "./app.module.css";
import Split from "react-split";

const App = (): JSX.Element => {
  return (
    <main>
      <Split
        direction="horizontal"
        sizes={[55, 45]}
        className={styles.split}
        gutterSize={4}
        minSize={550}
      >
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
        <section className={styles["pdf-section"]}>
          <p>
            This is the section where the pdf will be rendered based on the
            content that is provided and the template that is selected
          </p>
        </section>
      </Split>
    </main>
  );
};

export default App;
