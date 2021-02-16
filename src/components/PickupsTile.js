import React from "react";
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
  currentUser,
  restaurantName, 
  pickupCuisine
}) {

     
const history = useHistory();

  function handleAddItem() {
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
        makeUnavailable(id);
        history.push("/profile");
      })
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
      <p>{restaurantName}</p>
      <p>{pickupCuisine}</p>
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
