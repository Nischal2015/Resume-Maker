import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFViewer,
  View,
} from '@react-pdf/renderer';
import shallow from 'zustand/shallow';
// import parse from 'html-react-parser';
import { remTomm } from '../../../utils';
import { BODY_FONT, HEADING_FONT, NAME_FONT } from '../../../data/font';
import {
  // useEducationStore,
  usePersonalStore,
  UsePersonalStoreProps,
} from '../../../store';

// Create styles
const styles = StyleSheet.create({
  body: {
    fontSize: `${BODY_FONT}mm`,
    color: 'rgb(31 41 55)',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: `${remTomm(0.5)}`,
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(255 255 255)',
    padding: `${remTomm(1)}`,
  },
  name: {
    fontSize: `${NAME_FONT}mm`,
    lineHeight: 1,
  },
  heading: {
    fontSize: `${HEADING_FONT}mm`,
    lineHeight: 1,
    color: 'rgb(107 114 128)',
    marginBottom: '2.5mm',
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgb(243 244 246)',
    fontSize: `${BODY_FONT}mm`,
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: `${remTomm(1)}`,
  },
  resume: {
    padding: `${remTomm(1)}`,
    height: '100%',
    display: 'flex',
  },
  left: {},
  profile: {},
});

// Create Document Component
function ModernTemplatePdf() {
  const {
    fullname,
    headline,
    email,
    phone,
    address,
    city,
    profile,
  }: UsePersonalStoreProps = usePersonalStore(
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
    shallow,
  );
  // const education = useEducationStore((state) => state.education, shallow);

  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer height="100%" width="100%">
        <Document>
          <Page size="A4">
            {/* FullName Section */}
            <View style={styles.header}>
              <Text style={styles.name}>{fullname}</Text>
              <Text style={styles.heading}>{headline}</Text>

              {/* Contact Section */}
              <View style={styles.contact}>
                {/* Email */}
                <View style={styles.contactItem}>
                  <Text>{email}</Text>
                </View>

                {/* Phone */}
                <View style={styles.contactItem}>
                  <Text>{phone}</Text>
                </View>

                {/* Address */}
                <View style={styles.contactItem}>
                  <Text>{address}</Text>
                  {address && city && <Text>,&nbsp;</Text>}
                  <Text>{city}</Text>
                </View>
              </View>
            </View>

            {/* Resume Section */}
            <View style={styles.resume}>
              <View style={styles.left}>
                {profile && (
                  <View style={styles.profile}>
                    <Text style={styles.heading}>Profile</Text>
                    <View dangerouslySetInnerHtml={profile} />
                  </View>
                )}
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default ModernTemplatePdf;
