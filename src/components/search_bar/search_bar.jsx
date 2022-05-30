import React, { useRef } from "react";
import styles from "./search_bar.module.css";

const SearchBar = ({ onSearch, onPopular, onchangeBG }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const toFirst = () => {
    onPopular();
    inputRef.current.value = "";
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const changeBG = () => {
    onchangeBG();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={toFirst}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
      <button onClick={changeBG}>Mode</button>
    </header>
  );
};

export default React.memo(SearchBar);
