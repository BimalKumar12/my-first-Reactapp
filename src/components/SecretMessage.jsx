import { useState } from "react";

const SecretMessage = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px" , backgroundColor:"#e3e3e7ff" , borderRadius:"30px"}}>
                Secret Message
            </h2>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.875rem" ,justifyContent:"center"}}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                Show Secret Message
            </label>

            {isChecked && (
                <p style={{
                    marginTop: "12px",
                    padding: "12px 16px",
                    backgroundColor: "#cbdae1ff",
                    borderLeft: "3px solid #4f46e5",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    color: "#333",
                }}>
                    The secret message is: React is interesting!
                </p>
            )}
        </section>
    );
};

export default SecretMessage;