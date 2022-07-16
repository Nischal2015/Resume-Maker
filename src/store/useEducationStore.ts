import create from 'zustand';
import { v4 as uuid } from 'uuid';
import produce from 'immer';

interface EducationProps {
  id: string;
  school: string;
  program: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
}

export interface UseEducationStoreProps {
  education: Array<EducationProps>;
}

export interface UseEducationFunctionProps extends UseEducationStoreProps {
  updateEducation: (education: Partial<EducationProps>) => void;
  addEducation: () => void;
  findEducation: (id: string) => EducationProps | undefined;
}

const educationId = uuid();

const useEducationStore = create<UseEducationFunctionProps>((set, get) => ({
  education: [
    {
      id: educationId,
      school: '',
      program: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      description: '',
    },
  ],
  addEducation: () => {
    //
  },
  updateEducation: (payload: Partial<EducationProps>) =>
    set(
      produce((draft) => {
        const education = draft.education.find(
          (e: EducationProps) => e.id === payload.id,
        );
        Object.entries(payload).forEach(([key, value]) => {
          education[key] = value;
        });
      }),
    ),

  findEducation: (id: string) =>
    get().education.find((education) => education.id === id),
}));

export default useEducationStore;
