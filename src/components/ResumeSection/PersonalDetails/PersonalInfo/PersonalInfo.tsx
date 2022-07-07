import TextField from "../../../TextField";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={styles["personal-info"]}>
      <span>Personal Information</span>
      <div className={styles["personal-info-content"]}>
        <div className={styles.photos}>Photos</div>
        <div className={styles.info}>
          <TextField label="FullName" />
          <TextField label="Email" />
          <TextField label="Headline" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
