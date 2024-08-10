import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return alert("Please enter a search term");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <input
        onChange={handleChange}
        value={query}
        className={css.input}
        type="text"
        placeholder="Search images and photos"
        required
        autoFocus
      />
    </form>
  );
};

export default SearchBar;
