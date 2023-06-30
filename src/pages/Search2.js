import styles from "./Search2.module.css";
const Search2 = () => {
  return (
    <div className={styles.search2}>
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini1.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <b className={styles.b}>
        <p className={styles.p}>{`00님을 위한 `}</p>
        <p className={styles.p}>취업 공고</p>
      </b>
      <img className={styles.icon} alt="" src="/002@2x.png" />
      <img className={styles.icon1} alt="" src="/002@2x.png" />
      <div className={styles.uitabbarParent}>
        <div className={styles.uitabbar}>
          <div className={styles.globeParent}>
            <img className={styles.globeIcon} alt="" src="/globe1.svg" />
            <b className={styles.b1}>search</b>
          </div>
          <div className={styles.homeParent}>
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
            <b className={styles.home}>home</b>
          </div>
          <div className={styles.iconPerson}>
            <div className={styles.parent}>
              <b className={styles.b1}>MY</b>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
            </div>
          </div>
          <div className={styles.homeBarmini}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.group}>
          <b className={styles.b3}>community</b>
          <img
            className={styles.iconMessageCircleOutline}
            alt=""
            src="/-icon-message-circle-outline.svg"
          />
        </div>
      </div>
      <div className={styles.homeBarmini1}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.job}>job</div>
        <div className={styles.buttonItem} />
      </div>
    </div>
  );
};

export default Search2;
