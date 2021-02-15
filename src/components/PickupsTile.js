import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function PickupsTile({
  id,
  item,
  price,
  available,
  userId,
  restaurantId,
  image,
  makeUnavailable,
  addFavorite,
  currentUser
}) {
//   const [restaurantsInPickupTile, setRestaurantsInPickupTile] = useState([])

//   useEffect(() => {
//       fetch('http://localhost:3002/restaurants')
//         .then(response => response.json())
//         .then(restaurants => setRestaurantsInPickupTile(restaurants));
//     }, [])
  
//     let filteredRestaurants = restaurantsInPickupTile.filter((rest) => {
//         return rest.id === restaurantId
//  })
     
const history = useHistory();

  function handleAddItem() {
      console.log(id)
    fetch(`http://localhost:3002/pickups/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "available": false, "user_id": currentUser.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
    makeUnavailable(id);
    history.push("/profile");
  }

  function handleFavorite() {
    fetch(`http://localhost:3002/restaurants/${restaurantId}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "favorited": true }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
    addFavorite(restaurantId);
  }

  return (
    <div className="pickup-tile">
      <h3>{item}</h3>
      <p>add restaurant name here</p>
      <img src={image} alt={item} className="food-img"/>
      <p>${price}</p>
      <div>
        {available ? (
          <button
            onClick={handleAddItem}
            style={{ color: "green" }}
          >
            {" "}
            Reserve Item
          </button>
        ) : (
          <button disabled>Out of Stock</button>
        )}
      </div>
      <button onClick={handleFavorite} className="fave-button">❤️</button>
    </div>
  );
}

export default PickupsTile;
