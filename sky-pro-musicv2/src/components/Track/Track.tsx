import React from "react";
import styles from "./Track.module.css";
import { TrackType } from "@/types/type";
import { formatSecond } from "./helpers/helpers";

type Props = {
  track: TrackType;
  onClick: () => void;
};

export const Track = ({ track, onClick }: Props) => {
  const formattedTime = formatSecond(track.duration_in_seconds);
  return (
    <div className={styles.playlistItem} onClick={onClick}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <>
            <a className={styles.trackTitleLink} href="http://">
              {track.name} <span className={styles.trackTitleSpan}></span>
            </a>
          </>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {track.author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {track.album}
          </a>
        </div>
        <>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>{formattedTime}</span>
        </>
      </div>
    </div>
  );
};
