import React from 'react';
import EventComponent from './events/EventComponent';
import { Parent } from './props/Parent';
import UserSearch from './refs/UserSearch';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <h1>Hey There!</h1> */}
        {/* <Parent/> */}
        <GuestList/>
        {/* <UserSearch/> */}
        <UserSearch/>
        <EventComponent/>
      {/* </header> */}
    </div>
  );
}

export default App;
