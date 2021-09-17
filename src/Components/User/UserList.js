import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./UserList.module.css";
import styles from "../UI/Button.module.css";

function UserList(props) {
    const [accepted, setAccepted] = useState();
    const [declined, setDeclined] = useState();

    const acceptHandler = () => {
        setAccepted(true);
    };

    const declineHandler = () => {
        setDeclined(true);
    };

    return (
        <Card className={classes.users}>
            <ul className={classes.list}>
                {props.users.map((user) => (
                    <li className={classes["list__item"]} key={user.id}>
                        <div
                            className={`${classes.container} ${
                                accepted ? classes.accepted : ""
                            } || ${declined ? classes.declined : ""}`}
                        >
                            <p>
                                <span>task:</span> {user.task}
                            </p>
                            <p>
                                <span>assigned to:</span> {user.name}
                            </p>
                            <p>
                                <span>deadline:</span> {user.date}
                            </p>
                        </div>
                        <div className={styles.buttonbox}>
                            <Button
                                className={styles.accept}
                                onClick={acceptHandler}
                            >
                                Accept
                            </Button>
                            <Button
                                className={styles.decline}
                                onClick={declineHandler}
                            >
                                Decline
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;
