import React from "react";

import styles from "./Button.module.css";

function Button(props) {
    return (
        <button
            type="submit"
            className={styles["button-form"]}
            onClick={props.onClick}
        >
            ASSIGN THE TASK
        </button>
    );
}

export default Button;
