import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";

import classes from "./UserList.module.css";
import styles from "../UI/Button.module.css";

function UserList(props) {
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState();
    const [declined, setDeclined] = useState();

    const acceptHandler = () => {
        setAccepted({
            title: "Task was accepted",
            message: "Good Luck",
        });

        return;
    };

    const declineHandler = () => {
        setDeclined({
            title: "Task was declined",
            message: "Let us know why",
        });

        return;
    };

    const errorHanlder = () => {
        setAccepted(null);
        setDeclined(null);
    };

    return (
        <div>
            {(accepted && (
                <Error
                    title={accepted.title}
                    message={accepted.message}
                    onConfirm={errorHanlder}
                />
            )) ||
                (declined && (
                    <Error
                        title={declined.title}
                        message={declined.message}
                        onConfirm={errorHanlder}
                    />
                ))}
            <Card className={classes.users}>
                <ul className={classes.list}>
                    {props.users.map((user) => (
                        <li className={classes["list__item"]} key={user.id}>
                            <div className={classes.container}>
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
        </div>
    );
}

export default UserList;
