import React from 'react';
import './App.css';
import { useState } from 'react';
import ladderList from './ladders/ladder-list.json';
import laddersDetails from './ladders/ladder-details.json';
import Selector from './selector/selector';
import Ladder from './ladder/ladder';
import UserProfile from './user-profile/user-profile';

const App = () => {
  const [ladder, setLadder] = useState(JSON.parse(window.localStorage.getItem('last-used-ladder') || '0') || ladderList[0].id);
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('last-used-user') || '{}') || {});
  return (
    <div className="flex flex-row min-h-screen justify-center items-center text-xs sm:text-sm lg:text-base">
      <div className="flex flex-col mb-6">
        <Selector
          name = "ladder"
          selectedValue = {ladder}
          onChange = {(e: any) => { 
            window.localStorage.setItem('last-used-ladder', JSON.stringify(ladder));
            setLadder(e.target.value);
          }}
          list = {ladderList}
        ></Selector>
        <UserProfile setUser = {setUser}></UserProfile>
        <Ladder 
          className=""
          selectedLadder = {laddersDetails[ladder]}
          user = {user}
        >
        </Ladder>
      </div>
    </div>
  );
}

export default App;
