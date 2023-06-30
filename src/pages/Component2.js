import { useCallback } from "react";
import styles from "./Component2.module.css";
const Component2 = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='container1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.div} data-scroll-to="container">
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini1.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <div className={styles.wrapper} onClick={onFrameContainerClick}>
        <div className={styles.div1}>로그인</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div1}>이메일로 가입하기</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.div1}>아이디</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div1}>비밀번호</div>
      </div>
      <div className={styles.wrapper1}>
        <div className={styles.div1}>카카오로 시작하기</div>
      </div>
      <img className={styles.icon} alt="" src="/--0013-1@2x.png" />
      <div className={styles.child} />
      <div className={styles.div6}>비밀번호 기억하기</div>
      <div className={styles.div7}>아이디/비밀번호 찾기</div>
    </div>
  );
};

export default Component2;
