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
      .then(data => console.log(data));
  }, [])


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Filter />
            <Search />
            <FavoritesContainer />
            <PickupsContainer />
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
