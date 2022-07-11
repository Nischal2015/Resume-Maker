import { PDFViewer } from "@react-pdf/renderer";
import useStore from "../../store/usePersonalStore";
import shallow from "zustand/shallow";
import MyDocument from "../templates/ModernTemplate/MyDocument";

const Document = () => {
  const { ...props } = useStore(
    (state) => ({
      fullname: state.fullname,
      email: state.email,
      headline: state.headline,
    }),
    shallow
  );
  return (
    <PDFViewer>
      <MyDocument {...props} />
    </PDFViewer>
  );
};

export default Document;
