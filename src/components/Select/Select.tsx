import { v4 as uuid } from 'uuid';
import { useEducationStore } from '../../store';
import styles from './Select.module.css';

function Select({
  label = '',
  options,
  defaultValue,
  name,
  // value,
  sectionType,
}: {
  label?: string;
  options: Array<Record<string, string>>;
  defaultValue: string;
  name: string;
  // value: string;
  sectionType?: string;
}) {
  const updateEducation = useEducationStore((state) => state.updateEducation);
  return (
    <div className={styles.selectfield}>
      <label htmlFor="start-date" className={styles.label}>
        {label}
      </label>

      <select
        id="start-date"
        name={name}
        className={styles.select}
        data-type={sectionType}
        onChange={(e) => {
          if (e.target?.dataset?.type) {
            const [, id] = e.target.dataset.type.split(' ');
            updateEducation({
              id,
              [e.target.name]: e.target.value,
            });
          }
        }}
      >
        <option value={defaultValue} className={styles.default}>
          {defaultValue}
        </option>
        {options.map((option) => {
          const id = uuid();
          return (
            <option key={id} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
