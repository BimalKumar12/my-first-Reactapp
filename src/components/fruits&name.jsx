function FruitName() {
    const name = "Bimal"

    const fruits = [
        { name: "Apple", emoji: "🍎" },
        { name: "Banana", emoji: "🍌" },
        { name: "Grapes", emoji: "🍇" },
    ]

    return (
        <div>
            <h1>Hello,Welcome to {name}'s React Page</h1>
            <ul style = {{ listStyle: "none", padding: 0 }}>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit.emoji} {fruit.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default FruitName