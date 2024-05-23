import Image from "next/image";
import styles from "./Sidebar.module.css";
import { Personal } from "../Personal/Personal";

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
                src="/img/playlist01.png"
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
                src="/img/playlist02.png"
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
                src="/img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
