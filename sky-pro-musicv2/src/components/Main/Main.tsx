import styles from "./Main.module.css";
import clsx from "clsx";
import { NavBar } from "@/components/NavBar/NavBar";
import { Playlist } from "@/components/Playlist/Playlist";
import { Filter } from "@/components/Filter/Filter";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";
import { TrackType, TracksType } from "@/types/type";

export const Main = ({tracks}: TracksType) => {
  // const [currnetTrack, setCurrentTrack] = useState<TrackType | null>(null)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <NavBar />
          <div className={clsx(styles.main__centerblock, styles.centerblock)}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <Filter tracks={tracks} />
            <Playlist tracks={tracks}/>
          </div>
          <Sidebar />
        </div>
        <Bar />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
