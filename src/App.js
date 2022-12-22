import "./App.css";
import UserList from "./UserList";
import axios from "axios";
import { useState } from "react";

function App() {
  let [listOfUsers, setListOfUsers] = useState();
  let [userListComponent, setUserListComponent] = useState();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      setListOfUsers(response.data);
      if (listOfUsers) 
        setUserListComponent(<UserList list={listOfUsers} />);
    })
  return <div className="App">{userListComponent}</div>;
}

export default App;
