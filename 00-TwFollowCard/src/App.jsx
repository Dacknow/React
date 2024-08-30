import TwFollowCard from "./TwFollowCard";
function App() {
  const users = [
    {
      username: "dacknow098",
      name: "Daniel Armando Cordoba",
      isFollowing: true,
    },
    { username: "nikolat", name: "Nikolat Cordoba Ramirez" },
    { username: "jessica", name: "Jessica Ramirez" },
  ];
  return (
    <section className="App">
      {users.map((user) => (
        <TwFollowCard
          key={user.username}
          username={user.username}
          InitialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwFollowCard>
      ))}
    </section>
  );
}

export default App;
