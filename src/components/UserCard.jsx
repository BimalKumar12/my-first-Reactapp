import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <button onClick={() => navigate(`/user/${user.id}`)}>
                View Profile
            </button>
        </div>
    );
};

export default UserCard;