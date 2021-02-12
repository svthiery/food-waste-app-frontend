import React from 'react';
import FavoritesTile from './FavoritesTile';

function FavoritesContainer({ favorites, subtractFavorite }) {

    // console.log(favorites)

    const allFavorites = favorites.map((fav) => {
        return <div>
            <h3>Here is one fave</h3>
            <FavoritesTile
                key={fav.id}
                id={fav.id}
                name={fav.name}
                cuisine={fav.name}
                image={fav.image}
                subtractFavorite={subtractFavorite}
            />
         </div>
    })    

    return (
        <div>
            <h2>Favorites</h2>
            {allFavorites}
        </div>
    )
}

export default FavoritesContainer;