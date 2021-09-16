import React from "react";

import styles from "./Button.module.css";

function Button(props) {
    return (
        <button
            type={props.type || "button"}
            className={styles["button-form"]}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
