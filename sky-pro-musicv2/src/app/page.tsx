import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import { NavBar } from "@/components/NavBar/NavBar";
import { Playlist } from "@/components/Playlist/Playlist";
import { Filter } from "@/components/Filter/Filter";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <NavBar />
          <div className={clsx(styles.main__centerblock, styles.centerblock)}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <Filter />
            <Playlist />
          </div>
          <Sidebar />
        </div>
        <div className={styles.bar}>
          <div className={styles.bar__content}>
             <div className={styles.bar__playerProgress}></div>
            <div className={styles.bar__playerBlock}>
              <div className={clsx(styles.bar__player, styles.player)}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btnPrev}>
                    <svg className={styles.player__btnPrevSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className={clsx(styles.player__btnPlay, styles._btn)}>
                    <svg className={styles.player__btnPlaySvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={styles.player__btnNext}>
                    <svg className={styles.player__btnNextSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div
                    className={clsx(styles.player__btnRepeat, styles._btnIcon)}
                  >
                    <svg className={styles.player__btnRepeatSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div
                    className={clsx(styles.player__btnShuffle, styles._btnIcon)}
                  >
                    <svg className={styles.player__btnShuffleSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <div
                  className={clsx(styles.player__trackPlay, styles.trackPlay)}
                >
                  <div className={styles.trackPlay__contain}>
                    <div className={styles.trackPlay__image}>
                      <svg className={styles.trackPlay__svg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={styles.trackPlay__author}>
                      <a
                        className={styles.trackPlay__authorLink}
                        href="http://"
                      >
                        Ты та...
                      </a>
                    </div>
                    <div className={styles.trackPlay__album}>
                      <a className={styles.trackPlay__albumLink} href="http://">
                        Баста
                      </a>
                    </div>
                  </div>

                  <div className={styles.trackPlay__likeDis}>
                    <div
                      className={clsx(styles.trackPlay__like, styles._btnIcon)}
                    >
                      <svg className={styles.trackPlay__likeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div
                      className={clsx(
                        styles.trackPlay__dislike,
                        styles._btnIcon
                      )}
                    >
                      <svg className={styles.trackPlay__dislikeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.bar__volumeBlock, styles.volume)}>
                <div className={styles.volume__content}>
                  <div className={styles.volume__image}>
                    <svg className={styles.volume__svg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className={clsx(styles.volume__progress, styles._btn)}>
                    <input
                      className={clsx(styles.volume__progressLine, styles._btn)}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
