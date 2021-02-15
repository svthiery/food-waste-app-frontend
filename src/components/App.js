// import logo from './logo.svg';
// import '../App.css';

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import UserProfile from './UserProfile';
import FavoritesContainer from "./FavoritesContainer";
import Filter from "./Filter";
import PickupsContainer from "./PickupsContainer";
import Search from "./Search";
import Login from './Login';
import SignUp from './SignUp';


function App() {
  const [pickupsState, setPickupsState] = useState([])
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [restaurantState, setRestaurantState] = useState([])
  const [favoritesState, setFavoritesState] = useState([])
  const [pickupHistory, setPickupHistory] = useState([])


  useEffect(() => {
    fetch('http://localhost:3002/restaurants')
      .then(response => response.json())
      .then(restaurantsArray => {
        setRestaurantState(restaurantsArray)
        const favorites = restaurantsArray.filter((rest) => {
          return rest.favorited === true
        })
        setFavoritesState(favorites)
      });
  }, [])

  useEffect(() => {
    fetch('http://localhost:3002/pickups')
      .then(response => response.json())
      .then(pickupsArray => setPickupsState(pickupsArray));
  }, [])

  function makeUnavailable(itemId) {
    const updatedPickups = pickupsState.map((pickup) => {
      if (pickup.id === itemId) {
        return {...pickup, available: false}
      } else {
        return pickup
      }
    });
    setPickupsState(updatedPickups)
    // addToPickups(itemId)
  }

// function addToPickups(itemId) {
//   const newPickup = pickupsState.forEach(pickup => {
//     if (pickup.id === itemId) {
//       return pickup
//     }
//   })
//   newPickup.user_id = 1
//   console.log(newPickup)
// }

const updatedItems = pickupsState.filter((pickup) => {
  return pickup.item.toLowerCase().includes(search.toLowerCase())
})

// let favorites = []

function addFavorite(restId) {
  const favoritedRest = restaurantState.filter((rest) => {
    return rest.id === restId
  })
  const newFavorites = [...favoritesState, favoritedRest[0]]
  setFavoritesState(newFavorites)
  console.log(favoritedRest)
  console.log(newFavorites)
  // for (let i = 0; i < restaurantState.length; i++) {
  //   if (restaurantState[i].id === restId) {
  //     favorites.push(restaurantState[i])
  //   }
  // };
  // console.log(favorites)
  // favorites = [...favorites, favoritedRests]
  // console.log(favorites)
}





// function subtractFavorite(restId) {
//   for (let i = 0; i < favorites.length; i++) {
//     if (favorites[i].id === restId) {
//       favorites.splice(i, 1)
//     }
//   };
// }

  return (
    <div className="app">
      <Router>
        <Header currentUser={currentUser}  />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/">
          {currentUser ? (
              <h1>Welcome, {currentUser.username}!</h1>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
            <Filter currentUser={currentUser} />
            <Search search={search} setSearch={setSearch} currentUser={currentUser} />
            <FavoritesContainer favorites={favoritesState} currentUser={currentUser} />
            <PickupsContainer pickups={updatedItems} makeUnavailable={makeUnavailable} addFavorite={addFavorite} currentUser={currentUser} />
          </Route>
          <Route path="/profile">
          {currentUser ? (
              <UserProfile currentUser={currentUser} pickupsState={pickupsState} setPickupHistory={setPickupHistory}/>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
