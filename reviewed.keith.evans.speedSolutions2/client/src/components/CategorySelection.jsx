import React from 'react';
// import Button from './Button'

const CategorySelection = ({ category, getParts, setLoggedOffHome }) => (
  <>
    <button
      className="partsCategorySelection"
      id={category}
      type="button"
      onClick={(e) => {
        getParts(e.target.id);
        setLoggedOffHome(true);
      }}
    >
      {category}
    </button>
  </>
);

export default CategorySelection;
