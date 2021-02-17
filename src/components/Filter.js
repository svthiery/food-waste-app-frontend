import React from 'react';

function Filter( { currentUser, handleCategoryChange, selectedCategory } ) {
    

  const toRender = currentUser ? 
        (
          
          <div className="filter">
          <select name="filter" id="filter" onChange={handleCategoryChange}>
            <option value=''>Filter by Cuisine</option>
            <option value="Korean">Korean</option>
            <option value="Healthy">Healthy</option>
            <option value="Greek">Greek</option>
            <option value="American (New)">American (New)</option>
            <option value="Argentinian">Argentinian</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Caribbean">Caribbean</option>
          </select>
  
          </div>
          
        ) 
        : 
        (
            <div >
                
            </div> 
        ) 
        return toRender   
}

export default Filter;