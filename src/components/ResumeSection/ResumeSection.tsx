import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AddButton } from "..";
import styles from "./ResumeSection.module.css";

const ResumeSection = ({
  text,
  id,
  child,
}: {
  text: string;
  id: string;
  child: JSX.Element;
}) => {
  const [isOpen, setOpen] = useState(false);

  const openAccordionHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={styles["accordion-header"]}
        onClick={openAccordionHandler}
      >
        <p className={styles["accordion-text"]}>{text}</p>
        <AddButton state={isOpen} />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={id}
            initial="close"
            animate="open"
            exit="close"
            variants={{
              open: { opacity: 1, height: "auto" },
              close: {
                opacity: 0,
                height: 0,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            {child}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeSection;
