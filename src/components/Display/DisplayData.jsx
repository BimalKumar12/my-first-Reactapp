import React from "react";
import styles from "./DisplayData.module.css";

const DisplayData = ({ data }) => {
    if (!data) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h3 className={styles.title}>Submitted Data</h3>

                <div className={styles.row}>
                    <span>Username:</span>
                    <strong>{data.username}</strong>
                </div>

                <div className={styles.row}>
                    <span>Password:</span>
                    <strong>{data.password}</strong>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;