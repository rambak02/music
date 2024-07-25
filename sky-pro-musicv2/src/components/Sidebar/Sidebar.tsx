import Image from "next/image";
import styles from "./Sidebar.module.css";
import { Personal } from "../Personal/Personal";
import playlist01Img from "../../../public/img/playlist01.png"
import playlist02Img from "../../../public/img/playlist02.png"
import playlist03Img from "../../../public/img/playlist03.png"

export const Sidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <Personal />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist01Img}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist02Img}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist03Img}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
