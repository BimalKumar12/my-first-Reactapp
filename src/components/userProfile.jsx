const UserProfile = ({ username, age, isAdmin = false }) => {
    return (
        <div style={{ border: "1px solid #dbd8d8ff", borderRadius: "10px", padding: "16px", minWidth: "150px" }}>
            <h3 style={{ marginBottom: "6px" }}>{username}</h3>
            <p style={{ color: "#666", fontSize: "0.875rem" }}>Age: {age}</p>
            <span style={{
                display: "inline-block",
                marginTop: "8px",
                padding: "2px 10px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                backgroundColor: isAdmin ? "#eef2ff" : "#f0fdf4",
                color: isAdmin ? "#4f46e5" : "#16a34a",
            }}>
                {isAdmin ? "Admin" : "User"}
            </span>
        </div>
    );
};

export default UserProfile;