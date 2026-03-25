const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a Todo App" },
    { id: 3, task: "Practice" },
    { id: 4, task: "Deploy" },
];

const TodoList = () => {
    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px", backgroundColor:"#e3e3e7ff" }}>
                Todo List
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {todos.map((item) => (
                    <li key={item.id} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "6px",
                        fontSize: "0.875rem",
                    }}>
                        {item.task}
                        <button style={{
                            padding: "4px 10px",
                            borderRadius: "4px",
                            border: "1px solid #fca5a5",
                            backgroundColor: "#fff5f5",
                            color: "#e74c3c",
                            cursor: "pointer",
                            fontSize: "0.75rem",
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;