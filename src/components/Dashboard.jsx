import UserProfile from "./userProfile";

const Dashboard = () => {
    return (
        <section style={{ marginBottom: "32px" }}>
            <h2 style={{ marginBottom: "16px", borderBottom: "2px solid #d8d4d4ff", paddingBottom: "8px", backgroundColor:"#e3e3e7ff", borderRadius:"30px"}}>
                User Dashboard
            </h2>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap",justifyContent: "center" }}>
                <UserProfile username="Bimal" age={22} isAdmin={true} />
                <UserProfile username="Prem" age={22} />
                <UserProfile username="Rudra" age={23} isAdmin={true} />
            </div>
        </section>
    );
};

export default Dashboard;