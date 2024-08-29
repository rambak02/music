"use client"
import styles from "./layout.module.css";
import { Bar } from "@/components/Bar/Bar";
import { NavBar } from "@/components/NavBar/NavBar";
import { Search } from "@/components/Search/Search";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { getFavoriteTracks } from "@/store/features/playlistSlice";
import clsx from "clsx";
import { useEffect } from "react";

export default function TrackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.tokens?.access);
  useEffect(() => {
    if (token) {
      dispatch(getFavoriteTracks({access: token}));
  }
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <NavBar />
          <div className={clsx(styles.main__centerblock, styles.centerblock)}>
            <Search />
            {children}
          </div>
          <Sidebar />
        </div>
        <Bar />
      </div>
    </div>
  );
}
