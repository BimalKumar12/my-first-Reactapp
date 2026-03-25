import { useState } from "react";

const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false); // switch starts OFF

    const toggleSwitch = () => {
        setIsOn(!isOn); // flip: true → false, false → true
    };

    return (
        <div
            style={{
                backgroundColor: isOn ? "#FFD700" : "#1a1a1a", // yellow : dark
                height: "100px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                transition: "background-color 0.3s ease",  // smooth transition
            }}
        >
            <p style={{ color: isOn ? "#000" : "#fff", fontSize: "24px" }}>
                💡 Light is {isOn ? "ON" : "OFF"}
            </p>

            <button
                onClick={toggleSwitch}
                style={{
                    padding: "10px 24px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: isOn ? "#333" : "#FFD700",
                    color: isOn ? "#fff" : "#000",
                }}
            >
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </div>
    );
};

export default LightSwitch;
