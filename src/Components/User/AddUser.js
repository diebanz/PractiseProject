import React from "react";

import styles from "./AddUser.module.css";

function AddUser(props) {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler} className={styles.form}>
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
    );
}

export default AddUser;
