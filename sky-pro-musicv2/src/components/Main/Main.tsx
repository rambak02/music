"use client";

import styles from "./Main.module.css";
import { Playlist } from "@/components/Playlist/Playlist";
import { Filter } from "@/components/Filter/Filter";

export const Main = () => {
  return (
    <>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <Playlist />
    </>
  );
};
