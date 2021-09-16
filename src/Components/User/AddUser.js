import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {
    const [enteredTask, setEnteredTask] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredTask.trim().length === 0
        ) {
            return;
        }
        props.onAddUser(enteredTask, enteredUsername, enteredDate);
        setEnteredTask("");
        setEnteredUsername("");
        setEnteredDate("");
    };

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <h1 className={styles["heading__1"]}>ASSIGNMENTS</h1>
                <label htmlFor="task">Task to do</label>
                <input
                    id="task"
                    type="text"
                    value={enteredTask}
                    onChange={taskChangeHandler}
                ></input>
                <label htmlFor="username">Who should do it?</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                ></input>
                <label htmlFor="date">Deadline</label>
                <input
                    id="date"
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                ></input>
                <Button type="submit">ASSIGN THE TASK</Button>
            </form>
        </Card>
    );
}

export default AddUser;
