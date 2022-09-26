import create from 'zustand';
import { v4 as uuid } from 'uuid';
import produce from 'immer';

interface EmploymentProps {
  id: string;
  school: string;
  program: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
}

export interface UseEmploymentStoreProps {
  employment: Array<EmploymentProps>;
}

export interface UseEmploymentFunctionProps extends UseEmploymentStoreProps {
  updateEmployment: (employment: Partial<EmploymentProps>) => void;
  addEmployment: () => void;
  findEmployment: (id: string) => EmploymentProps | undefined;
}

const employmentId = uuid();

const useEmploymentStore = create<UseEmploymentFunctionProps>((set, get) => ({
  employment: [
    {
      id: employmentId,
      school: '',
      program: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      description: '',
    },
  ],
  addEmployment: () => {
    //
  },
  updateEmployment: (payload: Partial<EmploymentProps>) =>
    set(
      produce((draft) => {
        const employment = draft.employment.find(
          (e: EmploymentProps) => e.id === payload.id,
        );
        Object.entries(payload).forEach(([key, value]) => {
          employment[key] = value;
        });
      }),
    ),

  findEmployment: (id: string) =>
    get().employment.find((employment) => employment.id === id),
}));

export default useEmploymentStore;
