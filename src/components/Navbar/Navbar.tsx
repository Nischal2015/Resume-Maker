import styles from './Navbar.module.css';

function Navbar(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <h2 className={styles['nav-text']}>Navbar</h2>
      <button className={styles['nav-text']} type="button">
        Download
      </button>
    </div>
  );
}

export default Navbar;
