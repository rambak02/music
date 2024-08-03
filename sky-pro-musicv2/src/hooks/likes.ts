import { useAppDispatch, useAppSelector } from "./store";
import {
  addLikeInTrack,
  dislike,
  likeTrack,
  removeLikeInTrack,
} from "@/store/features/playlistSlice";
import { TrackType } from "@/types/type";
import { useState } from "react";

type Props = {
  track: TrackType;
};

export const useLikeTrack = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const [isLiked, setIsLiked] = useState(likedTracks.some((el) => el.id === track.id))
 

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    if (tokens.access && likedTracks) {
      if (isLiked) {
        await dispatch(
          removeLikeInTrack({ access: tokens.access, id: track.id })
        );
        dispatch(dislike(track));
        setIsLiked(false)
      } else {
        await dispatch(addLikeInTrack({ access: tokens.access, id: track.id }));
        dispatch(likeTrack(track));
        setIsLiked(true)
      }
    } else {
      alert("вы незарегистрированы")
    }
  };
  return { isLiked, handleLike, setIsLiked };
};
