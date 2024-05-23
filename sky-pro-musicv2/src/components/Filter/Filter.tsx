import styles from "./Filter.module.css";
import { FilterItem } from "./FilterItem/FilterItem";
import { filters } from "./data";

export const Filter = () => {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      {filters.map((filter) => (
        <FilterItem
          key={filter.title}
          title={filter.title}
        />
      ))}
    </div>
  );
};
