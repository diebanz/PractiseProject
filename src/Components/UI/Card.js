import React from "react";

import styles from "./Card.module.css";

function Card(props) {
    return (
        <div className={`${styles.card} ${styles.children}`}>
            {props.children}
        </div>
    );
}

export default Card;
