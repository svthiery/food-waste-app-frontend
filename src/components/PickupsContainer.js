import React from 'react';
import PickupsTile from './PickupsTile'

function PickupsContainer({ pickups, makeUnavailable, addFavorite, currentUser, selectedCategory }) {

    const filteredByCuisine = pickups.filter((pickup) => {
        return pickup.pickup_cuisine.includes(selectedCategory)
    })

    const pickupsList = filteredByCuisine.map((pickup) => {
        return <PickupsTile 
        key={pickup.id}
        id={pickup.id}
        item={pickup.item}
        price={pickup.price}
        userId={pickup.user_id}
        restaurantId={pickup.restaurant_id}
        image={pickup.image}
        available={pickup.available}
        makeUnavailable= {makeUnavailable}
        restaurantName={pickup.restaurant_name}
        pickupCuisine={pickup.pickup_cuisine}
        addFavorite={addFavorite}
        currentUser={currentUser} 
        />
    })
    const toRender = currentUser ? 
         (
            <div className="pickup-container">
            {pickupsList}
        </div> 
        ) 
        : 
         (
            <div >
                <h2>Please log in or sign up!</h2>
        </div> 
        ) 
        
        return toRender
    }
    

export default PickupsContainer;