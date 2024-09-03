"use client";
import { getCategory } from "@/api/categoryApi";
import styles from "../../layout.module.css";
import { Playlist } from "@/components/Playlist/Playlist";
import { useEffect, useRef, useState } from "react";
import {
  setCurrentPlaylist,
  setCurrentTrack,
  setInitialPlaylist,
} from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { TrackType } from "@/types/type";
import { getTracks } from "@/api/api";

type CategoryProps = {
  params: {
    id: string;
  };
};
// useEffect(() => {
//   getPlaylistTracks(params.id)
//     .then((tracksData) => {
//       setTracks(tracksData);
//       dispatch(setInitialTracks({ initialTracks: tracksData }));
//     })
//     .catch((error: any) => {
//       throw new Error(error.message);
//     });
// }, [dispatch, params.id]);

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.playlist.initialPlaylist);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await getTracks();
        dispatch(setInitialPlaylist(res));
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    };
    fetchTracks();
  }, [dispatch]);
  
  useEffect(() => {
    try {
      getCategory(params.id).then((res) => {
        const items = res.items;
        const tracks = items
          .map((item: number) =>
            allTracks.filter((track) => track._id === item)
          )
          .flat();
        dispatch(setCurrentPlaylist(tracks));
      });
    } catch (error) {}
  }, [allTracks, dispatch, params.id]);

  let title = "";
  switch (params.id) {
    case "2":
      title = "Плейлист дня";
      break;
    case "3":
      title = "100 танцевальных хитов";
      break;
    case "4":
      title = "Инди-заряд";
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Playlist />
    </>
  );
}

export default Category;
