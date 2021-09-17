import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import styles from "../UI/Button.module.css";
import classes from "./AddUser.module.css";

function AddUser(props) {
    const [enteredTask, setEnteredTask] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [error, setError] = useState();

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
            setError({
                title: "Invalid input",
                message: "Please enter proper name &/or task",
            });
            return;
        }
        props.onAddUser(enteredTask, enteredUsername, enteredDate);
        setEnteredTask("");
        setEnteredUsername("");
        setEnteredDate("");
    };

    const errorHanlder = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHanlder}
                />
            )}
            <Card>
                <form onSubmit={addUserHandler}>
                    <h1 className={classes["heading__1"]}>ASSIGNMENTS</h1>
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
                    <Button type="submit" className={styles["button-form"]}>
                        ASSIGN THE TASK
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
