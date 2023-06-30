import styles from "./Mypage.module.css";
const Mypage = () => {
  return (
    <div className={styles.mypage} data-scroll-to="mypageContainer">
      <div className={styles.statusBarmini}>
        <img className={styles.statusminiIcon} alt="" src="/statusmini.svg" />
        <div className={styles.time}>09:10</div>
        <div className={styles.deeplink}>
          <div className={styles.search}>Search</div>
          <img className={styles.backlinkIcon} alt="" src="/backlink.svg" />
        </div>
        <div className={styles.cameraIndicator} />
      </div>
      <b className={styles.settings}>Settings</b>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.parent}>
            <div className={styles.div}>개인정보 처리 방침</div>
            <img
              className={styles.vuesaxoutlinearrowRightIcon}
              alt=""
              src="/vuesaxoutlinearrowright.svg"
            />
          </div>
          <img
            className={styles.vuesaxoutlinedocumentPrevioIcon}
            alt=""
            src="/vuesaxoutlinedocumentprevious.svg"
          />
        </div>
        <div className={styles.groupContainer}>
          <img
            className={styles.vuesaxoutlinedocumentPrevioIcon}
            alt=""
            src="/vuesaxoutlinewallet2.svg"
          />
          <div className={styles.div1}>알림 설정</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon1}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.group}>
          <div className={styles.div}>버전 정보</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon2}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedocumentPrevioIcon}
          alt=""
          src="/vuesaxoutlineticketdiscount.svg"
        />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.group}>
          <div className={styles.div}>문의 및 지원</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon2}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedocumentPrevioIcon}
          alt=""
          src="/vuesaxoutlinelovely.svg"
        />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.group}>
          <div className={styles.div}>회원 정보 관리</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon4}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedocumentPrevioIcon}
          alt=""
          src="/vuesaxoutlinecards.svg"
        />
      </div>
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
            <div className={styles.parent2}>
              <b className={styles.b}>MY</b>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <div className={styles.homeBarmini}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.parent3}>
          <b className={styles.b2}>community</b>
          <img
            className={styles.iconMessageCircleOutline}
            alt=""
            src="/-icon-message-circle-outline.svg"
          />
        </div>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <b className={styles.aboutEatit}>나의 계정정보</b>
          </div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupParent4}>
        <div className={styles.groupFrame}>
          <div className={styles.groupFrame}>
            <b className={styles.aboutEatit}>ABOUT EATIT</b>
          </div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupParent5}>
        <div className={styles.parent}>
          <div className={styles.div}>이용약관</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon2}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedocumentPrevioIcon}
          alt=""
          src="/vuesaxoutlinedirectinbox.svg"
        />
      </div>
    </div>
  );
};

export default Mypage;
