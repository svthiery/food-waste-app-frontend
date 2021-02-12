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


  useEffect(() => {
    fetch('http://localhost:3002/restaurants')
      .then(response => response.json())
      .then(restaurantsArray => setRestaurantState(restaurantsArray));
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
  }

const updatedItems = pickupsState.filter((pickup) => {
  return pickup.item.toLowerCase().includes(search.toLowerCase())
})

const favorites = []

function addFavorite(restId) {
  for (let i = 0; i < restaurantState.length; i++) {
    if (restaurantState[i].id === restId) {
      favorites.push(restaurantState[i])
    }
  };
  console.log(favorites)
}


function subtractFavorite(restId) {
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === restId) {
      favorites.splice(i, 1)
    }
  };
}

  return (
    <div className="app">
      <Router>
        <Header />
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
            <Filter />
            <Search search={search} setSearch={setSearch}/>
            <FavoritesContainer favorites={favorites} subtractFavorite={subtractFavorite} />
            <PickupsContainer pickups={updatedItems} makeUnavailable={makeUnavailable} addFavorite={addFavorite} />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
