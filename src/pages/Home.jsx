import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import styles from "./Home.module.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>User Directory</h1>

            <div className={styles.grid}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Home;