import { useState } from "react";

const InputCapture = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h2>Live Input Capture</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>You typed: {text}</p>
        </div>
    );
};

export default InputCapture;
