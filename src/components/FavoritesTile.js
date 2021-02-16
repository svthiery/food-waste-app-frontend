import React from 'react';

function FavoritesTile({ id, name, image, cuisine, subtractFavorite }) {
    
    // function handleDislike() {
    //     subtractFavorite(id)
    // }


    return (
        <div className="fave-tile">
      <h3>{name}</h3>
      <img src={image} alt={name} className="food-img"/>
      <p>{cuisine}</p>
      
      {/* <button onClick={handleDislike}>Remove from Favorites</button> */}
    </div>
    )
}

export default FavoritesTile;