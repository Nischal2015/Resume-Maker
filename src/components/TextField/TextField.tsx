import styles from "./TextField.module.css";

const TextField = ({ label }: { label: string }) => {
  return (
    <div className={styles.textfield}>
      <label htmlFor="input">{label}</label>
      <input type="text" id="input" className={styles.input} />
    </div>
  );
};

export default TextField;
