import "./App.css";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/Users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const UserContext = {
    users: DUMMY_USERS,
  };
  return (
    <div>
      <UsersContext.Provider value={UserContext}>
        <UserFinder></UserFinder>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
