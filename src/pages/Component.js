import styles from "./Component.module.css";
const Component = () => {
  return (
    <div className={styles.div} data-scroll-to="container1">
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini1.svg" />
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
      <div className={styles.div1}>화면을 아래로 내려주세요.</div>
      <b className={styles.b}>
        <p className={styles.p}>{`00님을 위한 `}</p>
        <p className={styles.p}>오늘의 추천 뉴스</p>
      </b>
      <div className={styles.div2}>
        <img className={styles.icon} alt="" src="/0021@2x.png" />
        <div className={styles.uitabbar}>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" />
          <b className={styles.b1}>북마크</b>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
          <b className={styles.b2}>설정</b>
          <img className={styles.globeIcon} alt="" src="/globe.svg" />
          <b className={styles.b3}>탐색</b>
          <img className={styles.homeIcon} alt="" src="/home2.svg" />
          <b className={styles.b4}>홈</b>
        </div>
        <div className={styles.statusBarmini}>
          <img
            className={styles.statusminiIcon}
            alt=""
            src="/statusmini1.svg"
          />
          <div className={styles.time}>09:10</div>
          <div className={styles.deeplink}>
            <div className={styles.search}>Search</div>
            <img className={styles.backlinkIcon1} alt="" src="/backlink.svg" />
          </div>
          <div className={styles.cameraIndicator} />
        </div>
        <div className={styles.homeBarmini}>
          <div className={styles.homeIndicator} />
        </div>
        <img className={styles.child} alt="" src="/group-11.svg" />
        <b className={styles.b5}>
          <p className={styles.p}>{`00님을 위한 `}</p>
          <p className={styles.p}>오늘의 추천 뉴스</p>
        </b>
        <b className={styles.my}>MY</b>
        <img className={styles.iconPerson} alt="" src="/-icon-person.svg" />
      </div>
      <div className={styles.uitabbarParent}>
        <div className={styles.uitabbar1}>
          <div className={styles.globeParent}>
            <img className={styles.globeIcon1} alt="" src="/globe.svg" />
            <b className={styles.b6}>search</b>
          </div>
          <div className={styles.homeParent}>
            <img className={styles.homeIcon1} alt="" src="/home2.svg" />
            <b className={styles.home}>home</b>
          </div>
          <div className={styles.iconPerson1}>
            <div className={styles.parent}>
              <b className={styles.b6}>MY</b>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
            </div>
          </div>
          <div className={styles.homeBarmini2}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.group}>
          <b className={styles.b8}>community</b>
          <img
            className={styles.iconMessageCircleOutline}
            alt=""
            src="/-icon-message-circle-outline.svg"
          />
        </div>
      </div>
      <div className={styles.item} />
      <img className={styles.inner} alt="" src="/line-1.svg" />
      <img className={styles.inner} alt="" src="/line-2.svg" />
      <div className={styles.div3}>뉴스 요약 설명</div>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default Component;
