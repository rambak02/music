import clsx from "clsx";
import styles from "./Bar.module.css";
import { TrackType } from "@/types/type";
import { useLikeTrack } from "@/hooks/likes";
import { useAppSelector } from "@/hooks/store";
import likeImg from "../../../public/img/icon/dislike.svg";
import dislikeImg from "../../../public/img/icon/like.svg";
import Image from "next/image";
type BarLikeProps = {
  track: TrackType;
};

export const BarLike = ({ track }: BarLikeProps) => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { isLiked, handleLike } = useLikeTrack({ track });
  if (!currentTrack) {
    return null;
  }
  return (
    <div className={styles.trackPlay__likeDis}>
      <div
        className={clsx(styles.trackPlay__like, styles._btnIcon)}
        onClick={handleLike}
      >
        <Image width = {14} height={12} src={isLiked ? likeImg : dislikeImg} alt="like/dislike"  />
      </div>
    </div>
  );
};
