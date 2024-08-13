"use client";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import styles from "./Tracks.module.css";

import { useEffect } from "react";

import { getTracks } from "@/api/api";
import { useAppDispatch } from "@/hooks/store";
import {
  setCurrentPlaylist,
  setInitialPlaylist,
} from "@/store/features/playlistSlice";

export function Tracks() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      getTracks().then((res) => {
        dispatch(setCurrentPlaylist(res));
        dispatch(setInitialPlaylist(res));
      });
    } catch (error) {}
  }, [dispatch]);
  return (
    <>
      <h2 className={styles.centerblock_h2}>Треки</h2>
      <Filter />
      <Playlist />
    </>
  );
}
