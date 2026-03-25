import { useRef, useEffect } from "react";

const AutoFocusForm = () => {
    const firstInputRef = useRef(null);

    useEffect(() => {
        firstInputRef.current.focus();
    }, []);

    const inputStyle = {
        display: "block",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        fontSize: "0.875rem",
        width: "260px",
        outline: "none",
        marginBottom: "10px",
    };

    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px" , backgroundColor:"#e3e3e7ff", borderRadius:"30px"}}>
                Registration Form
            </h2>
            <input ref={firstInputRef} type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="text" placeholder="Phone" style={inputStyle} />
            <button style={{
                marginTop: "4px",
                padding: "8px 20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#4f46e5",
                color: "#fff",
                fontSize: "0.875rem",
                cursor: "pointer",
            }}>
                Submit
            </button>
        </section>
    );
};

export default AutoFocusForm;