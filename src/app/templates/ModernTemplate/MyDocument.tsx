import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { UsePersonalStoreProps } from "../../../store/usePersonalStore";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({ fullname, email, headline }: UsePersonalStoreProps) => {
  return (
    <Document pdfVersion="1.7" language="english">
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>{fullname}</Text>
        </View>
        <View style={styles.section}>
          <Text>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text>{headline}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
