import { ModernTemplate } from "app/templates";
import { useEffect, useRef, useState } from "react";
import shallow from "zustand/shallow";
import {
  usePersonalStore,
  UsePersonalStoreProps,
  useEducationStore,
} from "../../store";
import styles from "./PdfPage.module.css";

// Resume interface
export interface ResumeProps {
  fullname: string;
  headline: string;
  email: string;
}

const PdfPage = () => {
  const resumeDimensionRef = useRef<HTMLDivElement>();

  const [width, setWidth] = useState<number>(0);

  const getListSize = () => {
    const newWidth = resumeDimensionRef.current?.clientWidth as number;
    setWidth(newWidth);
  };

  useEffect(() => {
    getListSize();
  }, []);

  // Update 'width' when the window resizes
  useEffect(() => {
    window.addEventListener("resize", getListSize);

    // cleanup the eventListener
    return () => {
      window.removeEventListener("keydown", getListSize);
    };
  }, []);

  const { ...personal }: UsePersonalStoreProps = usePersonalStore(
    (state) => ({
      fullname: state.fullname,
      headline: state.headline,
      email: state.email,
      phone: state.phone,
      address: state.address,
      city: state.city,
      postal: state.postal,
      profile: state.profile,
    }),
    shallow
  );
  const education = useEducationStore((state) => state.education, shallow);
  return (
    <section className={styles["preview-section"]}>
      <div
        className={styles.page}
        ref={resumeDimensionRef as React.RefObject<HTMLDivElement>}
      >
        <ModernTemplate {...personal} education={education} width={width} />
      </div>
    </section>
  );
};

export default PdfPage;
