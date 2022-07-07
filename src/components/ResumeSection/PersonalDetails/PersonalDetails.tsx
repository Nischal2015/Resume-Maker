import styles from "./PersonalDetails.module.css";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";

const PersonalDetails = (): JSX.Element => {
  return (
    <div className={styles["personal-details"]}>
      <PersonalInfo />
      <ContactInfo />
    </div>
  );
};

export default PersonalDetails;
