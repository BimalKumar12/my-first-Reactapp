import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px", backgroundColor:"#e3e3e7ff" , borderRadius:"30px"}}>
                Search Bar
            </h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #8c8888ff",
                    fontSize: "0.875rem",
                    width: "260px",
                    outline: "none",
                }}
            />
            {query && (
                <p style={{ marginTop: "10px", fontSize: "0.875rem", color: "#666" }}>
                    {query.toUpperCase()}
                </p>
            )}
        </section>
    );
};

export default SearchBar;