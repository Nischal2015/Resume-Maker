import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles["nav-text"]}>Navbar</h2>
      <button className={styles["nav-text"]}>Download</button>
    </div>
  );
};

export default Navbar;
