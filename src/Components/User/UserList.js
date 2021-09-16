import React from "react";

import Card from "../UI/Card";
import TaskButtons from "../UI/TaskButtons";
import styles from "./UserList.module.css";

function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul className={styles.list}>
                {props.users.map((user) => (
                    <li className={styles["list__item"]} key={user.id}>
                        <div className={styles.container}>
                            <p>
                                <span>task:</span> {user.task}
                            </p>
                            <p>
                                <span>assigned to:</span> {user.name}
                            </p>
                            <p>
                                <span>deadline:</span> {user.date}{" "}
                            </p>
                        </div>
                        <TaskButtons />
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;
