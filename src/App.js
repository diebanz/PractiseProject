import React, { useState } from "react";

import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (task, username, date) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    task: task,
                    name: username,
                    date: date,
                    id: Math.random().toString,
                },
            ];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList}></UserList>
        </div>
    );
}

export default App;
