import styles from "../route.module.css";

const LogoAnimation = () => {

  return (
    <div className={styles.logo} id={styles.textGradient}>
        <p className={styles.color1}>NEFF</p>
        <p className={styles.color2}>STORE</p>
    </div>
  );
};

export default LogoAnimation;
