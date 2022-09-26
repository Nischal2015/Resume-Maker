import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import { UsePersonalStoreProps, UseEducationStoreProps } from '../../../store';
import { BODY_FONT, HEADING_FONT, NAME_FONT } from '../../../data/font';
import { StartToEnd } from '../../../components';
import { dompurify, sizeCalcForPdf } from '../../../utils';
import styles from './ModernTemplate.module.css';

interface ModernTemplateProps
  extends UsePersonalStoreProps,
  UseEducationStoreProps {
  width: number;
}

function ModernTemplate(props: ModernTemplateProps) {
  const {
    fullname,
    headline,
    email,
    phone,
    address,
    city,
    profile,
    width,
    education,
  } = props;

  const style = {
    name: {
      fontSize: sizeCalcForPdf(width, NAME_FONT),
      lineHeight: '0.5',
    },
    heading: {
      fontSize: sizeCalcForPdf(width, HEADING_FONT),
      lineHeight: '1',
      marginBottom: '2.5mm',
      color: 'rgb(107 114 128)',
    },
    body: {
      fontSize: sizeCalcForPdf(width, BODY_FONT),
      lineHeight: '1',
      color: 'rgb(31 41 55)',
      marginBottom: sizeCalcForPdf(width, 0.5),
    },
    nameBody: { fontSize: sizeCalcForPdf(width, BODY_FONT), lineHeight: '1' },
    resumeSection: {
      paddingBottom: sizeCalcForPdf(width, 2.5),
      borderBottom: '1px solid rgba(209, 213, 219, 0.5)',
    },
    left: {
      rowGap: '3mm',
    },
  };

  return (
    <>
      <section className={styles.header}>
        {/* FullName Section */}
        <div className={styles.fullname}>
          <h1 style={style.name}>{fullname || 'Resume'}</h1>
          <span style={style.heading}>{headline}</span>
        </div>

        {/* Contact Section */}
        <div className={styles.contact} style={style.nameBody}>
          {/* Email */}
          {email && (
            <div className={styles['contact-item']}>
              <MailIcon className="icon" />
              <span>{email}</span>
            </div>
          )}

          {/* Phone */}
          {phone && (
            <div className={styles['contact-item']}>
              <PhoneIcon className="icon" />
              <span>{phone}</span>
            </div>
          )}

          {/* Address */}
          {(address || city) && (
            <div className={styles['contact-item']}>
              <LocationMarkerIcon className="icon" />
              <span>
                {address}
                {address && city && <>,&nbsp;</>}
                {city}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Resume Section */}
      <section className={styles.resume}>
        <div className={styles.left} style={style.left}>
          {/* Profile Section */}
          {profile && (
            <div className={styles.profile} style={style.resumeSection}>
              <h2 style={style.heading}>Profile</h2>
              <div
                className="richtext"
                style={style.body}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={dompurify(profile)}
              />
            </div>
          )}

          {/* Education Section */}
          {education.map((edu) => {
            if (edu.school || edu.program) {
              return (
                <div
                  className={styles.education}
                  style={style.resumeSection}
                  key={edu.id}
                >
                  <h2 style={style.heading}>Education</h2>
                  <div className={styles['education-heading']}>
                    <h3 style={style.body}>{edu.program}</h3>
                    {(edu.startMonth
                      || edu.endMonth
                      || edu.startYear
                      || edu.endYear) && (
                      <StartToEnd
                        startYear={edu.startYear}
                        startMonth={edu.startMonth}
                        endYear={edu.endYear}
                        endMonth={edu.endMonth}
                        style={style.body}
                      />
                    )}
                  </div>
                  <p
                    style={{
                      ...style.body,
                      marginBottom: sizeCalcForPdf(width, 1),
                    }}
                  >
                    {edu.school}
                  </p>
                  <div
                    className="richtext"
                    style={style.body}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={dompurify(edu.description)}
                  />
                </div>
              );
            }
            return <>&nbsp;</>;
          })}
        </div>
      </section>
    </>
  );
}

export default ModernTemplate;
