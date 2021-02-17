import React from 'react';

function Filter( { currentUser, handleCategoryChange, selectedCategory } ) {
    

    return (
        <div className="filter">
        <select name="filter" id="filter" onChange={handleCategoryChange}>
          <option value=''>Filter by Cuisine</option>
          <option value="Japanese">Japanese</option>
          <option value="Burgers">Burgers</option>
          <option value="Bar">Bar</option>
          <option value="French">Greek</option>
          <option value="Ramen">Ramen</option>
          <option value="Vegan">Vegan</option>
          <option value="Bakery">Bakery</option>
        </select>

        </div>
    )
}

export default Filter;