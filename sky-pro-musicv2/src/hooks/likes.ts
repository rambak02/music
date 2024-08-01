import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./store";
import {
  addLikeInTrack,
  dislike,
  likeTrack,
  removeLikeInTrack,
} from "@/store/features/playlistSlice";
import { TrackType } from "@/types/type";

type Props = {
  track: TrackType;
};

export const useLikeTrack = ({ track }: Props) => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const isLiked = likedTracks.some((el) => el.id === track.id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (tokens.access && likedTracks) {
      if (isLiked) {
        await dispatch(
          removeLikeInTrack({ access: tokens.access, id: track.id })
        );
        dispatch(dislike(track));
      } else {
        await dispatch(addLikeInTrack({ access: tokens.access, id: track.id }));
        dispatch(likeTrack(track));
      }
    } else {
      return toast.error("Вы не зарегестрированы");
    }
  };
  return { isLiked, handleLike };
};
