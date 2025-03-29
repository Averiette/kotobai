import React, { useState } from "react";
// Components
import DropdownBlock from "@Components/DropdownBlock/DropdownBlock";
//Data
import { grammarTopics } from "@data/Grammar/Grammar";
//CSS
import styles from "./SearchBox.module.css";

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(grammarTopics);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredResults = grammarTopics
      .filter((item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.content.toLowerCase().includes(searchTerm)
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    setResults(filteredResults);
  };

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-upper"]}>
        <span className={`${styles["search-title"]} s6`}>TÌM KIẾM NGỮ PHÁP</span>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Nhập nội dung..."
          className={`${styles["search-input"]} b7`}
        />
      </div>

      <div className={styles["search-results"]}>
        {results.map((item, index) => (
          <DropdownBlock 
            key={index} 
            title={`${index + 1}. ${item.title}`} 
            content={<div>{item.content}</div>} 
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
