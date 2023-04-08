import React from "react";
import "./SearchResult-result.css";

export const SearchResult = ({ result }) => {
  return (
    // ข้อมูลแต่ละตัวที่เอาขึ้นมาได้จากการดึงมา
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result.name}
    </div>
  );
};