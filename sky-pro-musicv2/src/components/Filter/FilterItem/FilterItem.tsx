"use client";
import clsx from "clsx";
import styles from "./FilterItem.module.css";
import { TrackType } from "@/types/type";
import { useAppDispatch } from "@/hooks/store";
import { setFilter } from "@/store/features/playlistSlice";
export type FilterItemType = {
  title: string;
  list: string[];
  value: string;
  tracks: TrackType[];
  isOpen: boolean;
  handleFilterOpen: (value: string) => void;
  selected: string[] | string;
};

export const FilterItem = ({
  title,
  list,
  value,
  handleFilterOpen,
  isOpen,
  selected,
}: FilterItemType) => {
  const dispatch = useAppDispatch();

  const handleFilter = (item: string) => {
    if (value === "sort") {
      dispatch(setFilter({ author: [], genre: [], orderSorting: item }));
    }
    const newFilter =
      selected instanceof Array
        ? selected.includes(item)
          ? selected.filter((el) => el !== item)
          : [...selected, item]
        : [item];
    dispatch(
      setFilter({
        [value]: newFilter,
        orderSorting: item,
        ...(value === "author" ? { genre: [] } : { author: [] }),
      })
    );
  };

  return (
    <div>
      <div
        className={clsx(styles.filter__button, styles._btnText, {
          [styles.openFilter]: isOpen,
        })}
        onClick={() => handleFilterOpen(title)}
      >
        {title}
      </div>
      {isOpen && (
        <div className={styles.filterContainer}>
          <ul className={styles.filterList}>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleFilter(item)}
                className={clsx(styles.listItem, {
                  [styles.listItemActive]:
                    value === "sort"
                      ? selected === item
                      : selected.includes(item),
                })}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
