import { useCallback } from "react";
import styles from "./MyPage1.module.css";
const MyPage1 = () => {
  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mypageContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.myPage}>
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini1.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <b className={styles.myPage1}>My Page</b>
      <div className={styles.uitabbarParent}>
        <div className={styles.uitabbar}>
          <div className={styles.globeParent}>
            <img className={styles.globeIcon} alt="" src="/globe.svg" />
            <b className={styles.b}>search</b>
          </div>
          <div className={styles.homeParent}>
            <img className={styles.homeIcon} alt="" src="/home.svg" />
            <b className={styles.home}>home</b>
          </div>
          <div className={styles.iconPerson}>
            <div className={styles.parent}>
              <b className={styles.b}>MY</b>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <div className={styles.homeBarmini}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.group}>
          <b className={styles.b2}>community</b>
          <img
            className={styles.iconMessageCircleOutline}
            alt=""
            src="/-icon-message-circle-outline.svg"
          />
        </div>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
      <div className={styles.iconCardParent}>
        <img className={styles.iconCard} alt="" src="/-icon-card.svg" />
        <div className={styles.div}>결제 정보</div>
      </div>
      <div
        className={styles.iconSettingsOutlineParent}
        onClick={onFrameContainer1Click}
      >
        <img
          className={styles.iconSettingsOutline}
          alt=""
          src="/-icon-settings-outline.svg"
        />
        <div className={styles.div}>환경 설정</div>
      </div>
      <div className={styles.iconBellOutlineParent}>
        <img
          className={styles.iconSettingsOutline}
          alt=""
          src="/-icon-bell-outline.svg"
        />
        <div className={styles.div}>공지사항</div>
      </div>
      <div className={styles.iconBookmarkOutlineParent}>
        <img
          className={styles.iconBookmarkOutline}
          alt=""
          src="/-icon-bookmark-outline.svg"
        />
        <div className={styles.div}>북마크</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.header}>
          <div className={styles.header1}>
            <img className={styles.avatarsIcon} alt="" src="/avatars.svg" />
            <div className={styles.text} />
          </div>
          <div className={styles.div4}>이름</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage1;
