import styles from "./PercentBar.module.css";

const PercentBar = ({ heading, width }: { heading: string; width: string }) => {
  return (
    <div className={styles.percentbar}>
      <span>{heading}</span>
      <div className={styles.container}>
        <div
          style={{
            backgroundColor: "rgb(31 41 55)",
            width: `${width}%`,
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default PercentBar;
