import React from 'react';

function FavoritesTile({ id, name, image, cuisine, subtractFavorite, currentUser }) {
    
    function handleDislike() {
        subtractFavorite(id)
    }


    return (
        <div className="fave-tile">
      <h3>{name}</h3>
      {/* <p>Restaurant Name</p> */}
      <img src={image} alt={name} className="food-img"/>
      <p>{cuisine}</p>
      
      <button onClick={handleDislike}>Remove from Favorites</button>
    </div>
    )
}

export default FavoritesTile;