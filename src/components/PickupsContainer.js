import React from 'react';
import PickupsTile from './PickupsTile'

function PickupsContainer({ pickups, makeUnavailable, addFavorite, currentUser }) {

    const pickupsList = pickups.map((pickup) => {
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
        addFavorite={addFavorite}
        currentUser={currentUser} 
        />
    })
    const toRender = currentUser ? 
         (
            <div>
            {pickupsList}
        </div> 
        ) 
        : 
         (
            <div>

        </div> 
        ) 
        
        return toRender
    }
    // return (
    //     {currentUser ? 
    //     (<div>
    //         {pickupsList}
    //     </div> ) : 
    //     <div></div>
    //     }
    

export default PickupsContainer;