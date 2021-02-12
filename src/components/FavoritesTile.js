import React from 'react';

function FavoritesTile({ id, name, image, cuisine, subtractFavorite }) {
    
    function handleDislike() {
        subtractFavorite(id)
    }


    return (
        <div style={{ border: "1px dashed" }}>
      <h3>{name}</h3>
      {/* <p>Restaurant Name</p> */}
      <img src={image} alt={name} />
      <p>{cuisine}</p>
      
      <button onClick={handleDislike}>❤️ </button>
    </div>
    )
}

export default FavoritesTile;