import shallow from 'zustand/shallow';
import { useEducationStore } from '../../../store';
import { RichTextEditor, Select, TextField } from '../..';
import { MONTH, YEAR } from '../../../data/section';
import styles from './Education.module.css';

function Education({ id }: { id: string }) {
  const [education, updateEducation] = useEducationStore(
    (state) => [state.findEducation(id), state.updateEducation],
    shallow,
  );

  const sectionType = `education ${id}`;

  return (
    <div className={styles.education}>
      <TextField
        label="Program"
        value={education?.program || ''}
        name="program"
        sectionType={sectionType}
      />
      <TextField
        label="School"
        value={education?.school || ''}
        name="school"
        sectionType={sectionType}
      />
      <div className={styles['education-start']}>
        <Select
          label="Start Date"
          options={YEAR}
          value={education?.startYear || ''}
          name="startYear"
          defaultValue="Year"
          sectionType={sectionType}
        />
        <Select
          options={MONTH}
          value={education?.startMonth || ''}
          name="startMonth"
          defaultValue="Month"
          sectionType={sectionType}
        />
      </div>
      <div className={styles['education-end']}>
        <Select
          label="End Date (or expected)"
          options={YEAR}
          value={education?.endYear || ''}
          name="endYear"
          defaultValue="Year"
          sectionType={sectionType}
        />
        <Select
          options={MONTH}
          value={education?.endMonth || ''}
          name="endMonth"
          defaultValue="Month"
          sectionType={sectionType}
        />
      </div>

      <RichTextEditor
        value={education?.description || ''}
        storeFunc={updateEducation}
        sectionType={sectionType}
        name="description"
      />
    </div>
  );
}

export default Education;
