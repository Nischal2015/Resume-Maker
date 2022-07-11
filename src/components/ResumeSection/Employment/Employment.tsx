import { useEmploymentStore } from "../../../store";
import { RichTextEditor, Select, TextField } from "../../";
import { MONTH, YEAR } from "../../../data/section";
import styles from "./Employment.module.css";
import shallow from "zustand/shallow";

const Employment = ({ id }: { id: string }) => {
  const [employment, updateEmployment] = useEmploymentStore(
    (state) => [state.findEmployment(id), state.updateEmployment],
    shallow
  );

  const sectionType = `employment ${id}`;

  return (
    <div className={styles.employment}>
      <TextField
        label="Position"
        value={employment?.program || ""}
        name="program"
        sectionType={sectionType}
      />
      <TextField
        label="Employer"
        value={employment?.school || ""}
        name="school"
        sectionType={sectionType}
      />
      <div className={styles["employment-start"]}>
        <Select
          label="Start Date"
          options={YEAR}
          value={employment?.startYear || ""}
          name="startYear"
          defaultValue="Year"
          sectionType={sectionType}
        />
        <Select
          options={MONTH}
          value={employment?.startMonth || ""}
          name="startMonth"
          defaultValue="Month"
          sectionType={sectionType}
        />
      </div>
      <div className={styles["employment-end"]}>
        <Select
          label="End Date (or expected)"
          options={YEAR}
          value={employment?.endYear || ""}
          name="endYear"
          defaultValue="Year"
          sectionType={sectionType}
        />
        <Select
          options={MONTH}
          value={employment?.endMonth || ""}
          name="endMonth"
          defaultValue="Month"
          sectionType={sectionType}
        />
      </div>

      <RichTextEditor
        value={employment?.description || ""}
        storeFunc={updateEmployment}
        sectionType={sectionType}
        name="description"
      />
    </div>
  );
};

export default Employment;
