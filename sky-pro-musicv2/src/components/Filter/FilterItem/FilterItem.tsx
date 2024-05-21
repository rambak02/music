import clsx from "clsx";
import styles from "./FilterItem.module.css";

type FilterItemType = {
    title: string; 
  };

export const FilterItem = ({ title } : FilterItemType) => {
  return (
    <div className={clsx(styles.filter__button, styles._btnText)}>{title}</div>
  );
};
