function Greeting({ name, role, emoji }) {
    return (
        <div style={{ border: "2px solid #a5a1a1ff", padding: 0, margin: "8px", borderRadius: "8px" }}>
            <h2>{emoji} Hello, {name}!</h2>
            <p>Role: {role}</p>
        </div>
    )
}

export default Greeting