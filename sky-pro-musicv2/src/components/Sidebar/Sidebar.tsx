import Image from "next/image";
import styles from "./Sidebar.module.css";
import { Personal } from "../Personal/Personal";
import playlist01Img from "../../../public/img/playlist01.png";
import playlist02Img from "../../../public/img/playlist02.png";
import playlist03Img from "../../../public/img/playlist03.png";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <Personal />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/2">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist01Img}
                alt="day's playlist"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/3">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist02Img}
                alt="day's playlist"
              />
            </Link>
          </div>
          <div className={styles.sidebarItem}>
            <Link className={styles.sidebarLink} href="/tracks/category/4">
              <Image
                width={250}
                height={150}
                className={styles.sidebarImg}
                src={playlist03Img}
                alt="day's playlist"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
