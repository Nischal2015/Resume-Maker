import { useEducationStore, usePersonalStore } from '../../store';
import styles from './TextField.module.css';

function TextField({
  label,
  value,
  name,
  sectionType,
}: {
  label: string;
  value: string;
  name?: string;
  sectionType?: string;
}) {
  const setStore = usePersonalStore((state) => state.setStore);
  const updateEducation = useEducationStore((state) => state.updateEducation);
  return (
    <div className={styles.textfield}>
      <label htmlFor="input" className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id="input"
        name={name}
        className={styles.input}
        value={value}
        data-type={sectionType}
        onChange={(e) => {
          if (e.target?.dataset?.type) {
            const [, id] = e.target.dataset.type.split(' ');
            updateEducation({
              id,
              [e.target.name]: e.target.value,
            });
          }
          setStore({ [e.target.name]: e.target.value });
        }}
      />
    </div>
  );
}

export default TextField;
