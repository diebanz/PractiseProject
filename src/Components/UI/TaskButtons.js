import React from "react";

import styles from "./Button.module.css";

function TaskButtons() {
    return (
        <div className={styles.buttonbox}>
            <button type="button" className={`${styles.btn} ${styles.accept}`}>
                Accept
            </button>
            <button type="button" className={`${styles.btn} ${styles.decline}`}>
                Decline
            </button>
        </div>
    );
}

export default TaskButtons;
