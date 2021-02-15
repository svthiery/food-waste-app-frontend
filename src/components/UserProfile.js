import React from 'react';
import UserProfileForm from './UserProfileForm';

function UserProfile({ currentUser,  pickupsState, setPickupHistory}) {
    const filteredPickupsById = pickupsState.filter((pickup) => {
        return pickup.user_id === currentUser.id
        // console.log(currentUser.id)
      })
      console.log(filteredPickupsById)
    // const allPickupsById = filteredPickupsById.map((pickup) => {
    //     return (
        // return <PickupsTile 
        // key={pickup.id}
        // id={pickup.id}
        // item={pickup.item}
        // price={pickup.price}
        // userId={pickup.user_id}
        // restaurantId={pickup.restaurant_id}
        // image={pickup.image}
        // makeUnavailable= {makeUnavailable}
        // addFavorite={addFavorite}
        // currentUser={currentUser} 
        // />
    //     <div>
    //         <h3>{pickup.item}</h3>
    //         {/* <h3>{pickup.item}</h3> */}
    //         <p>$ {pickup.price}</p>
    //     </div>
    //     );
    // })

    const mappedPickupsToUser = filteredPickupsById.map((pickup) => {
        return (
            <div>
                <h3>{pickup.item}</h3>
                <p>{pickup.price}</p>
                <img src={pickup.image} alt={pickup.item} />
            </div>
        )
    })
    

    
    return (
        <div>
            <h1>Welcome {currentUser.username}</h1>
            <h4>Here are your past orders:</h4>
            {mappedPickupsToUser}
        </div>
    )
}

export default UserProfile;