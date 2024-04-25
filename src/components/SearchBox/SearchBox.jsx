import { useId } from "react";
import style from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const idInput = useId();
  return (
    <div className={style.searchContainer}>
      <label htmlFor={idInput}>Find contacts by name</label>
      <input
        type="text"
        id={idInput}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
