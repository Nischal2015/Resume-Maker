import shallow from 'zustand/shallow';
import { useState } from 'react';
import TextField from '../../../TextField';
import useStore from '../../../../store/usePersonalStore';
import styles from './PersonalInfo.module.css';

function PersonalInfo() {
  const [fullname, email, headline] = useStore(
    (state) => [state.fullname, state.email, state.headline],
    shallow,
  );

  const [preview, setPreview] = useState<string | null>(null);
  return (
    <div className={styles['personal-info']}>
      <span>Personal Information</span>
      <div className={styles['personal-info-content']}>
        <label htmlFor="profile" className={styles.photos}>
          <input
            id="profile"
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === 'image') {
                setPreview(URL.createObjectURL(file));
              } else {
                setPreview(null);
              }
            }}
            className={styles.fileInputTag}
          />
          <div className={styles.hoverText}>
            Upload
            <br />
            {' '}
            Profile
          </div>
          {preview && <img src={preview} alt="profile" />}
        </label>
        <div className={styles.info}>
          <TextField label="FullName" value={fullname} name="fullname" />
          <TextField label="Email" value={email} name="email" />
        </div>
      </div>
      <TextField label="Headline" value={headline} name="headline" />
    </div>
  );
}

export default PersonalInfo;
