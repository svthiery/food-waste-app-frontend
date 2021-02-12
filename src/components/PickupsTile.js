import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

function PickupsTile({
  id,
  item,
  price,
  available,
  userId,
  restaurantId,
  image,
  makeUnavailable,
}) {
  // const [] =

  // useEffect(() => {
  //     fetch('http://localhost:3001/restauraunts')
  //       .then(response => response.json())
  //       .then(pickupsArray => setPickupsState(pickupsArray));
  //   }, [])

  function handleAddItem() {
      console.log(id)
    fetch(`http://localhost:3001/pickups/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "available": false }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
    makeUnavailable(id);
  }

  return (
    <div style={{ border: "1px dashed" }}>
      <h3>{item}</h3>
      <p>Restaurant Name</p>
      <img src={image} alt={item} />
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
      {/* <button onClick={}>{available ? 'Reserve Item' : 'unread'}</button> */}
    </div>
  );
}

export default PickupsTile;
