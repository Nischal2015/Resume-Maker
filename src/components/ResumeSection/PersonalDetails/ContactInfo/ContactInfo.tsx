import TextField from "../../../TextField";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <span>Contact Information</span>
      <div className={styles["contact-info-content"]}>
        <TextField label="Phone Number" />
        <TextField label="Address" />
        <div className={styles["section-2by1"]}>
          <TextField label="Postal Code" />
          <TextField label="City" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
