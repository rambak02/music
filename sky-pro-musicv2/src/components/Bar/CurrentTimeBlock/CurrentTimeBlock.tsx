import styles from "./currentTimeBlock.module.css";
import { formatSecond } from "../helper/format";

type CurrentTimeBlockProps = {
  currentTime: number;
  duration: number;
};

export const CurrentTimeBlock = ({
  currentTime,
  duration,
}: CurrentTimeBlockProps) => {
  const allTimeBar = formatSecond(Number(duration.toFixed(0)));
  const currentTimeBar = formatSecond(Number(currentTime.toFixed(0)));

  return (
    <div
      className={styles.timeBlock}
    >{`${currentTimeBar} / ${allTimeBar}`}</div>
  );
};
