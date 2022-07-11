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
  child: JSX.Element | JSX.Element[];
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
        <p
          className={styles["accordion-text"]}
          style={{ color: isOpen ? "rgb(55 65 81)" : "" }}
        >
          {text}
        </p>
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
              open: { opacity: 1, height: "auto", scale: 1 },
              close: {
                opacity: 0,
                height: 0,
                scale: 0.95,
              },
            }}
            transition={{
              delay: 0.05,
              duration: 0.3,
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
