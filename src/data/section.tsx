import { PersonalDetails } from "../components/ResumeSection";

interface ResumeSectionProps {
  name: string;
  component?: JSX.Element;
}

export const RESUME_SECTIONS: ResumeSectionProps[] = [
  {
    name: "Personal Details",
    component: <PersonalDetails />,
  },
  {
    name: "Education",
    component: <></>,
  },
  {
    name: "Employment",
    component: <></>,
  },
  {
    name: "Skills",
    component: <></>,
  },
  {
    name: "Language",
    component: <></>,
  },
];
