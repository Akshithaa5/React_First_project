import React, { useState, Fragment } from 'react';

import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, ucollegename) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, collegename:ucollegename , id: Math.random().toString() },
      ];
    });
  };

  return (

    <Fragment>
      <AddUsers onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;