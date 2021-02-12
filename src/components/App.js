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


function App() {
  const [pickupsState, setPickupsState] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pickups')
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

console.log(pickupsState)


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Filter />
            <Search />
            <FavoritesContainer />
            <PickupsContainer pickups={pickupsState} makeUnavailable={makeUnavailable}/>
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
