import React from "react";

function Search({ search, setSearch, currentUser }) {


  const toRender = currentUser ? 
        (
          
            <div className="search">
              <input
                type="text"
                id="search"
                placeholder="Search for an Item"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          
        ) 
        : 
        (
            <div >
                
            </div> 
        ) 
        return toRender




}

export default Search;
