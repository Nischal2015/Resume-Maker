import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import styles from './PersonalDetails.module.css';

function PersonalDetails(): JSX.Element {
  return (
    <div className={styles['personal-details']}>
      {/* Personal Information */}
      <PersonalInfo />

      {/* Contact Information */}
      <ContactInfo />
    </div>
  );
}

export default PersonalDetails;
