import TextField from "../../../TextField";
import shallow from "zustand/shallow";
import useStore from "../../../../store/usePersonalStore";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  const [fullname, email, headline] = useStore(
    (state) => [state.fullname, state.email, state.headline],
    shallow
  );

  return (
    <div className={styles["personal-info"]}>
      <span>Personal Information</span>
      <div className={styles["personal-info-content"]}>
        <div className={styles.photos}>Photos</div>
        <div className={styles.info}>
          <TextField label="FullName" value={fullname} name="fullname" />
          <TextField label="Email" value={email} name="email" />
        </div>
      </div>
      <TextField label="Headline" value={headline} name="headline" />
    </div>
  );
};

export default PersonalInfo;
