import React from "react";

function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
