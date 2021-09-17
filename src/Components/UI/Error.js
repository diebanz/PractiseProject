import React from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./Error.module.css";
import classes from "../UI/Button.module.css";

function Error(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button
                        className={classes.accept}
                        onClick={props.onConfirm}
                    >
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    );
}

export default Error;
