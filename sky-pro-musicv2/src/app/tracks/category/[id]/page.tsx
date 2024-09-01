'use client'
import { getCategory } from "@/api/categoryApi";
import styles from "../../layout.module.css";
import { Playlist } from "@/components/Playlist/Playlist";
import { useEffect, useRef } from "react";
import { setCurrentPlaylist, setCurrentTrack, setInitialPlaylist} from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

type CategoryProps = {
  params: {
    id: string;
  }
};

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.playlist.initialPlaylist)
  const name = useRef();

  useEffect(() => {
    try {
      getCategory(params.id).then((res) => {
        console.log(res)
        name.current = res.name;
        const items = res.items;
        const tracks = items.map((item: number) => allTracks.filter((track) => track._id === item)).flat();
        dispatch(setCurrentPlaylist(tracks));
      })
    } catch (error) {

    }
  }, [dispatch, allTracks, params.id]);


  return (
    <>
      <h2 className={styles.centerblock__h2}>{name.current}</h2>
      <Playlist />
    </>
  );
};

export default Category;