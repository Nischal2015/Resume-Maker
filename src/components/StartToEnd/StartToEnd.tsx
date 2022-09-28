import styles from './StartToEnd.module.css';

interface StartToEndProps {
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  style: React.CSSProperties;
}

function StartToEnd({
  startMonth,
  startYear,
  endMonth,
  endYear,
  style,
}: StartToEndProps) {
  return (
    <div className={styles['start-to-end']} style={style}>
      {startMonth} {startYear} - {endMonth} {endYear}
    </div>
  );
}

export default StartToEnd;
