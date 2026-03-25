import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(0);

    const btnStyle = {
        padding: "6px 16px",
        borderRadius: "6px",
        border: "1px solid #e3e0e0ff",
        cursor: "pointer",
        fontSize: "0.875rem",
        backgroundColor: "#e1dedeff",
    };

    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px", backgroundColor:"#e3e3e7ff", borderRadius:"30px"}}>
                Counter App
            </h2>
            <p style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "16px" }}>{count}</p>
            <div style={{ display: "flex", gap: "10px" ,justifyContent:"center"}}>
                <button onClick={decrement} disabled={count === 0}
                    style={{ ...btnStyle, opacity: count === 0 ? 0.4 : 1 }}>
                    Decrement
                </button>
                <button onClick={reset} style={btnStyle}>Reset</button>
                <button onClick={increment} style={btnStyle}>Increment</button>
            </div>
            {count === 0 && <p style={{ marginTop: "10px", fontSize: "0.8rem", color: "#e74c3c" }}>
                Counter can't go below zero
            </p>}
        </section>
    );
};

export default Counter;