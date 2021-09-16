import React from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";

function AddUser(props) {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <h1>ASSIGNMENTS</h1>
                <label htmlFor="task">Task to do</label>
                <input id="task" type="text"></input>
                <label htmlFor="username">Who should do it?</label>
                <input id="username" type="text"></input>
                <label htmlFor="date">Deadline</label>
                <input id="date" type="date"></input>
                <button type="submit" className={styles["button-form"]}>
                    Assign the Task
                </button>
            </form>
        </Card>
    );
}

export default AddUser;
