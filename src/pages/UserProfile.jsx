import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!user) return <h2 className={styles.loading}>Loading...</h2>;

    return (
        <div className={styles.container}>
            <h1>{user.name}</h1>

            <div className={styles.details}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
            </div>

            <button onClick={() => navigate("/")}>Back</button>
        </div>
    );
};

export default UserProfile;