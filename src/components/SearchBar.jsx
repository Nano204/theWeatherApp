import React from "react";
import styles from "./SearchBar.module.css";
import { HiSearchCircle } from "react-icons/hi";

//Componente funcional
export default function SearchBar({ onSearch }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className={styles.searchBar}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(input);
        setInput("");
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Search city..."
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <button className={styles.button} type="submit">
        <HiSearchCircle/>
      </button>
    </form>
  );
}
