import { useCallback } from "react";
import styles from "./Component3.module.css";
const Component3 = () => {
  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini1.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <img className={styles.icon} alt="" src="/--0013-11@2x.png" />
      <div className={styles.child} onClick={onRectangleClick} />
      <div className={styles.item} />
      <div className={styles.signIn}>Sign In</div>
      <div className={styles.signUp}>Sign Up</div>
    </div>
  );
};

export default Component3;
