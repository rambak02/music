"use client";

import { TrackType, TracksType } from "@/types/type";
import { Track } from "../Track/Track";
import styles from "./Playlist.module.css";
import clsx from "clsx";
export const Playlist = ({
  tracks,
  onClick,
}: {
  tracks: TrackType[];
  onClick: (track: TrackType) => void;
}) => {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={clsx(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={clsx(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={clsx(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={clsx(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track: TrackType) => (
          <Track track={track} key={track.id} onClick={() => onClick(track)} />
        ))}
      </div>
    </div>
  );
};
