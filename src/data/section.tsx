import { Education, Employment, PersonalDetails, Profile } from "../components";
import { useEducationStore, useEmploymentStore } from "../store";

interface ResumeSectionProps {
  name: string;
  component: JSX.Element | JSX.Element[];
}

const educationId = useEducationStore.getState().education[0].id;
const employmentId = useEmploymentStore.getState().employment[0].id;

export const RESUME_SECTIONS: ResumeSectionProps[] = [
  {
    name: "Personal Details",
    component: <PersonalDetails />,
  },
  {
    name: "Education",
    component: [<Education id={educationId} key={educationId} />],
  },
  {
    name: "Employment",
    component: [<Employment id={employmentId} key={employmentId} />],
  },
  {
    name: "Skills",
    component: <>ram</>,
  },
  {
    name: "Language",
    component: <>ram</>,
  },
  {
    name: "Profile",
    component: <Profile />,
  },
];

export interface YearProps {
  name: number;
}

export const YEAR = [
  { name: "1968" },
  { name: "1969" },
  { name: "1970" },
  { name: "1971" },
  { name: "1972" },
  { name: "1973" },
  { name: "1974" },
  { name: "1975" },
  { name: "1976" },
  { name: "1977" },
  { name: "1978" },
  { name: "1979" },
  { name: "1980" },
  { name: "1981" },
  { name: "1982" },
  { name: "1983" },
  { name: "1984" },
  { name: "1985" },
  { name: "1986" },
  { name: "1987" },
  { name: "1988" },
  { name: "1989" },
  { name: "1990" },
  { name: "1991" },
  { name: "1992" },
  { name: "1993" },
  { name: "1994" },
  { name: "1995" },
  { name: "1996" },
  { name: "1997" },
  { name: "1998" },
  { name: "1999" },
  { name: "2000" },
  { name: "2001" },
  { name: "2002" },
  { name: "2003" },
  { name: "2004" },
  { name: "2005" },
  { name: "2006" },
  { name: "2007" },
  { name: "2008" },
  { name: "2009" },
  { name: "2010" },
  { name: "2011" },
  { name: "2012" },
  { name: "2013" },
  { name: "2014" },
  { name: "2015" },
  { name: "2016" },
  { name: "2017" },
  { name: "2018" },
  { name: "2019" },
  { name: "2020" },
  { name: "2021" },
  { name: "2022" },
];

export const MONTH = [
  { name: "Jan" },
  { name: "Feb" },
  { name: "Mar" },
  { name: "Apr" },
  { name: "May" },
  { name: "Jun" },
  { name: "Jul" },
  { name: "Aug" },
  { name: "Sep" },
  { name: "Oct" },
  { name: "Nov" },
  { name: "Dec" },
];
