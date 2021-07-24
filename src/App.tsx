import React from 'react';
import './App.css';
import { useState } from 'react';
import ladderList from './ladders/ladder-list.json';
import laddersDetails from './ladders/ladder-details.json';
import Selector from './selector/selector';
import Ladder from './ladder/ladder';
import UserProfile from './user-profile/user-profile';

const App = () => {
  const [ladder, setLadder] = useState(ladderList[0].id);
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Selector
        name = "ladder"
        selectedValue = {ladder}
        onChange = {(e: any) => setLadder(e.target.value)}
        list = {ladderList}
      ></Selector>
      <UserProfile setUser = {setUser}></UserProfile>
      <Ladder 
       selectedLadder = {laddersDetails[ladder]}
       user = {user}
      >
      </Ladder>
    </div>
  );
}

export default App;
