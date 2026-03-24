function Card({ title, description }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "200px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            textAlign: "center"
        }}>
            <h3>{title}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{description}</p>
        </div>
    )
}

export default Card