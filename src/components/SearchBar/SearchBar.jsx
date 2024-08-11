import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please enter a search term");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <button className={css.searchBarBtn} type="submit">
          <FiSearch size="16px" />
        </button>
        <input
          onChange={handleChange}
          value={query}
          className={css.searchBarInput}
          type="text"
          placeholder="Search images and photos"
          required
          autoFocus
        />
      </form>
      <Toaster />
    </div>
  );
};

export default SearchBar;
