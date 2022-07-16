import shallow from 'zustand/shallow';
import TextField from '../../../TextField';
import useStore from '../../../../store/usePersonalStore';
import styles from './ContactInfo.module.css';

function ContactInfo() {
  const [phone, address, postal, city] = useStore(
    (state) => [state.phone, state.address, state.postal, state.city],
    shallow,
  );
  return (
    <div className={styles['contact-info']}>
      <span>Contact Information</span>
      <div className={styles['contact-info-content']}>
        <TextField label="Phone Number" value={phone} name="phone" />
        <TextField label="Address" value={address} name="address" />
        <div className={styles['section-2by1']}>
          <TextField label="Postal Code" value={postal} name="postal" />
          <TextField label="City" value={city} name="city" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
