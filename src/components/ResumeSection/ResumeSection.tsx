import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AddButton } from '..';
import styles from './ResumeSection.module.css';

function ResumeSection({
  text,
  id,
  child,
}: {
  text: string;
  id: string;
  child: JSX.Element | JSX.Element[];
}) {
  const [isOpen, setOpen] = useState(false);

  const openAccordionHandler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={styles['accordion-header']}
        onClick={openAccordionHandler}
        type="button"
        aria-expanded={isOpen}
      >
        <p
          className={styles['accordion-text']}
          style={{ color: isOpen ? 'rgb(55 65 81)' : '' }}
        >
          {text}
        </p>
        <AddButton state={isOpen} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={id}
            initial="close"
            animate="open"
            exit="close"
            variants={{
              open: { opacity: 1, height: 'auto', scale: 1 },
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
}

export default ResumeSection;
