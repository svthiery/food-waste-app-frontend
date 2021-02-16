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
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

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
      .then(pickupsArray => {
        setPickupsState(pickupsArray)
      });
  }, [])



  function makeUnavailable(itemId) {
    const updatedPickups = pickupsState.map((pickup) => {
      if (pickup.id === itemId) {
        return {...pickup, available: false, "user_id": currentUser.id}
      } else {
        return pickup
      }
    });
    setPickupsState(updatedPickups)
  }

  function handleDeletePickup(pickupId) {
    const updatedPickups = pickupsState.map((pickup) => {
      if (pickup.id === pickupId) {
        return {...pickup, available: true, "user_id": null}
      } else {
        return pickup
      }
    });
    setPickupsState(updatedPickups)
  }
 


const updatedItems = pickupsState.filter((pickup) => {
  return pickup.item.toLowerCase().includes(search.toLowerCase())
})



function addFavorite(restId) {
  const favoritedRest = restaurantState.filter((rest) => {
    return rest.id === restId
  })
  const newFavorites = [...favoritesState, favoritedRest[0]]
  setFavoritesState(newFavorites)
}




  return (
    <div className="app">
      <Router>
        <Header currentUser={currentUser} resetCurrentUser={setCurrentUser}/>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/">
            <Filter currentUser={currentUser} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
            <Search search={search} setSearch={setSearch} currentUser={currentUser} />
            <FavoritesContainer favorites={favoritesState} currentUser={currentUser} />
            <PickupsContainer pickups={updatedItems} makeUnavailable={makeUnavailable} addFavorite={addFavorite} currentUser={currentUser} selectedCategory={selectedCategory} />
          </Route>
          <Route path="/profile">
          {currentUser ? (
              <UserProfile currentUser={currentUser} pickupsState={pickupsState} setPickupHistory={setPickupHistory} handleDeletePickup={handleDeletePickup} />
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
