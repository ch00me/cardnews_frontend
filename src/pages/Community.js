import styles from "./Community.module.css";
const Community = () => {
  return (
    <div className={styles.community}>
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.uitabbarParent}>
        <div className={styles.uitabbar}>
          <div className={styles.globeParent}>
            <img className={styles.globeIcon} alt="" src="/globe2.svg" />
            <b className={styles.b}>search</b>
          </div>
          <div className={styles.homeParent}>
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
            <b className={styles.home}>home</b>
          </div>
          <div className={styles.iconPerson}>
            <div className={styles.parent}>
              <b className={styles.b}>MY</b>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
            </div>
          </div>
          <div className={styles.homeBarmini1}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.communityParent}>
          <b className={styles.community1}>community</b>
          <img
            className={styles.iconMessageCircleOutline}
            alt=""
            src="/-icon-message-circle-outline1.svg"
          />
        </div>
      </div>
      <div className={styles.imageplaceholder}>
        <img className={styles.avatarsIcon} alt="" src="/avatars1.svg" />
        <div className={styles.div}>카테고리 1</div>
      </div>
      <div className={styles.imageplaceholder1}>
        <img className={styles.avatarsIcon} alt="" src="/avatars1.svg" />
        <div className={styles.div}>카테고리 2</div>
      </div>
      <div className={styles.imageplaceholder2}>
        <img className={styles.avatarsIcon} alt="" src="/avatars1.svg" />
        <div className={styles.div}>카테고리 3</div>
      </div>
      <b className={styles.community2}>Community</b>
      <div className={styles.articlelist}>
        <div className={styles.paragraphimage}>
          <div className={styles.imageplaceholder3}>
            <img className={styles.avatarsIcon} alt="" src="/image.svg" />
          </div>
          <div className={styles.headerParent}>
            <b className={styles.header}>Header</b>
            <div
              className={styles.ametMinimMollit}
            >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. `}</div>
          </div>
        </div>
        <div className={styles.paragraphimage}>
          <div className={styles.imageplaceholder3}>
            <img className={styles.avatarsIcon} alt="" src="/image.svg" />
          </div>
          <div className={styles.headerParent}>
            <b className={styles.header}>Header</b>
            <div
              className={styles.ametMinimMollit}
            >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
