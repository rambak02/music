"use client";

import styles from "./Filter.module.css";
import { FilterItem } from "./FilterItem/FilterItem";
import { useState } from "react";
import { useAppSelector } from "@/hooks/store";
import { getUniqueValues } from "@/utils/getUniqueValues";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

export const Filter = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const tracks = useAppSelector((state) => state.playlist.initialPlaylist);
  const handleFilterOpen = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
    console.log(activeFilter)
  };

  const getUniqueAuthors = getUniqueValues(tracks, "author");
  const getUniqueGenre = getUniqueValues(tracks, "genre");

  const filterData = [
    {
      title: "исполнителю",
      list: getUniqueAuthors,
      value: "author",
      selected: useAppSelector((store) => store.playlist.searchFilter.author),
    },
    {
      title: "году выпуска",
      list: SORT_OPTIONS,
      value: "sort",
      selected: useAppSelector((store) => store.playlist.searchFilter.orderSorting),
    },
    {
      title: "жанру",
      list: getUniqueGenre,
      value: "genre",
      selected: useAppSelector((store) => store.playlist.searchFilter.genre),
    },
  ];
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filterData.map((filter) => (
        <FilterItem
          key={filter.title}
          title={filter.title}
          isOpen={activeFilter === filter.value}
          onClick={handleFilterOpen}
          list={filter.list}
          tracks={tracks}
          value={filter.value}
          selected={filter.selected}
        />
      ))}
    </div>
  );
};
