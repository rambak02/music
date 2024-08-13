"use client";

import styles from "./Main.module.css";

import { Playlist } from "@/components/Playlist/Playlist";
import { Filter } from "@/components/Filter/Filter";

import { TrackType, TracksType } from "@/types/type";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/store";
import { setCurrentPlaylist, setInitialPlaylist } from "@/store/features/playlistSlice";
type MainProps = {
  tracks: TrackType[];
};

export const Main = ({ tracks }: MainProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPlaylist(tracks));
    dispatch(setInitialPlaylist(tracks));
  }, [dispatch, tracks]);
  return (
    <>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter tracks={tracks} />
      <Playlist tracks={tracks} />
    </>
  );
};
